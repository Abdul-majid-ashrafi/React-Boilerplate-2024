import React from 'react';
import { Box } from '@mui/material';

const Card = ({ children, bg = '#f5f5f5' }) => {
  return (
    <Box
      sx={{
        backgroundColor: bg,
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      {children}
    </Box>
  );
};

export default Card;
