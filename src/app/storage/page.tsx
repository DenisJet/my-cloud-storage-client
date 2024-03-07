import { getMe } from '@/auth';
import { LogoutButton } from '@/components/LogoutButton/LogoutButton';
import { cookies } from 'next/headers';

export default async function StoragePage() {
  const cookieStore = cookies();
  const token = cookieStore.get('_token')?.value;
  const user = await getMe(token);

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
