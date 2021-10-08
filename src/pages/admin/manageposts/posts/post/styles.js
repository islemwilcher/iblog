import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '5px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '10px',
    right: '0px',
    color: 'white',
  },
  details: {
    display: 'block',
    margin: 'auto 0',
    paddingLeft: '15px',
  },
  creator: {
    color: 'gray',
    fontWeight: 300,
  },
});