import { BsInstagram, BsGithub } from 'react-icons/bs'
import { AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { Container, Typography } from "@material-ui/core"
import useStyles from './styles'

const About = () => {

    const classes = useStyles()
    return (
        <Container>
            <div className={classes.socialmedia}>
                <a href='https://www.instagram.com/coding.islem/' target='_blank' ><BsInstagram className={classes.insta} /></a>
                <a href='https://www.linkedin.com/in/boucenina-seif-el-islem-ab34481b1' target='_blank' ><AiOutlineLinkedin className={classes.linkin}  /></a>
                <a href='https://twitter.com/i_wilcher?s=09' target='_blank' ><AiOutlineTwitter className={classes.twit}  /></a>
                <a href='https://github.com/islemwilcher' target='_blank' ><BsGithub className={classes.github}  /></a>
            </div>
            <Typography className={classes.maintitle} variant='h4'>About</Typography>
            <Typography className={classes.title} variant='h5' gutterBottom>About the Creator</Typography>
            <Typography className={classes.paragraph} variant='body-1'>My name is Islem, i am a Software engineer Master Student, i like to be present on social media where i share tips and documenting my journey in Web Development, so i created this iBlog to help me do it better, using REACTJS, NODEJS AND EXPRESSJS with MONGODB to create this well designed and very symple blog to make it easy for you guys to interact</Typography>
            <Typography className={classes.title} variant='h5' gutterBottom>About the iBlog</Typography>
            <Typography className={classes.paragraph} variant='body-1'>WHAT iBlog would help for:</Typography><br />
            <Typography className={classes.paragraph} variant='body-1'>- Education Content: Software Engineering Computer Science</Typography><br />
            <Typography className={classes.paragraph} variant='body-1'>-Web Development: frontend / backend / apis / step by step to FULL-STACK</Typography><br />
            <Typography className={classes.paragraph} variant='body-1'>-UI/UX Design: Rules and Tools</Typography>
            
        </Container>
    )
}

export default About
