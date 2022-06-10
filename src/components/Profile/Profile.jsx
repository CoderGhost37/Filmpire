import React, { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { useSelector } from 'react-redux';

function Profile() {
  const { user } = useSelector((state) => state.user);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  const favouriteMovies = [];

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>My Profile</Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {favouriteMovies.length === 0
        ? <Typography variant="h5">Add favourite or watchlist same movies to see them here!</Typography>
        : <Box>FAVOURITE MOVIES</Box>}
    </Box>
  );
}

export default Profile;
