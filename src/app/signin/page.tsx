'use client';

import { signIn } from 'next-auth/react';

export default function SignIn() {
  return (
    <div className='flex items-center justify-center mt-20'>
      <button
        onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
        className='border p-4 bg-blue-300 text-white rounded'
      >
        Signin with google
      </button>
    </div>
  );
}
