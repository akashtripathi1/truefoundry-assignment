import React, { useState, useEffect, Fragment } from 'react';
import MetricsHeader from './MetricsHeader';
import UsageGraph from './UsageGraph';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { MimicMetrics } from '../../services/api-mimic'; // Adjust the path as necessary
import { useLocation } from 'react-router-dom';

const MetricsContainer = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [metricsData, setMetricsData] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const startTs = selectedDate.getTime() - (60 * 60 * 1000); // 1 hour range for demo
    const endTs = selectedDate.getTime();

    MimicMetrics.fetchMetrics({ startTs, endTs }).then(data => {
      setMetricsData(data);
    });
  }, [selectedDate,location.search]);

 

    // Map labels to colors
    const getLineColor = (label) => {
      switch (label) {
        case 'Used':
          return 'red';
        case 'Requested':
          return 'blue';
        case 'Limits':
          return 'green';
        case 'Read':
          return 'blue';
        case 'Write':
          return 'red';
        default:
          return 'black'; // Default color
      }
    };

  // Convert the metric data into a structure suitable for Chart.js
  const toChartJsData = (metric) => ({
    labels: metric.graphLines[0].values.map(v => new Date(v.timestamp).toLocaleTimeString()),
    datasets: metric.graphLines.map(line => ({
      label: line.name,
      data: line.values.map(v => v.value),
      borderColor: getLineColor(line.name),
      borderWidth: 2,
      fill: false,
    })),
    yMin: Math.min(...metric.graphLines.flatMap(line => line.values.map(v => v.value))),
    yMax: Math.max(...metric.graphLines.flatMap(line => line.values.map(v => v.value))),
  });



  return (
    <Fragment>
   <div className="metrics-container">
        <MetricsHeader />
        <Grid container spacing={2}>
          {metricsData.map((metric, idx) => (
            <Grid item xs={12} sm={6} key={idx}>
              <Paper sx={{
                padding: 3,
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
                backgroundColor: '#fff',
              }}>
                <UsageGraph title={metric.name} data={toChartJsData(metric)} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </Fragment>
  );
};

export default MetricsContainer;
