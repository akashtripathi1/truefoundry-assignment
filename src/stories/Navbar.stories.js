// src/stories/Navbar.stories.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from '../components/Navbar'; // Corrected import path
import { TimeRangeProvider } from '../context/TimeRangeContext';
import { LiveFeedStatusProvider } from '../context/LiveFeedStatusContext';

// Mock the necessary context providers and theme for the Navbar component
const theme = createTheme();

export default {
  title: 'Components/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Router>
          <LiveFeedStatusProvider>
            <TimeRangeProvider>
              <Story />
            </TimeRangeProvider>
          </LiveFeedStatusProvider>
        </Router>
      </ThemeProvider>
    ),
  ],
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'truefoundry',
};

// Add more states as needed to showcase different scenarios like active buttons, different titles, etc.
