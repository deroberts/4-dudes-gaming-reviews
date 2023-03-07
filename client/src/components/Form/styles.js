import React, { useState, useEffect } from 'react';
import { Box, Button, Form, FormField, Heading, TextArea, TextInput } from 'grommet';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createPost, updatePost } from '../../actions/posts';

const FormComponent = ({ currentId, setCurrentId }) => {
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
    <Box pad="medium" width="large">
      <Form onSubmit={handleSubmit}>
        <Heading level={2}>{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Heading>
        <FormField label="Creator" htmlFor="creator">
          <TextInput id="creator" name="creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        </FormField>
        <FormField label="Title" htmlFor="title">
          <TextInput id="title" name="title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        </FormField>
        <FormField label="Message" htmlFor="message">
          <TextArea id="message" name="message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        </FormField>
        <FormField label="Tags (comma separated)" htmlFor="tags">
          <TextInput id="tags" name="tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        </FormField>
        <Box margin={{ bottom: 'medium' }}>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </Box>
        <Box direction="row" gap="medium">
          <Button primary label="Submit" type="submit" />
          <Button label="Clear" onClick={clear} />
        </Box>
      </Form>
    </Box>
  );
};

export default FormComponent;