import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  welcome: {
      width: '300px',
      margin: '60px auto',
      padding: '10px',
  },
  welcomeaction: {
      width: '300px',
      margin: '10px',
      padding: '20px',
  },
  welcomegrid: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
  },
  managebtn: {
      width: '100%',
      backgroundColor: 'green',
  },
  [theme.breakpoints.down('sm')]: {
    welcomegrid: {
        flexDirection: 'column',
    },
  },
}));