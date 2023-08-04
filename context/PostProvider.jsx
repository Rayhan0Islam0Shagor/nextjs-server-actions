'use client';
import * as React from 'react';

const PostContext = React.createContext();

const PostProvider = ({ children }) => {
  const [editPost, setEditPost] = React.useState();

  const value = {
    editPost,
    setEditPost,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export const usePostContext = () => React.useContext(PostContext);

export default PostProvider;
