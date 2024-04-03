// App.js
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Logs from './components/logs/LogContainer';
import Metrics from './components/metrics/MetricsContainer';
import Storybook from './components/Storybook';
import { TimeRangeProvider } from './context/TimeRangeContext';
import { LiveFeedStatusProvider } from './context/LiveFeedStatusContext';
import './App.css';


function App() {
  return (
    <Router>
      <LiveFeedStatusProvider>
      <TimeRangeProvider> 
      <div className='app'>
        
        <Navbar title = 'truefoundry' icon= 'TFlogo' />
        <Routes>
          <Route exact path="/metrics" element={(
            <Fragment>
              <Metrics />
            </Fragment>
          )} />
          <Route exact path="/logs" element={(
            <Fragment>
              <Logs />
            </Fragment>
          )} />
          <Route exact path="/storybook" element={(
            <Fragment>
              <Storybook />
            </Fragment>
          )} />

        </Routes>

      </div>
      </TimeRangeProvider>

      </LiveFeedStatusProvider>
    </Router>
  );
}

export default App;
