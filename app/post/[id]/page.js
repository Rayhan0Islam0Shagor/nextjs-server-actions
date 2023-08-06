import { getPostById } from '@/actions/postActions';
import PostCard from '@/components/PostCard';

export async function generateMetadata(
  { params: { id }, searchParams },
  parent,
) {
  const post = await getPostById(id);

  return {
    title: `${post.title} | NextJs Seo`,
    description: `${post.title} - SEO (Search Engine Optimization) is the key to enhancing online visibility. It involves optimizing websites with relevant keywords, content, and technical elements to rank higher on search engines, driving organic traffic and boosting online success.`,
    alternates: {
      canonical: `/post/${id}`,
      languages: {
        'en-US': `/en-US/post/${id}`,
      },
    },
  };
}

const PostDetails = async ({ params: { id } }) => {
  const post = await getPostById(id);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-10">
      <p className="mb-10 text-4xl font-bold tracking-tighter text-center text-gray-800 md:text-5xl lg:text-6xl">
        Post Details
      </p>
      {post && <PostCard post={post} />}
    </main>
  );
};

export default PostDetails;
