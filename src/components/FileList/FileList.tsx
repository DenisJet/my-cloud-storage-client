'use client';

import { FileItem } from '@/dto/file.dto';
import { FileCard } from '../FileCard/FileCard';
import { useState } from 'react';

interface FileListProps {
  files: FileItem[];
}

export const FileList: React.FC<FileListProps> = ({ files }) => {
  const [activeCard, setActiveCard] = useState();

  return (
    <ul className='flex gap-2 items-center flex-wrap'>
      {files &&
        files.map((file: FileItem) => (
          <li key={file.id}>
            <FileCard filename={file.filename} originalName={file.originalName} />
          </li>
        ))}
    </ul>
  );
};
