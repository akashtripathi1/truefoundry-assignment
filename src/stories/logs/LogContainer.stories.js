// src/components/stories/logs/LogContainer.stories.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { TimeRangeProvider } from '../../context/TimeRangeContext';
import { LiveFeedStatusProvider } from '../../context/LiveFeedStatusContext';
import LogContainer from '../../components/logs/LogContainer';

export default {
  title: 'Logs/LogContainer',
  component: LogContainer,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <LiveFeedStatusProvider>
          <TimeRangeProvider>
            <Story />
          </TimeRangeProvider>
        </LiveFeedStatusProvider>
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <LogContainer {...args} />;

export const Default = Template.bind({});
