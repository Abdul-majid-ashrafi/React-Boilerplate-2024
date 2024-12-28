import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import JobListing from './JobListing';
import Spinner from './Spinner';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const JobListings = ({ isHome = false }) => {
  const [loading, setLoading] = useState(true);

  const jobs = useSelector((state) => state.jobs.list);

  useEffect(() => {
    if (jobs.length) {
      setLoading(false);
    }
  }, [jobs]);

  return (
    <Box sx={{ backgroundColor: '#e3f2fd', py: 10 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          textAlign="center"
          mb={6}
        >
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </Typography>

        {/* Content */}
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <Grid container spacing={3}>
            {jobs.map((job, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Paper elevation={3} sx={{ p: 2 }}>
                  <JobListing job={job} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default JobListings;
