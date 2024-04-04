// src/components/stories/metrics/ViewLogs.stories.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LiveFeedStatusProvider } from '../../context/LiveFeedStatusContext';
import ViewLogs from '../../components/metrics/ViewLogs';

export default {
  title: 'Metrics/ViewLogs',
  component: ViewLogs,
  decorators: [(Story) => <BrowserRouter><LiveFeedStatusProvider><Story /></LiveFeedStatusProvider></BrowserRouter>],
};

const Template = (args) => <ViewLogs {...args} />;

export const Default = Template.bind({});
Default.args = {
  startTimestamp: new Date().getTime() - 3600000, // 1 hour ago
  endTimestamp: new Date().getTime(),
};
