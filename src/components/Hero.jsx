import React from 'react';
import { Box, Typography } from '@mui/material';

const Hero = ({
  title = 'Become a React Dev',
  subtitle = 'Find the React job that fits your skill set',
}) => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#3949ab',
        py: 10,
        mb: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box sx={{ maxWidth: '1120px', px: { xs: 2, sm: 3, lg: 4 } }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
            color: 'white',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            fontSize: '1.25rem',
            color: 'white',
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
