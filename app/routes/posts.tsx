import { createClient } from '~/lib/supabase/server';
import { type LoaderFunctionArgs, useLoaderData } from 'react-router';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { supabase } = createClient(request);

  const { data: posts, error } = await supabase.from('posts').select();

  if (error) {
    console.error('Supabase error:', error);
    throw new Response(error.message, { status: 500 });
  }

  return posts;
};

export default function PostsPage() {
  const posts = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      {posts.map((p) => (
        <div className="w-50" key={p.id}>
          <h1>{p.title}</h1>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}
