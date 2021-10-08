
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/posts'

import { Container } from '@material-ui/core'
import Posts from '../admin/manageposts/posts/posts'
import useStyles from './styles'
const AllPosts = () => {

    const dispatch = useDispatch();
    const classes = useStyles()

    useEffect(() => {
        dispatch(getPosts());
      }, [dispatch]);
    
    
    return (
        <Container className={classes.container}>
            <Posts />
        </Container>
    )
}

export default AllPosts
