
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './post/post';

import useStyles from './styles';

import './posts.css'

const Posts = ({ setCurrentId, visible }) => {
  const {posts} = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
      !posts?.length 
      ? (
        <div className='loading' >
          <div className='bar one'></div>
          <div className='bar two'></div>
          <div className='bar three'></div>
        </div>
      )
      : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6} md={4}>
              <Post post={post} setCurrentId={setCurrentId} visible={visible} />
            </Grid>
          ))}
        </Grid>
      )

  )
};

export default Posts