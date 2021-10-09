
import { Card, CardMedia, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { deletePost } from '../../../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId, visible }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem('profile'))

  const openPost = () => {
    history.push(`/posts/${post._id}`)
  }

  return (
    <Card className={classes.card}>
      <div className={classes.base} onClick={openPost}>
        <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />

        <div className={classes.details}>
          <Typography className={classes.creator} variant="h6">{post.creator} - {moment(post.createdAt).format('ll')}</Typography>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
          <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
      </div>
      <div className={classes.overlay}>
        {user 
          ? <>{visible ?
            <>
              <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
              <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /></Button>
            </>
            : null
          }
          </>
          : null
        }
        
      </div>
      
    </Card>
  );
};

export default Post