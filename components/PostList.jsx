'use client';
import { experimental_useOptimistic as useOptimistic, useRef } from 'react';
import PostCard from './PostCard';
import { deletePost } from '@/actions/postActions';

const PostList = ({ posts }) => {
  const [optimisticPosts, addOptimisticPosts] = useOptimistic(
    { posts },
    (state, newPosts) => ({ ...state, posts: newPosts }),
  );

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this post?')) {
      const newPosts = posts.filter((post) => post._id !== id);

      addOptimisticPosts((optimisticPosts.posts = newPosts));

      await deletePost(id);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-5xl font-bold">Posts</h1>

      <div className="grid items-center w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {optimisticPosts?.posts?.map((post) => (
          <PostCard key={post._id} post={post} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
