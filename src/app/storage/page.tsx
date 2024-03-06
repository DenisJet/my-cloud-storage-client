import * as Api from '@/api';
import { LogoutButton } from '@/components/LogoutButton/LogoutButton';
import axios from 'axios';
import { cookies } from 'next/headers';

export default async function StoragePage() {
  const cookieStore = cookies();
  const _token = cookieStore.get('_token')?.value;
  axios.defaults.headers.Authorization = 'Bearer ' + _token;
  const user = await Api.auth.getMe();

  return (
    <main className='max-w-7xl m-auto px-2.5 sm:grid grid-cols-4 h-full'>
      <div className='bg-sky-50 p-2 my-3 rounded-xl h-28'>
        <p>id: {user.id}</p>
        <p>name: {user.fullName}</p>
        <p>email: {user.email}</p>
        <div className='text-center'>
          <LogoutButton />
        </div>
      </div>
      <div className='p-2 my-3 col-span-3'>Storage</div>
    </main>
  );
}
