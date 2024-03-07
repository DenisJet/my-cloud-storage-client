type FileType = 'all' | 'photos';

// export const getAll = async (type: FileType = "all"): Promise<FileItem[]> => {
//   return (await axios.get("/files?type=" + type)).data;
// };

// export const remove = (ids: number[]): Promise<void> => {
//   return axios.delete("/files?ids=" + ids);
// };

export const upload = async (file, token) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const data = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/files', {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` },
      body: formData,
    });

    return data;
  } catch (err) {
    console.log(err);
  }
};
