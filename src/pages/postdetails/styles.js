import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    header: {
        margin: '30px auto',
        display: 'flex',
        flexDirection: 'column',
    },
    creator: {
        color: 'gray',
        margin: 'auto',
    },
    title: {
        color: 'black',
        margin: '30px auto',
    },
    tags: {
        margin: '5px auto',
    },
    message: {
        color: 'black',
        margin: '30px auto',
    },
    mediadiv: {
        height: '450px',
        width: '800px',
        margin: '30px auto 0 auto',
    },
    media: {
        height: 0,
        borderRadius: '10px',
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    [theme.breakpoints.down('sm')]: {
        mediadiv: {
            height: 'auto',
            width: '100%',
            margin: '30px auto 0 auto',
        },
        tags: {
            margin: 0,
        },
    },
}));