export const metadata = {
  robots: {
    index: false,
    nocache: true,
  },

  title: 'Posts Page',
  description:
    'SEO (Search Engine Optimization) is the key to enhancing online visibility. It involves optimizing websites with relevant keywords, content, and technical elements to rank higher on search engines, driving organic traffic and boosting online success.',
  alternates: {
    canonical: '/posts',
    languages: {
      'en-US': '/en-US/posts',
    },
  },
};

const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
};

export default Posts;
