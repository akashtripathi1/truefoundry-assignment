import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Logo from '../../assets/arrow-up-right-from-square.png';
import { useLiveFeedStatus } from '../../context/LiveFeedStatusContext';


const ViewLogs = ({ startTimestamp, endTimestamp, onClick }) => {
  const { setIsLive } = useLiveFeedStatus();

    // Set isLive to false when the component is mounted
    useEffect(() => {
      setIsLive(false);
      // This empty dependency array ensures the effect runs only once on component mount
    }, []);
  
  return (
    <div onClick={onClick} style={{ padding: '3px', background: 'white', borderRadius: '6px', display: 'inline-block' }}>
      <Link to={`/logs?start=${startTimestamp}&end=${endTimestamp}&live=${false}`} style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          startIcon={<img src={Logo} alt="Logo" style={{ maxWidth: '10px', maxHeight: '10px' }} />}
          style={{
            backgroundColor: 'black',
            color: 'white',
            textTransform: 'none',
            borderRadius: '6px',
            padding: '3px 9px', // Reduced padding within the button
            fontSize: '0.750rem', // Smaller font size
            // Add more styling as needed to match the provided image
          }}
        >
          View logs
        </Button>
      </Link>
    </div>
  );
};

export default ViewLogs;
