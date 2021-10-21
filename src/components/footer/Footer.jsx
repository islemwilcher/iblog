
import { Typography } from '@material-ui/core'
import useStyles from './styles'

const Footer = () => {
    const classes = useStyles()
    return (
        <nav className={classes.container}>
            <Typography className={classes.title} variant='body1' >Copyright &copy; 2021 Islem Wilcher. All rights reserved.</Typography>
        </nav>
    )
}

export default Footer
