import { createClient } from '~/lib/supabase/server';
import { type LoaderFunctionArgs, useLoaderData } from 'react-router';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { supabase } = createClient(request);

  const { data: events, error } = await supabase.from('events').select();

  if (error) {
    console.error('Supabase error:', error);
    throw new Response(error.message, { status: 500 });
  }

  return events;
};

export default function EventsPage() {
  const events = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      {events.map((e) => (
        <div className="w-50" key={e.id}>
          <h1>{e.name}</h1>
        </div>
      ))}
    </div>
  );
}
