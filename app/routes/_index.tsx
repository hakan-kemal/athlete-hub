import type { Route } from './+types/_index';
import { Link } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-2 sm:flex-row">
      <Link to="/login" className="underline underline-offset-4">
        Login
      </Link>
    </div>
  );
}
