'use client';

import { useRef } from 'react';
import { useRouter, redirect } from 'next/navigation';
import * as Api from '@/api';
import { setCookie } from 'nookies';

export const LoginForm = (): JSX.Element => {
  const router = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    const values = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    try {
      const { token } = await Api.auth.login(values);
      console.log('success');
      setCookie(null, '_token', token, { path: '/' });
    } catch (err) {
      console.log(err);
    }

    //login(data);
    //router.push('');
  };

  return (
    <form onSubmit={handleSubmit} className=''>
      <input className='border mb-3 p-1 rounded-xl w-full' type='email' ref={emailRef} placeholder='email' required />
      <input className='border mb-4 p-1 rounded-xl w-full' ref={passwordRef} placeholder='password' required />
      <div className='m-auto w-min'>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};
