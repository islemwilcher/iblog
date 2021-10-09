import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(4, 2, 4, 2),
    },
    form: {
        width:'100%',
        marginTop: theme.spacing(2),
    },
    text: {
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
      },
    note: {
        color: 'gray',
    }
}));