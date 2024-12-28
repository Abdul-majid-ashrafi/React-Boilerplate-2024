import React from 'react';
import JobListings from '../components/JobListings';
import { Box, Container } from '@mui/material';

const JobsPage = () => {
  return (
    <Box sx={{ backgroundColor: '#e3f2fd', py: 6 }}>
      <Container maxWidth="lg">
        <JobListings />
      </Container>
    </Box>
  );
};

export default JobsPage;
