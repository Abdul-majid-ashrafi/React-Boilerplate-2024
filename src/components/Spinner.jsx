import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Spinner = ({ loading }) => {
  if (!loading) return null;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '100px auto',
        height: '100%',
      }}
    >
      <CircularProgress
        sx={{
          color: '#4338ca',
        }}
        size={150}
      />
    </Box>
  );
};

export default Spinner;
