import { getPosts } from '@/actions/postActions';
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-10">
      <PostForm />

      {posts && <PostList posts={posts} />}
    </main>
  );
}
