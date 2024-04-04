// src/components/stories/metrics/MetricsHeader.stories.js
import React from 'react';
import { TimeRangeProvider } from '../../context/TimeRangeContext';
import MetricsHeader from '../../components/metrics/MetricsHeader';

export default {
  title: 'Metrics/MetricsHeader',
  component: MetricsHeader,
  decorators: [(Story) => <TimeRangeProvider><Story /></TimeRangeProvider>],
};

const Template = (args) => <MetricsHeader {...args} />;

export const Default = Template.bind({});
