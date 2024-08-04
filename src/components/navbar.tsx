import Link from 'next/link';
import { SignIn } from './auth/signin-button';
import { auth } from '@/lib/auth';
import { SignOut } from './auth/signout-button';

export default async function Navbar() {
  const session = await auth();

  return (
    <div className='bg-zinc-50 border-b'>
      <div className='flex items-center justify-between max-w-4xl mx-auto py-4'>
        <Link href='/'>HOME</Link>
        {session ? <SignOut /> : <SignIn />}
      </div>
    </div>
  );
}
