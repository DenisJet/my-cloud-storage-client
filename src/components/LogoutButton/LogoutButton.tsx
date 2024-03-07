'use client';

import { logout } from '@/actions';
import { useRouter } from 'next/navigation';

export const LogoutButton = () => {
  const router = useRouter();

  const onClickLogout = () => {
    if (window.confirm('Вы действительно хотите выйти?')) {
      logout();
      router.push('/');
    }
  };

  return (
    <button className='text-red-500 hover:opacity-60' type='button' onClick={onClickLogout}>
      Logout
    </button>
  );
};
