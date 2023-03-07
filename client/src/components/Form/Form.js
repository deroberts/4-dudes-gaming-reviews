import React, { useState, useEffect } from 'react';
import { Box, Button, Form, FormField, Heading, TextArea, TextInput, Text } from 'grommet';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createPost, updatePost } from '../../actions/posts';

const PostForm = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Box align="center" pad="medium">
      <Heading level={2}>{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Heading>
      <Form onSubmit={handleSubmit}>
        <FormField name="creator" htmlFor="creator-input" label="Creator">
          <TextInput id="creator-input" name="creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        </FormField>
        <FormField name="title" htmlFor="title-input" label="Title">
          <TextInput id="title-input" name="title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        </FormField>
        <FormField name="message" htmlFor="message-input" label="Message">
          <TextArea id="message-input" name="message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        </FormField>
        <FormField name="tags" htmlFor="tags-input" label="Tags (coma separated)">
          <TextInput id="tags-input" name="tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        </FormField>
        <FormField name="selectedFile" htmlFor="file-input" label="Image">
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </FormField>
        <Box direction="row" justify="between" align="center" pad={{ vertical: 'medium' }}>
          <Button primary label="Submit" type="submit" />
          <Button label="Clear" onClick={clear} />
        </Box>
      </Form>
    </Box>
  );
};

export default PostForm;
