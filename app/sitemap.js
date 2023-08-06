import connectDB from '@/database/mongodb';
import postModel from '@/models/postModel';

export default async function sitemap() {
  await connectDB();
  const baseURL = 'https://nextjs-seo-rayhan.vercel.app/';

  const posts = await postModel.find({});

  const postUrls = posts.map((post) => ({
    url: `${baseURL}/post/${post._id}`,
    lastModified: new Date(post.updatedAt),
  }));

  return [
    {
      url: `${baseURL}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/about`,
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}
