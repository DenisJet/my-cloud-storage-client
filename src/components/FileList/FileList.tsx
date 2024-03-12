import { FileItem } from '@/dto/file.dto';
import { FileCard } from '../FileCard/FileCard';

interface FileListProps {
  files: FileItem[];
}

export const FileList: React.FC<FileListProps> = ({ files }) => {
  return (
    <ul className='flex gap-2 items-center flex-wrap'>
      {files &&
        files.map((file: FileItem) => (
          <li key={file.id}>
            <FileCard filename={file.filename} originalName={file.originalName} id={file.id} />
          </li>
        ))}
    </ul>
  );
};
