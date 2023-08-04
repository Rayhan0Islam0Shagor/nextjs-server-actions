import { Schema, model, models } from 'mongoose';

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
  },
  {
    timestamps: true,
  },
);

export default models.Post || model('Post', postSchema);
