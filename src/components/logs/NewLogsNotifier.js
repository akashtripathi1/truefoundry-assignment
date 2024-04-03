import React from "react";
import { Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Logo from '../../assets/arrow-up-long.png';

const NewLogsNotifier = ({ newLogsCount, scrollToBottom }) => {
  // Define the clickHandler function
  const clickHandler = () => {
    console.log('Button clicked');
    scrollToBottom();
    // Add logic for what should happen when the button is clicked
  };

  return newLogsCount > 0 ? (
    <Button
      onClick={clickHandler}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4338CA',
        color: 'white',
        '&:hover': {
          backgroundColor: '#4338CA', // Keep the background color fixed on hover
        },
        padding: '6px', // Adjust padding for smaller button size
        borderRadius: '5px'
        
      }}
    >
      {`${newLogsCount} new logs `}
      <IconButton sx = {{padding: '6px'}}>
      <img src={Logo} alt="Arrow Up" style={{ width: '12px', height: '12px' }} />
    </IconButton>
    </Button>
  ) : null;
};

export default NewLogsNotifier;
