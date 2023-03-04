import React from 'react';
import { Grid, Box, Spinner } from 'grommet';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    !posts.length ? <Spinner /> : (
      <Grid className={classes.container} columns={{ count: 'fit', size: 'medium' }} gap="medium">
        {posts.map((post) => (
          <Box key={post._id} >
            <Post post={post} setCurrentId={setCurrentId} />
          </Box>
        ))}
      </Grid>
    )
  );
};

export default Posts;
