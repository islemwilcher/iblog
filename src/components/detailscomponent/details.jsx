
import { Typography, CardMedia, Grid } from '@material-ui/core';
import useStyles from './styles'

const Details = ({ title, message, image }) => {
    const classes = useStyles()
    return (
        <Grid className={classes.grid}>
            <div className={classes.content}>
                <Typography className={classes.title} variant="h3">{title}</Typography>
                <div className={classes.message}>
                <Typography  variant="body1">{message}</Typography>
                </div>
            </div>
            <Grid className={classes.pic}>
                <CardMedia className={classes.media} image={image} title={title} />
            </Grid>
        </Grid>
    )
}

export default Details
