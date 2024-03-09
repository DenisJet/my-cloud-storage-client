import { FileItem } from '@/dto/file.dto';
import { FileCard } from '../FileCard/FileCard';

export const FileList = ({ files }) => {
  return (
    <ul className='flex gap-2 items-center flex-wrap'>
      {files &&
        files.map((file: FileItem) => (
          <li>
            <FileCard filename={file.filename} originalName={file.originalName} />
          </li>
        ))}
    </ul>
  );
};
