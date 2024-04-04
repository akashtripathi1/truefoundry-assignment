// src/components/stories/logs/LogItem.stories.js
import React from 'react';
import LogItem from '../../components/logs/LogItem';

export default {
  title: 'Logs/LogItem',
  component: LogItem,
};

const Template = (args) => <LogItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  log: { timestamp: new Date().getTime(), message: 'Sample log message', expanded: false },
  toggleExpand: () => console.log('Toggle expand'),
};
