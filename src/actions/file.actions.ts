'use server';
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

// export const getAll = async (type: FileType = "all"): Promise<FileItem[]> => {
//   return (await axios.get("/files?type=" + type)).data;
// };

// export const remove = (ids: number[]): Promise<void> => {
//   return axios.delete("/files?ids=" + ids);
// };
