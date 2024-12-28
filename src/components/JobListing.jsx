import React, { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Divider, Box } from '@mui/material';

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }

  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3, position: 'relative' }}>
      <CardContent>
        {/* Job Type and Title */}
        <Box mb={3}>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
            {job.type}
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            {job.title}
          </Typography>
        </Box>

        {/* Job Description */}
        <Typography variant="body1" mb={3}>
          {description}
        </Typography>

        {/* Show More/Less Button */}
        <Button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          size="small"
          sx={{
            color: '#3949ab',
            textTransform: 'none',
            '&:hover': { color: '#303f9f' },
            marginBottom: 2,
          }}
        >
          {showFullDescription ? 'Less' : 'More'}
        </Button>

        {/* Salary */}
        <Typography variant="body1" color="primary" mb={2}>
          {job.salary} / Year
        </Typography>

        <Divider sx={{ borderColor: '#f5f5f5', marginBottom: 3 }} />

        {/* Location and Read More */}
        <Box display="flex" flexDirection={{ xs: 'column', lg: 'row' }} justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" color="orange" mb={{ xs: 2, lg: 0 }}>
            <FaMapMarker style={{ marginRight: '8px', fontSize: '1.2rem' }} />
            <Typography variant="body1">{job.location}</Typography>
          </Box>
          <Button
            component={Link}
            to={`/jobs/${job.id}`}
            variant="contained"
            sx={{
              backgroundColor: '#3949ab',
              '&:hover': { backgroundColor: '#303f9f' },
              textTransform: 'none',
            }}
          >
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobListing;
