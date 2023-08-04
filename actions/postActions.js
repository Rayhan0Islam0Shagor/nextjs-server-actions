'use server';

import connectDB from '@/database/mongodb';
import postModel from '@/models/postModel';
import { revalidateTag } from 'next/cache';

connectDB();

export const getPosts = async () => {
  try {
    const posts = await postModel.find({});

    return posts.map((post) => ({
      ...post._doc,
      _id: post._id.toString(),
    }));
  } catch (error) {
    throw new Error(error.message || 'Server Error');
  }
};

export const createPost = async (formData) => {
  try {
    const newPost = new postModel(formData);

    await newPost.save();

    revalidateTag('posts');

    return {
      ...newPost._doc,
      _id: newPost._id.toString(),
    };
  } catch (error) {
    throw new Error(error.message || 'Server Error');
  }
};

export const updatePost = async (id, formData) => {
  try {
    const post = await postModel.findByIdAndUpdate(id, formData, {
      new: true,
    });

    revalidateTag('posts');

    return {
      ...post._doc,
      _id: post._id.toString(),
    };
  } catch (error) {
    throw new Error(error.message || 'Server Error');
  }
};

export const deletePost = async (id) => {
  try {
    await postModel.findByIdAndDelete(id, {
      new: true,
    });

    revalidateTag('posts');
  } catch (error) {
    throw new Error(error.message || 'Server Error');
  }
};
