'use client';
import { useState } from 'react';
import styles from './tabs.module.css';
import { LoginForm } from '../LoginForm/LoginForm';
import { RegisterForm } from '../RegisterForm/RegisterForm';

export const Tabs = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState('sign in');

  const isSignIn = activeTab === 'sign in';
  const isRegister = activeTab === 'register';

  return (
    <div className='max-w-60 mx-auto my-5'>
      <div className='mb-2 my-auto'>
        <button
          data-ui={activeTab === 'sign in' ? 'checked active' : ''}
          className='data-checked:underline me-3'
          type='button'
          onClick={() => setActiveTab('sign in')}
        >
          Sign In
        </button>
        <button
          data-ui={activeTab === 'register' ? 'checked active' : ''}
          className='data-checked:underline'
          type='button'
          onClick={() => setActiveTab('register')}
        >
          Registration
        </button>
      </div>
      {isSignIn && <LoginForm />}
      {isRegister && <RegisterForm />}
    </div>
  );
};
