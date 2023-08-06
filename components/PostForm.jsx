'use client';
import { createPost, updatePost } from '@/actions/postActions';
import * as React from 'react';
import SubmitButton from './SubmitButton';
import { usePostContext } from '@/context/PostProvider';

const PostForm = () => {
  const formRef = React.useRef(null);

  const { editPost, setEditPost } = usePostContext();

  const handleSubmit = async (formData) => {
    const title = formData.get('title');
    const image = formData.get('image');

    if (editPost) {
      await updatePost(editPost._id, { title, image });
      setEditPost(null);
    } else {
      await createPost({ title, image });
    }

    formRef.current.reset();
  };

  return (
    <form
      action={handleSubmit}
      className="flex w-full max-w-6xl mx-auto my-8 space-x-6"
      ref={formRef}
    >
      <input
        type="text"
        placeholder="Title"
        name="title"
        required
        className="w-1/2 px-2 border-2 border-gray-300 rounded-md"
        defaultValue={editPost?.title}
        aria-label="title"
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        required
        className="w-1/2 px-2 border-2 border-gray-300 rounded-md"
        defaultValue={editPost?.image}
        aria-label="image"
      />

      {editPost ? (
        <div className="flex items-center space-x-3 justify-evenly">
          <SubmitButton value="Update post" loadingValue="Updating..." />
          <button
            className="px-4 py-2 my-4 text-white bg-red-500 rounded-md"
            onClick={() => setEditPost(null)}
            type="button"
          >
            Cancel
          </button>
        </div>
      ) : (
        <SubmitButton value="Create post" loadingValue="Creating..." />
      )}
    </form>
  );
};

export default PostForm;
