
import { Container } from '@material-ui/core'
import Posts from '../admin/manageposts/posts/posts'
import useStyles from './styles'
const AllPosts = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Posts />
        </Container>
    )
}

export default AllPosts
