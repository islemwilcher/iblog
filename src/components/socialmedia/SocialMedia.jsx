import { BsInstagram, BsGithub } from 'react-icons/bs'
import { AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import useStyles from './styles'
const SocialMedia = () => {
    const classes = useStyles()
    return (
        <div className={classes.socialmedia}>
                <a href='https://www.instagram.com/coding.islem/' target='_blank' ><BsInstagram className={classes.insta} /></a>
                <a href='https://www.linkedin.com/in/boucenina-seif-el-islem-ab34481b1' target='_blank' ><AiOutlineLinkedin className={classes.linkin}  /></a>
                <a href='https://twitter.com/i_wilcher?s=09' target='_blank' ><AiOutlineTwitter className={classes.twit}  /></a>
                <a href='https://github.com/islemwilcher' target='_blank' ><BsGithub className={classes.github}  /></a>
        </div>
    )
}

export default SocialMedia
