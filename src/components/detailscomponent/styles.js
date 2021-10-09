import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    grid : {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '30px',
    },
    content: {
        width: '45%',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
    },
    pic: {
        width: '45%',
    },
    media: {
        height: 0,
         borderRadius: '10px',
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
}));