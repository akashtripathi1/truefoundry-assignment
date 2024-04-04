// src/components/stories/metrics/GraphTitle.stories.js
import React from 'react';
import GraphTitle from '../../components/metrics/GraphTitle';

export default {
  title: 'Metrics/GraphTitle',
  component: GraphTitle,
};

const Template = (args) => <GraphTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'CPU Usage',
};
