import React, { useState, useEffect, useCallback, useRef, Fragment } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTimeRangeContext } from '../../context/TimeRangeContext';
import { useLiveFeedStatus } from '../../context/LiveFeedStatusContext';
import { MimicLogs } from '../../services/api-mimic';
import { Box, Paper, CircularProgress } from '@mui/material';
import LogItem from './LogItem';
import LogHeader from './LogHeader';
import NewLogsNotifier from './NewLogsNotifier';

const LogContainer = () => {
  const [logs, setLogs] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { selectedTimeRange } = useTimeRangeContext();
  const logsRef = useRef(null);
  const { isLive, setIsLive } = useLiveFeedStatus();
  const [newLogsCount, setNewLogsCount] = useState(0);
const [startTs, setStartTs] = useState(new Date().getTime() - 30 * 60 * 1000);


  

  const parseTimeRange = useCallback((range) => {
    const now = new Date();
    switch (range) {
      case '5m':
        return new Date(now.getTime() - 5 * 60000);
      case '15m':
        return new Date(now.getTime() - 15 * 60000);
      case '30m':
        return new Date(now.getTime() - 30 * 60000);
      case '1h':
        return new Date(now.getTime() - 60 * 60000);
      case '3h':
        return new Date(now.getTime() - 3 * 60 * 60000);
      case '6h':
        return new Date(now.getTime() - 6 * 60 * 60000);
      case '12h':
        return new Date(now.getTime() - 12 * 60 * 60000);
      case '24h':
        return new Date(now.getTime() - 24 * 60 * 60000);
      default:
        return typeof range === 'object' && range.start && range.end ? { start: new Date(range.start), end: new Date(range.end) } : now;
    }
  }, []);


  const toggleExpand = (index) => {
    const newLogs = [...logs];
    newLogs[index].expanded = !newLogs[index].expanded;
    setLogs(newLogs);
  };


  // ********************************************* Fetch Logs, Fetch More Logs and scroll control ***************************************

  const fetchLogs = useCallback((startTs, endTs) => {
    MimicLogs.fetchPreviousLogs({ startTs, endTs, limit: 100 }).then(fetchedLogs => {
      const sortedLogs = fetchedLogs.sort((a, b) => a.timestamp - b.timestamp);
      setLogs(prevLogs => [...sortedLogs.map(log => ({ ...log, expanded: false })), ...prevLogs]);

    });
  }, []);
  


  const logsContainerRef = useRef(null); // Ref for the logs container


const fetchMoreLogs = useCallback(() => {
    const thirtyMinutesInMilliseconds = 30 * 60 * 1000;
    // Calculate newStartTs based on the current startTs state
    const newStartTs = startTs - thirtyMinutesInMilliseconds;

    MimicLogs.fetchPreviousLogs({ startTs: newStartTs, endTs: startTs, limit: 100 }).then(fetchedLogs => {
        const sortedLogs = fetchedLogs.sort((a, b) => a.timestamp - b.timestamp);
        setLogs(prevLogs => [...sortedLogs.map(log => ({ ...log, expanded: false })), ...prevLogs]);
        setStartTs(newStartTs); // Update startTs for the next fetch
    });
}, [startTs, setLogs]); // Depend on startTs to ensure the function updates when it changes


  
  useEffect(() => {
    const handleScroll = () => {
      // Ensure the ref current value is not null
      if (logsContainerRef.current) {
        const scrollTop = logsContainerRef.current.scrollTop;
        if (scrollTop === 0) {
          fetchMoreLogs();
        }
      }
    };

    const scrollableElement = logsContainerRef.current;
    if (scrollableElement) {
      scrollableElement.addEventListener('scroll', handleScroll);
      return () => scrollableElement.removeEventListener('scroll', handleScroll);
    }
  }, [fetchMoreLogs]);

 



// Effect to handle time range selection from navbar
useEffect(() => {
  const range = parseTimeRange(selectedTimeRange);
  if(isLive) fetchLogs(range.start ? range.start : range, range.end ? range.end : new Date());
}, [selectedTimeRange, fetchLogs, parseTimeRange, isLive]);

// Effect to handle URL parameters (custom time range)
useEffect(() => {
  const start = searchParams.get('start');
  const end = searchParams.get('end');
  if (start && end) {
    fetchLogs(parseInt(start), parseInt(end));
    setIsLive(false);
  }
  else { setIsLive(true); }
}, [searchParams, fetchLogs, setIsLive]);


// Effect for live updates

const handleScrollToBottom = () => {
  const container = logsContainerRef.current;
  if (container) {
    const isScrolledToBottom =
      container.scrollHeight - container.scrollTop <= container.clientHeight;

    // Reset newLogsCount only if scrolled to bottom
    if (isScrolledToBottom) {
      setNewLogsCount(0);
    }
  }
};

useEffect(() => {
  const container = logsContainerRef.current;
  if (container) {
    container.addEventListener('scroll', handleScrollToBottom);
    return () => container.removeEventListener('scroll', handleScrollToBottom);
  }
}, [logsContainerRef]);

useEffect(() => {
  if (isLive) {
    const container = logsContainerRef.current;

    const unsubscribe = MimicLogs.subscribeToLiveLogs(newLog => {
      setLogs(currentLogs => [...currentLogs, { ...newLog, expanded: false }]);

      const isScrolledToBottom =
        container.scrollHeight - container.scrollTop <= container.clientHeight;

      // Only update newLogsCount if not scrolled to bottom
      if (!isScrolledToBottom) {
        setNewLogsCount(prevCount => prevCount + 1);
      }
    });

    return () => unsubscribe();
  }
}, [isLive, logsContainerRef]);

const scrollToBottom = () => {
  const container = logsContainerRef.current;

  if (container) {
    container.scrollTop = container.scrollHeight;
  }
};


  

  return (<Fragment>

   < LogHeader />
    <Paper 
            ref = {logsContainerRef}
            elevation={3} 
            className='log-dashboard'
      sx={{
        width: '95%',
        maxHeight: '80vh',
        overflowY: 'auto',
        mt: 1,
        mx: 'auto',
        mb: 1,
        borderRadius: '10px',
        padding: '0px 10px 10px 10px',
        backgroundColor: '#090F17',
        color: '#A8C3E8',
        position: 'relative',
      }}>
   


      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 1,
        backgroundColor: '#0D1522',
        color: '#82A0CE',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        fontWeight: 'bold',
      }}>
        <CircularProgress size={20} color="inherit" sx={{ marginRight: '8px' }} />
        <span>Loading previous 100 logs</span>
      </Box>

     


      <div ref={logsRef}>
        {logs.map((log, index) => (
          <LogItem key={index} log={log} toggleExpand={() => toggleExpand(index)} data-timestamp={log.timestamp} />
        ))}
      </div>

      <div style={{ position: 'sticky', bottom: '30px', right: '30px', zIndex: 11 }}>
  <NewLogsNotifier newLogsCount={newLogsCount} scrollToBottom={scrollToBottom} />
</div>





    </Paper>

  </Fragment>

  );
};

export default LogContainer;
