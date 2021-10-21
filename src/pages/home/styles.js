import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        margin: '60px auto 0 auto',
    },
    center: {
        margin: 'auto',
        width: '300px',
    },
    media: {
        height: '550px',
    },
    media2: {
        height: '450px',
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
    welcomephoto: {
        width: '50%',
        padding: '30px',
        marginRight: '50px',
        height: '380px',
        boxShadow: '2px 2px 6px grey',
    },
    whyphoto: {
        width: '50%',
        padding: '30px',
        marginRight: '50px',
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
        padding: '20px', 
    },
    title1: {
        width: '80%',
        fontWeight: '500',
        margin: '30px auto 10px auto',
    },
    paragraph: {
        fontWeight: '400',
    },
    paragraphpaper: {
        cursor: 'pointer',
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
    instagramfeedgrid: {
        marginTop: '40px',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    instagramfeedpaper : {
        margin: '10px auto',
    },
    instagramfeed : {
        width: '300px',
        height: '300px',
        padding: '30px',
    },
    [theme.breakpoints.down('sm')]: {
        media: {
            height: '60vh',
        },
        media2: {
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

        welcomephoto: {
            width: '100%',
            marginTop: '30px',
        },
        whyphoto: {
            width: '100%',
            marginTop: '30px',
        },
        instagramfeedgrid: {
            width: 'auto',
            margin: 'auto',
            flexDirection: 'column',
        },
        instagramfeed : {
            width: '100%',
            padding: '10px',
        },
        instagramfeedpaper : {
            width: '300px',
        },
    },
}));