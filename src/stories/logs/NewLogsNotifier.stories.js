// src/components/stories/logs/NewLogsNotifier.stories.js
import React from 'react';
import NewLogsNotifier from '../../components/logs/NewLogsNotifier';

export default {
  title: 'Logs/NewLogsNotifier',
  component: NewLogsNotifier,
};

const Template = (args) => <NewLogsNotifier {...args} />;

export const Default = Template.bind({});
Default.args = {
  newLogsCount: 3,
  scrollToBottom: () => console.log('Scroll to bottom'),
};
