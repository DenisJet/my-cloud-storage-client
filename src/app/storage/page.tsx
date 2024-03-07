import { getMe } from '@/auth';
import { LogoutButton } from '@/components/LogoutButton/LogoutButton';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const getUser = () => {
  const cookieStore = cookies();
  const token = cookieStore.get('_token')?.value;

  if (!token || token == undefined) {
    redirect('/');
  }

  return getMe(token);
};

export default async function StoragePage() {
  const user = await getUser();

  return (
    <main className='max-w-7xl m-auto px-2.5 sm:grid grid-cols-3 lg:grid-cols-4 h-full'>
      <div className='bg-sky-50 p-2 my-3 rounded-xl h-min'>
        <h1 className='font-semibold text-xl mb-3'>My profile</h1>
        <p>
          ID: <span className='font-semibold'>{user.id}</span>
        </p>
        <p>
          Name: <span className='font-semibold'>{user.fullName}</span>
        </p>
        <p>
          E-mail: <span className='font-semibold'>{user.email}</span>
        </p>
        <div className='text-center mt-3'>
          <LogoutButton />
        </div>
      </div>
      <div className='p-2 my-3 sm:col-span-2 lg:col-span-3'>Storage</div>
    </main>
  );
}
