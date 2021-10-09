import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    media: {
        height: '550px',
    },
    title: {
        position: 'absolute',
        top: '50%',
        left: '40%',
    },
    freelencegrid: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'space-between',
    },
    freelencephoto: {
        width: '50%',
        padding: '30px',
        height: '380px',
    },
    freelencediv: {
        width: '40%',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    freelencedivh1: {
        cursor: 'pointer',
        width: '40%',
        fontSize: '30px',
        margin: 'auto',
        paddingLeft: '10px', 
    },
    [theme.breakpoints.down('sm')]: {
        media: {
            height: '60vh',
        },
    },
}));