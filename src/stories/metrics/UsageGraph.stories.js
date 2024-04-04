// src/components/stories/metrics/UsageGraph.stories.js
import React from 'react';
import UsageGraph from '../../components/metrics/UsageGraph';

export default {
  title: 'Metrics/UsageGraph',
  component: UsageGraph,
};

const mockData = {
  labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: 'rgba(75,192,192,1)',
      fill: false,
    },
  ],
  yMin: 50,
  yMax: 100,
};

const Template = (args) => <UsageGraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Sample Graph',
  data: mockData,
};
