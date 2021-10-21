
import { Container, Grid, Paper, Typography } from '@material-ui/core'
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import SocialMedia from '../../components/socialmedia/SocialMedia'

import WelcomePhoto from '../../assets/welcomephoto.jpg'
import MessagePhoto from '../../assets/messagephoto.jpg'
import Why from '../../assets/why.jpg'
import instagramfeed1 from '../../assets/instagramfeed1.jpg'
import instagramfeed2 from '../../assets/instagramfeed2.jpg'
import instagramfeed3 from '../../assets/instagramfeed3.jpg'

import useStyles from './styles'

import Header from './homeheader/Header';
import Footer from '../../components/footer/Footer';

const Home = () => {
    const classes = useStyles()

    return (
        <>
            <Header />
            <Container className={classes.container}>
                <Grid className={classes.freelencegrid}>
                <Flip left>
                <img  className={classes.welcomephoto} src={WelcomePhoto} alt="Welcome Photo" />
                </Flip>
                <div className={classes.freelencediv} >
                    <Typography className={classes.title1} variant='h4' gutterBottom>Welcome to iBlog</Typography>
                    <Zoom>
                    <Paper className={classes.freelencedivh1} raised elevation={6}>
                        <Typography className={classes.paragraph} variant='body1'>
                            -Development ,<br /> -Design,<br />-Engineering Content and Tips
                        </Typography>
                    </Paper>
                    </Zoom>
                </div>
                </Grid>
            </Container>
            <Container className={classes.container}>
                <Grid className={classes.whygrid}>
                    <div className={classes.whysection}>
                        <Typography className={classes.title1} variant='h4' gutterBottom>WHY I CREATE iBlog</Typography>
                        <Zoom>
                        <Paper className={classes.paragraphpaper} raised elevation={6}>
                            <Typography className={classes.paragraph} variant='body1'>as a software engineer Student i love helping others, beginners are looking everywhere, and there are a lot of resources which is so disturbing.<br />So i like to share WHERE and HOW to start and TIPS to make it easier</Typography>
                        </Paper>
                        </Zoom>
                    </div>
                    <Flip right>
                    <img className={classes.whyphoto} src={Why} alt="Why i-Blog" />
                    </Flip>
                </Grid>
            </Container>
            <SocialMedia />
            <Zoom>
            <div>
                <img className={classes.media2} src={MessagePhoto} alt="MessagePhoto" width="100%" />
            </div>
            </Zoom>
            <Container className={classes.container}>
            <Typography className={classes.title1} variant='h4' gutterBottom>INSTAGRAM PHOTOS</Typography>
                <Grid className={classes.instagramfeedgrid} spacing={3}>
                    <Flip left>
                    <Paper raised elevation={6} className={classes.instagramfeedpaper} >
                        <img className={classes.instagramfeed} src={instagramfeed2} alt="instagramfeed" width="100%" />
                    </Paper>
                    </Flip>
                    <Flip left>
                    <Paper raised elevation={6} className={classes.instagramfeedpaper} >
                        <img className={classes.instagramfeed} src={instagramfeed1} alt="instagramfeed" width="100%" />
                    </Paper>
                    </Flip>
                    <Flip left>
                    <Paper raised elevation={6} className={classes.instagramfeedpaper} >
                        <img className={classes.instagramfeed} src={instagramfeed3} alt="instagramfeed" width="100%" />
                    </Paper>
                    </Flip>
                </Grid>
            </Container>
            <SocialMedia />
            <Footer />
            </>
    )
}

export default Home
