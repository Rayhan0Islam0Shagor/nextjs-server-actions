import { getPosts } from '@/actions/postActions';
import Feature from '@/components/Feature';
import Pagination from '@/components/Pagination';
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';

export default async function Home({ searchParams }) {
  const { posts, totalPages } = await getPosts(searchParams);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-10">
      <PostForm />

      <Feature />

      {posts && <PostList posts={posts} />}
      {totalPages && <Pagination totalPages={totalPages} />}
    </main>
  );
}
