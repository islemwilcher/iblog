import { useEffect } from 'react';
import { Typography, CircularProgress, Container, CardMedia } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';
import { getPost } from '../../actions/posts';

import Details from '../../components/detailscomponent/details';
import useStyles from './styles'

const Postdetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const classes = useStyles()

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  if (!post) return null;

  if (isLoading) {
    return (
        <CircularProgress />
    );
  }

  return (
    <Container>
      <div className={classes.header}>
      <Typography className={classes.creator} variant="h6">{post.creator} - {moment(post.createdAt).format('ll')}</Typography>
      <Typography className={classes.title} variant="h3">{post.title}</Typography>
      <div className={classes.mediadiv}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      </div>
      <Typography className={classes.tags} variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      <Typography className={classes.message} variant="body1">{post.message}</Typography>
      </div>
      <Details title={post.title1} message={post.message1} image={post.selectedFile1} />
      <Details title={post.title2} message={post.message2} image={post.selectedFile2} />
      <Details title={post.title3} message={post.message3} image={post.selectedFile3} />
      <Details title={post.title4} message={post.message4} image={post.selectedFile4} />
      <Details title={post.title5} message={post.message5} image={post.selectedFile5} />
    </Container>
  )
}

export default Postdetails
