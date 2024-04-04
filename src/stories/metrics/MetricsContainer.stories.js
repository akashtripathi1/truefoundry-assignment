// src/components/stories/metrics/MetricsContainer.stories.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MetricsContainer from '../../components/metrics/MetricsContainer';
import { LiveFeedStatusProvider } from '../../context/LiveFeedStatusContext';
import { TimeRangeProvider } from '../../context/TimeRangeContext';

const theme = createTheme();

export default {
  title: 'Metrics/MetricsContainer',
  component: MetricsContainer,
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

const Template = (args) => <MetricsContainer {...args} />;

export const Default = Template.bind({});
