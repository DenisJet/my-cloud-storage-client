'use server';
import { FileItem } from '@/dto/file.dto';
import { cookies } from 'next/headers';

export async function uploadFile(formData: FormData) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('_token')?.value;

    const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/files', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    return res.statusText;
  } catch (err) {
    console.log(err);
  }
}

type FileType = 'all' | 'photos';

export const getFiles = async (type: FileType = 'all'): Promise<FileItem[]> => {
  const cookieStore = cookies();
  const token = cookieStore.get('_token')?.value;

  const response = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/files?type=' + type, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.json();
};

// export const remove = (ids: number[]): Promise<void> => {
//   return axios.delete('/files?ids=' + ids);
// };
