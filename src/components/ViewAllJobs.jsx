import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const ViewAllJobs = () => {
  return (
    <Box 
      component="section" 
      sx={{ margin: 'auto', maxWidth: '600px', my: 4, px: 3 }}
    >
      <Button
        component={Link}
        to="/jobs"
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: '#000',
          color: '#fff',
          py: 2,
          borderRadius: 2,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#424242',
          },
        }}
      >
        View All Jobs
      </Button>
    </Box>
  );
};

export default ViewAllJobs;
