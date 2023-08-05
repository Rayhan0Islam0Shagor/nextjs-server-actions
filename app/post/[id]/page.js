import { getPostById } from '@/actions/postActions';
import PostCard from '@/components/PostCard';
import * as React from 'react';

const PostDetails = async ({ params: { id }, searchParams }) => {
  const post = await getPostById(id);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-10">
      {post && <PostCard post={post} />}
    </main>
  );
};

export default PostDetails;
