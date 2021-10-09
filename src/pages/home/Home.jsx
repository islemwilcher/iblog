
import { Container, Grid, Paper, Typography } from '@material-ui/core'

import MainPhoto from '../../assets/mainphoto.jpg'
import Freelence from '../../assets/freelence.jpg'
import Why from '../../assets/why.jpg'

import useStyles from './styles'

const Home = () => {
    const classes = useStyles()
    return (
        <>
            <div>
                <img className={classes.media} src={MainPhoto} alt="MainPhoto" width="100%" />
            </div>
            <Container className={classes.container}>
                <Grid className={classes.freelencegrid}>
                <img className={classes.freelencephoto} src={Freelence} alt="Freelence" />
                <div className={classes.freelencediv} >
                    <Paper className={classes.freelencedivh1} raised elevation={6}>looking for Freelencing!</Paper>
                </div>
                </Grid>
            </Container>
            <Container className={classes.container}>
                <Grid className={classes.whygrid}>
                    <div className={classes.whysection}>
                        <Typography className={classes.title1} variant='h4' gutterBottom>WHY I CREATE iBlog</Typography>
                        <Paper className={classes.paragraphpaper} raised elevation={6}>
                            <Typography className={classes.paragraph} variant='body-1'>as a software engineer Student i love helping others, beginners are looking everywhere, and there is a lot of resources which is so disturbing.<br />So i like to share WHERE and HOW to start and TIPS to make it easy</Typography>
                        </Paper>
                    </div>
                    <img className={classes.freelencephoto} src={Why} alt="Why iBlog" />
                </Grid>
            </Container>
        </>
    )
}

export default Home
