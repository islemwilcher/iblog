
import { Container, Typography } from "@material-ui/core"
import useStyles from './styles'
import SocialMedia from '../../components/socialmedia/SocialMedia'
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
const About = () => {
    const classes = useStyles()
    
    return (
        <Container className={classes.container}>
            <SocialMedia />
            <Typography className={classes.maintitle} variant='h4'>About</Typography>
            <LightSpeed right>
            <Typography className={classes.title} variant='h5' gutterBottom>About the Creator</Typography>
            </LightSpeed>
            <Zoom right>
            <Typography className={classes.paragraph} variant='body-1'>My name is Islem, i am a Software engineer Master Student, i like to be present on social media where i share tips and documenting my journey in Web Development, so i created this iBlog to help me do it better, using REACTJS, NODEJS AND EXPRESSJS with MONGODB to create this well designed and very symple blog to make it easy for you guys to interact</Typography>
            </Zoom>
            <LightSpeed right>
            <Typography className={classes.title} variant='h5' gutterBottom>About the iBlog</Typography>
            </LightSpeed>
            <Zoom right>
            <Typography className={classes.paragraph} variant='body-1'>WHAT iBlog would help for:</Typography><br />
            <Typography className={classes.paragraph} variant='body-1'>- Education Content: Software Engineering, Computer Science</Typography><br />
            <Typography className={classes.paragraph} variant='body-1'>-Web Development: frontend / backend / apis / step by step to FULL-STACK</Typography><br />
            <Typography className={classes.paragraph} variant='body-1'>-UI/UX Design: Rules and Tools</Typography>
            </Zoom>
        </Container>
    )
}

export default About
