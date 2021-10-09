import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        margin: '30px auto 0 auto',
    },
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
        boxShadow: '2px 2px 6px grey',
    },
    freelencediv: {
        width: '40%',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    freelencedivh1: {
        cursor: 'pointer',
        width: '60%',
        fontSize: '30px',
        margin: 'auto',
        paddingLeft: '10px', 
    },
    title1: {
        width: '60%',
        fontWeight: '500',
        margin: '30px auto 0 auto',
    },
    paragraph: {
        fontWeight: '400',
    },
    paragraphpaper: {
        width: '60%',
        padding: '20px',
        margin: 'auto',
    },
    whygrid: {
        display: 'flex',
        justifyContent: 'space-between', 
    },
    whysection: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
        media: {
            height: '60vh',
        },
        freelencegrid: {
            flexDirection: 'column-reverse',
        },
        freelencediv: {
            width: '100%',
        },

        whygrid: {
            flexDirection: 'column',
        },
        whysection: {
            width: '100%',
            margin: 0,
        },
        title1: {
            width: '100%',
            margin: '30px auto',
        },
        paragraphpaper: {
            width: '100%',
        },

        freelencephoto: {
            width: '100%',
            marginTop: '30px',
        },
    },
}));