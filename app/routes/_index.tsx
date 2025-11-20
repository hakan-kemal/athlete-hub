import { createClient } from '~/lib/supabase/server';
import { type LoaderFunctionArgs, redirect, Link } from 'react-router';
import type { Route } from './+types/_index';

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Athlete Hub | Train, Track & Compete' },
    {
      name: 'description',
      content:
        'The Athlete Hub connects millions of professional athletes, and other amateur athletes through the sports they love',
    },
  ];
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { supabase } = createClient(request);
  const { data, error } = await supabase.auth.getUser();

  if (!error && data?.user) return redirect('/dashboard');

  return null;
};

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-2 sm:flex-row">
      <Link to="/sign-up" className="underline underline-offset-4">
        Sign Up
      </Link>
      <Link to="/login" className="underline underline-offset-4">
        Log In
      </Link>
    </div>
  );
}
