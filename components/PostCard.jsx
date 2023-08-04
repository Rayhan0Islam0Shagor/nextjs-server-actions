'use client';
import * as React from 'react';
import { usePostContext } from '@/context/PostProvider';
import timeAgo from '@/utils/timeAgo';
import Image from 'next/image';
// import { deletePost } from '@/actions/postActions';

const PostCard = ({ post, handleDelete }) => {
  const { setEditPost } = usePostContext();
  let [isPending, startTransition] = React.useTransition();

  // const handleDelete = async (id) => {
  //   if (confirm('Are you sure you want to delete this post?')) {
  //     await deletePost(id);
  //   }
  // };

  return (
    <div className="flex flex-col items-center w-full p-4 my-4 rounded-md">
      <h2 className="text-2xl font-bold">{post.title}</h2>

      <Image
        src={post.image}
        width={500}
        height={500}
        alt={post.title}
        className="object-cover object-center w-full my-4 rounded-md h-80"
        sizes="(max-width: 640px) 640px, 500px"
        quality={100}
        priority
      />
      <p className="text-sm">{timeAgo(post.createdAt)}</p>

      <div className="flex items-center space-x-3 justify-evenly">
        <button
          className="px-4 py-2 my-4 text-white bg-blue-500 rounded-md"
          onClick={() => setEditPost(post)}
        >
          Edit
        </button>
        <button
          className="px-4 py-2 my-4 text-white bg-red-500 rounded-md"
          onClick={() => startTransition(() => handleDelete(post._id))}
          disabled={isPending}
        >
          {isPending ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </div>
  );
};

export default PostCard;
