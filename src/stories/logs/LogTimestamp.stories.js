// src/components/stories/logs/LogTimestamp.stories.js
import React from 'react';
import LogTimestamp from '../../components/logs/LogTimestamp';

export default {
  title: 'Logs/LogTimestamp',
  component: LogTimestamp,
};

const Template = (args) => <LogTimestamp {...args} />;

export const Default = Template.bind({});
Default.args = {
  timestamp: new Date().getTime(),
};
