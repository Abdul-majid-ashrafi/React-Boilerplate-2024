import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { AppBar, Box, Toolbar, Button, Typography } from '@mui/material';

const Navbar = () => {
  const linkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    borderRadius: '4px',
    padding: '6px 16px',
    color: isActive ? 'white' : 'rgba(255, 255, 255, 0.7)',
    backgroundColor: isActive ? '#000000' : 'transparent',
    '&:hover': {
      color: 'white',
      backgroundColor: '#424242',
    },
  });

  return (
    <AppBar position="static" sx={{ backgroundColor: '#3949ab', borderBottom: '1px solid #303f9f' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '80px' }}>
        {/* Logo and title */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <NavLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src={logo} alt="React Jobs" style={{ height: '40px', marginRight: '8px' }} />
            <Typography
              variant="h6"
              sx={{
                display: { xs: 'none', md: 'block' },
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              React Jobs
            </Typography>
          </NavLink>
        </Box>

        {/* Navigation links */}
        <Box sx={{ display: 'flex', gap: '8px' }}>
          <NavLink to="/" style={linkStyle}>
            <Button sx={{ color: 'inherit', textTransform: 'none' }}>Home</Button>
          </NavLink>
          <NavLink to="/jobs" style={linkStyle}>
            <Button sx={{ color: 'inherit', textTransform: 'none' }}>Jobs</Button>
          </NavLink>
          <NavLink to="/add-job" style={linkStyle}>
            <Button sx={{ color: 'inherit', textTransform: 'none' }}>Add Job</Button>
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
