import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Box, Typography, Button } from '@mui/material';

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <FaExclamationTriangle className="text-yellow-400" style={{ fontSize: '6rem', marginBottom: '1rem' }} />
      <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        404 Not Found
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: 3 }}>
        This page does not exist
      </Typography>
      <Link to="/">
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: '#3f51b5',
            '&:hover': {
              backgroundColor: '#303f9f',
            },
            padding: '8px 16px',
          }}
        >
          Go Back
        </Button>
      </Link>
    </Box>
  );
};

export default NotFoundPage;
