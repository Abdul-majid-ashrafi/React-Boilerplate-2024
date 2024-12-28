import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import Card from './Card';

const HomeCards = () => {
  return (
    <Box component="section" py={4}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card>
              <Typography variant="h5" fontWeight="bold">
                For Developers
              </Typography>
              <Typography variant="body1" mt={2} mb={4}>
                Browse our React jobs and start your career today
              </Typography>
              <Button
                component={Link}
                to="/jobs"
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: '#000',
                  '&:hover': { backgroundColor: '#424242' },
                }}
              >
                Browse Jobs
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: '#e8eaf6' }}>
              <Typography variant="h5" fontWeight="bold">
                For Employers
              </Typography>
              <Typography variant="body1" mt={2} mb={4}>
                List your job to find the perfect developer for the role
              </Typography>
              <Button
                component={Link}
                to="/add-job"
                variant="contained"
                sx={{
                  backgroundColor: '#3f51b5',
                  '&:hover': { backgroundColor: '#303f9f' },
                }}
              >
                Add Job
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeCards;