'use client';

import { logout } from '@/auth';

export const LogoutButton = () => {
  const onClickLogout = () => {
    if (window.confirm('Вы действительно хотите выйти?')) {
      logout();
      location.href = '/';
    }
  };

  return (
    <button className='' type='button' onClick={onClickLogout}>
      logout
    </button>
  );
};
