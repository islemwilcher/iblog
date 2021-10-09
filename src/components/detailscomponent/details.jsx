
import { Typography, CardMedia, Grid } from '@material-ui/core';
import useStyles from './styles'

const Details = ({ reverse, title, message, image }) => {
    const classes = useStyles();
    return (
        <>
            {title && message && image
            ? <>
                <Grid className={reverse ? classes.grid : classes.gridR}>
                    <div className={classes.content}>
                        <Typography className={classes.title} variant="h3">{title}</Typography>
                        <Typography className={classes.message} variant="body1">{message}</Typography>
                    </div>
                    <Grid className={classes.pic}>
                        <CardMedia className={classes.media} image={image} title={title} />
                    </Grid>
                </Grid>
            </>  
            
            : null}
            
        </>
    )
}

export default Details
