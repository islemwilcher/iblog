
import { Container, Grid, Paper } from '@material-ui/core'
import MainPhoto from '../../assets/mainphoto.jpg'
import Freelence from '../../assets/freelence.jpg'
import useStyles from './styles'

const Home = () => {
    const classes = useStyles()
    return (
        <>
            <div>
                <img className={classes.media} src={MainPhoto} alt="MainPhoto" width="100%" />
            </div>
            <Container>
                <Grid className={classes.freelencegrid}>
                <img className={classes.freelencephoto} src={Freelence} alt="Freelence" />
                <div className={classes.freelencediv} >
                    <Paper className={classes.freelencedivh1} raised elevation={6}>looking for <br /> Freelencing!</Paper>
                </div>
                </Grid>
            </Container>
        </>
    )
}

export default Home
