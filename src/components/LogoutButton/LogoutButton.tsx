'use client';
import * as Api from '@/api';

export const LogoutButton = () => {
  const onClickLogout = () => {
    if (window.confirm('Вы действительно хотите выйти?')) {
      Api.auth.logout();
      location.href = '/';
    }
  };

  return <button onClick={onClickLogout}>logout</button>;
};
