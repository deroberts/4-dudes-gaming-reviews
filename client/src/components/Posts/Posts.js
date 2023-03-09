import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Button, Text } from 'grommet';
import { Like, Trash } from 'grommet-icons';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card background="light-1" className={classes.card}>
      <CardHeader pad="medium">
        <Text size="large">{post.creator}</Text>
        <Text size="small">{moment(post.createdAt).fromNow()}</Text>
      </CardHeader>
      <CardBody>
        <Text size="medium" weight="bold">{post.title}</Text>
        <Text size="small" color="text-weak" margin={{ top: 'small' }}>{post.tags.map((tag) => `#${tag} `)}</Text>
        <Text margin={{ top: 'medium' }}>{post.message}</Text>
        <CardFooter>
          <Button icon={<Like size="small" />} label={`Like ${post.likeCount}`} onClick={() => dispatch(likePost(post._id))} />
          <Button icon={<Trash size="small" />} label="Delete" onClick={() => dispatch(deletePost(post._id))} />
        </CardFooter>
      </CardBody>
    </Card>
  );
};

export default Post;