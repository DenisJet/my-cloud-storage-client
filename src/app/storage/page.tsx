import { GetServerSidePropsContext, NextPage } from 'next';
import nookies from 'nookies';
import axios from '@/core/axios';
import * as Api from '@/api';

const StoragePage: NextPage = () => {
  return (
    <main className='max-w-7xl m-auto px-2.5 sm:grid grid-cols-4 h-full'>
      <div className='bg-sky-50 p-2 my-3 rounded-xl h-28'>
        <p>user name</p>
        <p>user email</p>
        <button>logout</button>
      </div>
      <div className='p-2 my-3 col-span-3'>Storage</div>
    </main>
  );
};

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  const { _token } = nookies.get(ctx);
  axios.defaults.headers.Authorization = 'Bearer ' + _token;

  try {
    await Api.auth.getMe();

    return { props: {} };
  } catch (err) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export default StoragePage;
