
import { useState, useEffect } from 'react'
import { Container, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../../actions/posts'
import Posts from './posts/posts';
import Form from './form/form';
import useStyles from './styles'

const ManagePosts = () => {
    const [currentId, setCurrentId] = useState(0);
    const [visible, setVisibale] = useState(true)
    const dispatch = useDispatch();
    const classes = useStyles()

    useEffect(() => {
        dispatch(getPosts());
      }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container className={classes.grow}>
                <Grid className={classes.grid} container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={8}>
                        <Posts setCurrentId={setCurrentId} visible={visible} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default ManagePosts
