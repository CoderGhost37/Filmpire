import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './styles';
import { Movie } from '../index';

function MovieList({ movies, numberOfMovies }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(0, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
}

export default MovieList;
