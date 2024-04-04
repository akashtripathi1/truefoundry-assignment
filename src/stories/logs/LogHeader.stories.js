// src/components/stories/logs/LogHeader.stories.js
import React from 'react';
import { TimeRangeProvider } from '../../context/TimeRangeContext';
import LogHeader from '../../components/logs/LogHeader';

export default {
  title: 'Logs/LogHeader',
  component: LogHeader,
  decorators: [(Story) => <TimeRangeProvider><Story /></TimeRangeProvider>],
};

const Template = (args) => <LogHeader {...args} />;

export const Default = Template.bind({});
