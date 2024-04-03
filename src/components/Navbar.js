import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Select, MenuItem, FormControl } from '@mui/material';
import logo from '../assets/TFlogo.svg';
import MetricsActive from '../assets/metrics.png';
import MetricsInactive from '../assets/metrics-gray.png';
import LogsActive from '../assets/list-active.png';
import LogsInactive from '../assets/list.png';
import PropTypes from 'prop-types';
import { useTimeRangeContext } from '../context/TimeRangeContext';
import { useLiveFeedStatus } from '../context/LiveFeedStatusContext';


const Dropdown = ({ setTimeRange }) => {
  const [selectedOption, setSelectedOption] = useState('5m');
  const  {isLive ,setIsLive}  = useLiveFeedStatus();
  const navigate = useNavigate();



  const handleDropdownChange = (e) => {
    const newTimeRange = e.target.value;
    setSelectedOption(newTimeRange);
    setTimeRange(newTimeRange);
    setIsLive(true);
    navigate(`?live=true`);
  };


  return (
    <FormControl variant="outlined" size="small" style={{ marginRight: '10px' }}>
      <Select
        value={selectedOption}
        onChange={handleDropdownChange}
        displayEmpty
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          getContentAnchorEl: null,
        }}
      >
        <MenuItem value="5m">Last 5 minutes</MenuItem>
        <MenuItem value="15m">Last 15 minutes</MenuItem>
        <MenuItem value="30m">Last 30 minutes</MenuItem>
        <MenuItem value="1h">Last 1 hour</MenuItem>
        <MenuItem value="3h">Last 3 hours</MenuItem>
        <MenuItem value="6h">Last 6 hours</MenuItem>
      </Select>
    </FormControl>
  );
};

const Navbar = ({ title }) => {
  const { setSelectedTimeRange } = useTimeRangeContext();
  const location = useLocation();
  const  {isLive ,setIsLive}  = useLiveFeedStatus();

  const [selectedButton, setSelectedButton] = useState( 0
    // location.pathname.includes('/metrics') ? 1 : 2
  );

  const logParam = `/logs?live=${isLive}`;

  useEffect(() => {
    if (location.pathname.includes('/metrics')) {
      setSelectedButton(1);
    } else if (location.pathname.includes('/logs')) {
      setSelectedButton(2);
    } else {
      setSelectedButton(0); // No button is selected when on root path
    }
  }, [location]);

  const buttonStyle = {
    width: '128px',
    height: '32px',
    margin: '0 10px',
    opacity: 1,
    backgroundColor: 'white',
  };

  const imageStyle = {
    width: '20px',
    height: '20px',
  };

  const getButtonStyle = (buttonNumber) => ({
    ...buttonStyle,
    borderBottom: selectedButton === buttonNumber ? '3px solid purple' : 'none',
  });

  const getButtonLogo = (buttonNumber) => {
    switch (buttonNumber) {
      case 1:
        return selectedButton === 1 ? MetricsActive : MetricsInactive;
      case 2:
        return selectedButton === 2 ? LogsActive : LogsInactive;
      default:
        return MetricsInactive;
    }
  };

  return (
    <nav className="navbar" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="leadingContent" style={{ display: 'flex', alignItems: 'center' }}>
        <h1>
          <img src={logo} alt="logo" className="mainLogo" />
        </h1>
        <ul className="navigation" style={{ listStyle: 'none', display: 'flex', marginLeft: '10px' }}>
          <li>
            <Button
              variant="contained"
              style={getButtonStyle(1)}
              startIcon={<img src={getButtonLogo(1)} alt="Metrics" style={imageStyle} />}
              onClick={() => setSelectedButton(1)}
              component={Link}
              to="/metrics"
            >
              Metrics
            </Button>
          </li>
          <li>
            <Button
              variant="contained"
              style={getButtonStyle(2)}
              startIcon={<img src={getButtonLogo(2)} alt="Logs" style={imageStyle} />}
              onClick={() => setSelectedButton(2)}
              component={Link}
              to= "/logs?live=true"
            >
              Logs
            </Button>
          </li>
        </ul>
      </div>
      <Dropdown setTimeRange={setSelectedTimeRange} />
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'truefoundry',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;