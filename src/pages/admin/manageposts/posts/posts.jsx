
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './post/post';

import Loading from '../../../../components/Loading'

import useStyles from './styles';


const Posts = ({ setCurrentId, visible }) => {
  const {posts} = useSelector((state) => state.posts);
  const classes = useStyles();
  const type = 'bars'
  const color = 'black'

  return (
      !posts?.length 
      ? (
        <div className={classes.center}>
        <Loading type={type} color={color} />
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