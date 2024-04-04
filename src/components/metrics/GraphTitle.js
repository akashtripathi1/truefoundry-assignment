import React from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types'


const GraphTitle = ({ title }) => {
  return (
    <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
      {title}
    </Typography>
  );
};

GraphTitle.propTypes = { 
  title: PropTypes.string.isRequired,
};

GraphTitle.defaultProps = { 
  title: 'GraphTitle',
};

export default GraphTitle;
