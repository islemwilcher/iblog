import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  welcome: {
      width: '300px',
      margin: '60px auto',
      padding: '10px',
  },
  welcomeaction: {
      backgroundColor: '#B4CBFE',
      width: '300px',
      margin: '10px',
      padding: '20px',
  },
  chart: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#B4CBFE',
      width: '300px',
      height: '160px',
      margin: '10px',
      padding: '1px',
  },
  welcomegrid: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
  },
  managebtn: {
      width: '100%',
      backgroundColor: '#0000FF',
  },
  [theme.breakpoints.down('sm')]: {
    welcomegrid: {
        width: 'auto',
        flexDirection: 'column',
    },
    welcomeaction: {
        width: 'auto',
    },
  },
}));