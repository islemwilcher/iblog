import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  grow: {
      margin: '30px 0',
  },
  [theme.breakpoints.down('sm')]: {
    grid: {
      display: 'flex',
      flexDirection: 'column-reverse',
  },
  },
}));