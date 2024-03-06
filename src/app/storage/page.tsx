import * as Api from '@/api';
import { LogoutButton } from '@/components/LogoutButton/LogoutButton';

export default async function StoragePage() {
  // const user = await Api.auth.getMe();
  // console.log(user);

  return (
    <main className='max-w-7xl m-auto px-2.5 sm:grid grid-cols-4 h-full'>
      <div className='bg-sky-50 p-2 my-3 rounded-xl h-28'>
        <p>name: user.fullName</p>
        <p>email: user.email</p>
        <LogoutButton />
      </div>
      <div className='p-2 my-3 col-span-3'>Storage</div>
    </main>
  );
}
