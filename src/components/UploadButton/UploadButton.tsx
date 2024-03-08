'use client';

import { uploadFile } from '@/actions';
import { upload } from '@/file';
import { useState } from 'react';

export const UploadButton = () => {
  const [file, setFile] = useState<File>();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.set('file', file);

    uploadFile(formData);
  };

  return (
    <form onSubmit={onSubmit} className='mb-3 text-center truncate'>
      <label htmlFor='upload' className='max-w-80 mb-2 cursor-pointer whitespace-nowrap'>
        <span className='text-sky-500 hover:opacity-60'>Choose File</span>
        {file && <span className='border mb-3 p-1 rounded-xl'>{file?.name}</span>}
      </label>
      <input
        type='file'
        id='upload'
        className='hidden'
        title='add file'
        name='file'
        onChange={(e) => setFile(e.target.files?.[0])}
      />
      {file && (
        <input
          type='submit'
          className='mt-3 mx-auto cursor-pointer block text-green-500 hover:opacity-60'
          value='Upload'
        />
      )}
    </form>
  );
};
