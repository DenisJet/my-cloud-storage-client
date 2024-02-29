'use client';
import { useState } from 'react';

export const Tabs = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState('sing in');

  return (
    <div className='max-w-96 mx-auto my-5'>
      <div className='mb-2'>
        <button className='me-3' type='button' onClick={() => setActiveTab('sing in')}>
          Sing In
        </button>
        <button type='button' onClick={() => setActiveTab('register')}>
          Register
        </button>
      </div>
      <div>{activeTab === 'sing in' ? <div>Sing In</div> : <div>Register</div>}</div>
    </div>
  );
};
