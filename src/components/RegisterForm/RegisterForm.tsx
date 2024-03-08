'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { registration } from '@/actions/auth.actions';

export const RegisterForm = (): JSX.Element => {
  const router = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (evt: { preventDefault: () => void }) => {
    evt.preventDefault();

    const values = {
      email: emailRef.current?.value,
      fullName: fullNameRef.current?.value,
      password: passwordRef.current?.value,
    };

    try {
      const newUser = await registration(values);
      if (newUser == true) {
        router.push('/storage');
      } else {
        alert('Something went wrong');
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=''>
      <input className='border mb-3 p-1 rounded-xl w-full' type='email' ref={emailRef} placeholder='email' required />
      <input className='border mb-3 p-1 rounded-xl w-full' type='text' ref={fullNameRef} placeholder='name' required />
      <input className='border mb-4 p-1 rounded-xl w-full' ref={passwordRef} placeholder='password' required />
      <div className='m-auto w-min'>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};
