'use server';

import connectDB from '@/database/mongodb';
import postModel from '@/models/postModel';
import { revalidateTag } from 'next/cache';

connectDB();

export const getPosts = async (searchParams) => {
  const search = searchParams.search || '';
  const sort = searchParams.sort || 'createdAt';
  const limit = searchParams.limit * 1 || 3;
  const page = searchParams.page * 1 || 1;
  const skip = searchParams.skip * 1 || (page - 1) * limit;

  try {
    const posts = await postModel
      .find({
        title: {
          $regex: search,
        },
      })
      .sort(sort)
      .limit(limit)
      .skip(skip);

    const count = await postModel.countDocuments({
      title: {
        $regex: search,
      },
    });

    const totalPages = Math.ceil(count / limit);

    const newPosts = posts.map((post) => ({
      ...post._doc,
      _id: post._id.toString(),
    }));

    return {
      posts: newPosts,
      totalPages,
      count,
    };
  } catch (error) {
    throw new Error(error.message || 'Server Error');
  }
};

export const getPostById = async (id) => {
  try {
    const post = await postModel.findById(id);

    return {
      ...post._doc,
      _id: post._id.toString(),
    };
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
