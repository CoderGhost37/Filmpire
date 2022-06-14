import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  image: {
    maxWidth: '90%',
    borderRadius: '20px',
    objectFit: 'cover',
    boxShadow: '0.5em 0.5em 1em',
  },
  btns: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'space-around',
  },
}));
