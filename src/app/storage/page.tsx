import { getMe } from '@/auth';
import { LogoutButton } from '@/components/LogoutButton/LogoutButton';
import { cookies } from 'next/headers';

const getUser = () => {
  const cookieStore = cookies();
  const token = cookieStore.get('_token')?.value;
  return getMe(token);
};

export default async function StoragePage() {
  const user = await getUser();

  return (
    <main className='max-w-7xl m-auto px-2.5 sm:grid grid-cols-4 h-full'>
      <div className='bg-sky-50 p-2 my-3 rounded-xl h-28'>
        <p>
          user id: <span className='font-semibold'>{user.id}</span>
        </p>
        <p>
          user name: <span className='font-semibold'>{user.fullName}</span>
        </p>
        <p>
          user email: <span className='font-semibold'>{user.email}</span>
        </p>
        <div className='text-center'>
          <LogoutButton />
        </div>
      </div>
      <div className='p-2 my-3 col-span-3'>Storage</div>
    </main>
  );
}
