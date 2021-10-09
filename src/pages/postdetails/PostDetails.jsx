import { useEffect } from 'react';
import { Typography, CircularProgress } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';
import { getPost } from '../../actions/posts';

const Postdetails = () => {
  const { post, posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  console.log('from redux:',post)

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  return (
    <div>
      <h2>{post.title}</h2>
    </div>
  )
}

export default Postdetails
