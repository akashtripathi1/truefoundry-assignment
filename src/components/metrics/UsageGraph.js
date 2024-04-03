import React, { useState, useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import Typography from '@mui/material/Typography';
import ViewLogs from './ViewLogs';

Chart.register(...registerables);

const UsageGraph = ({ title, data }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [showViewLogs, setShowViewLogs] = useState(false);
  const [logTimestamps, setLogTimestamps] = useState({ start: null, end: null });
  const [dragStartIndex, setDragStartIndex] = useState(null);
  const [dragEndIndex, setDragEndIndex] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [viewLogsPosition, setViewLogsPosition] = useState({ top: 0, left: 0 }); // Added for positioning

 
  const [draggedDatasetIndex, setDraggedDatasetIndex] = useState(null); // State to track the dragged dataset index

  useEffect(() => {
    if (chartRef.current && !chartInstanceRef.current) {
      chartInstanceRef.current = new Chart(chartRef.current.getContext('2d'), {
        type: 'line',
        data: {
          labels: data.labels,
          datasets: data.datasets.map(dataset => ({
            ...dataset,
            pointBackgroundColor: 'rgba(0, 0, 0, 0.1)',
            pointBorderColor: 'rgba(0, 0, 0, 0.1)',
            pointRadius: 3,
            pointHoverBackgroundColor: 'blue',
            pointHoverBorderColor: 'blue',
            pointHoverRadius: 7,
          })),
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {},
            y: {
              suggestedMin: data.yMin,
              suggestedMax: data.yMax,
            },
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: false
            },
          },
        },
      });
    }
  }, [data]);

  useEffect(() => {
    const chart = chartInstanceRef.current;
    if (chart && dragStartIndex !== null && dragEndIndex !== null && draggedDatasetIndex !== null) {
      chart.data.datasets.forEach((dataset, index) => {
        dataset.pointBackgroundColor = dataset.data.map((_, dataIndex) => 
          index === draggedDatasetIndex && dataIndex >= Math.min(dragStartIndex, dragEndIndex) && dataIndex <= Math.max(dragStartIndex, dragEndIndex) ? 'orange' : 'rgba(0, 0, 0, 0.1)'
        );
        dataset.pointBorderColor = dataset.data.map((_, dataIndex) => 
          index === draggedDatasetIndex && dataIndex >= Math.min(dragStartIndex, dragEndIndex) && dataIndex <= Math.max(dragStartIndex, dragEndIndex) ? 'orange' : 'rgba(0, 0, 0, 0.1)'
        );
      });
      chart.update();
    }
  }, [dragStartIndex, dragEndIndex, data.labels, draggedDatasetIndex]);

  useEffect(() => {
    const canvas = chartRef.current;
    const chart = chartInstanceRef.current;

    const handleMouseDown = (event) => {
      const points = chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
      if (points.length) {
        setIsDragging(true);
        setDragStartIndex(points[0].index);
        setDragEndIndex(points[0].index);
        setDraggedDatasetIndex(points[0].datasetIndex);
      }
    };

    const handleMouseMove = (event) => {
      if (!isDragging) return;
      const points = chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
      if (points.length) {
        setDragEndIndex(points[0].index);
      }
    };

    const handleMouseUp = (event) => {
      if (isDragging) {
        const point = chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true)[0];
        if (point) {
          const { top, left } = chart.canvas.getBoundingClientRect();
          const pointMeta = chart.getDatasetMeta(point.datasetIndex).data[point.index];
          setViewLogsPosition({ top: pointMeta.y + top, left: pointMeta.x + left }); // Calculate position
        }
      }
      setIsDragging(false);
    };

    // const handleMouseUp = () => {
    //   setIsDragging(false);
    //   setDraggedDatasetIndex(null); // Reset dragged dataset index on mouse up
    // };

    if (canvas) {
      canvas.addEventListener('mousedown', handleMouseDown);
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('mousedown', handleMouseDown);
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, [isDragging]); // Dependencies ensure these handlers are set once

  
    // Log timestamps update
    useEffect(() => {
      if (!isDragging && dragStartIndex !== null && dragEndIndex !== null) {
        const start = Math.min(dragStartIndex, dragEndIndex);
        const end = Math.max(dragStartIndex, dragEndIndex);
        const startTime = data.labels[start];
        const endTime = data.labels[end];
        setLogTimestamps({ start: startTime, end: endTime });
        setShowViewLogs(true);
      }
    }, [dragStartIndex, dragEndIndex, isDragging, data.labels]);



  const parseTimeToTimestamp = (timeStr) => {
    const timeParts = timeStr.match(/(\d+):(\d+):(\d+)\s*(AM|PM)/i);
    if (!timeParts) return null;
  
    const now = new Date();
    const hours = parseInt(timeParts[1]) % 12 + (timeParts[4].toUpperCase() === 'PM' ? 12 : 0);
    const minutes = parseInt(timeParts[2]);
    const seconds = parseInt(timeParts[3]);
  
    const date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, seconds);
    return date.getTime(); // Convert to Unix timestamp
  };
  
  useEffect(() => {
    if (dragStartIndex !== null && dragEndIndex !== null && !isDragging) {
      const startIndex = Math.min(dragStartIndex, dragEndIndex);
      const endIndex = Math.max(dragStartIndex, dragEndIndex);
      const startTime = parseTimeToTimestamp(data.labels[startIndex]);
      const endTime = parseTimeToTimestamp(data.labels[endIndex]);
      setLogTimestamps({ start: startTime, end: endTime });
      setShowViewLogs(true);
    } else {
      setShowViewLogs(false);
    }
  }, [dragStartIndex, dragEndIndex, isDragging, data.labels]);
  

  return (
    <React.Fragment>
      <Typography variant="h6" component="div" sx={{
        mb: 2,
        textAlign: 'left',
        color: '#2e2e2e',
      }}>
        {title}
      </Typography>
      <div style={{
        width: '590px',
        height: '334px',
        padding: '12px 16px 16px 16px',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        <canvas ref={chartRef} style={{ width: '100%', height: '100%' }} />
      </div>
      {showViewLogs && (
        <div style={{ position: 'absolute', top: viewLogsPosition.top, left: viewLogsPosition.left }}>

          <ViewLogs
            startTimestamp={logTimestamps.start}
            endTimestamp={logTimestamps.end}
            onClick={() => console.log('ViewLogs clicked')}
          />
        </div>
      )}

    </React.Fragment>
  );
};

UsageGraph.defaultProps = {
  title: 'Graph',
};

export default UsageGraph;
