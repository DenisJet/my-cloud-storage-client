'use client';

import { useRef } from 'react';
import { useRouter, redirect } from 'next/navigation';

export const RegisterForm = (): JSX.Element => {
  const router = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    const data = {
      email: emailRef.current?.value,
      name: nameRef.current?.value,
      password: passwordRef.current?.value,
    };

    //login(data);
    //router.push('');
  };

  return (
    <form onSubmit={handleSubmit} className=''>
      <input className='border mb-3 p-1 rounded-xl w-full' type='email' ref={emailRef} placeholder='email' required />
      <input className='border mb-3 p-1 rounded-xl w-full' type='text' ref={nameRef} placeholder='name' required />
      <input
        className='border mb-4 p-1 rounded-xl w-full'
        type='password'
        ref={passwordRef}
        placeholder='password'
        required
      />
      <div className='m-auto w-min'>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};
