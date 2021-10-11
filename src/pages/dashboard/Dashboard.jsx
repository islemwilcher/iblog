
import { Container, Paper, Typography, Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

import useStyles from './styles'
const Dashboard = () => {
    const classes = useStyles()
    const navStyle = {
        color: 'black',
        textDecoration: 'none',
        fontWeight: '600',
    };
    return (
        <Container>
            <h2>dashboard</h2>
            <Link style={navStyle} to='/iblog/manageposts' >manageposts</Link>
            <Paper className={classes.welcome} raised elevation={6}>
            <Typography className={classes.title1} variant='h6' gutterBottom>WELCOME ISLEM TO IbLOG<br />
            Have some tips, ideas or some Content.
            </Typography>
            </Paper>
            <Container>
                <Grid className={classes.welcomegrid}>
                    <Paper className={classes.welcomeaction} raised elevation={6}>
                        <Typography className={classes.title1} variant='h6' gutterBottom>
                            manage your post
                            <br />
                            ADD, DELETE, UPDATE
                        </Typography>
                        <Link style={navStyle} to='/iblog/manageposts' >
                            <Button className={classes.managebtn} variant="contained" size='small' color='primary' >go to manage</Button>
                        </Link>
                    </Paper>
                    <Paper className={classes.welcomeaction} raised elevation={6}>
                        <Typography className={classes.title1} variant='h6' gutterBottom>
                        </Typography>
                    </Paper>
                    <Paper className={classes.welcomeaction} raised elevation={6}>
                        <Typography className={classes.title1} variant='h6' gutterBottom>
                        </Typography>
                    </Paper>
                    <Paper className={classes.welcomeaction} raised elevation={6}>
                        <Typography className={classes.title1} variant='h6' gutterBottom>
                        </Typography>
                    </Paper>
                </Grid>
            </Container>
        </Container>
    )
}

export default Dashboard
