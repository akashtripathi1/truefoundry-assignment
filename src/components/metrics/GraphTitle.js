import React from 'react';
import Typography from '@mui/material/Typography';

const GraphTitle = ({ title }) => {
  return (
    <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
      {title}
    </Typography>
  );
};

export default GraphTitle;
