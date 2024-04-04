// src/components/stories/logs/LogType.stories.js
import React from 'react';
import LogType from '../../components/logs/LogType';

export default {
  title: 'Logs/LogType',
  component: LogType,
};

const Template = (args) => <LogType {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'info',
};
