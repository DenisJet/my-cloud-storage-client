import { getExt } from '@/utils/getExt';
import { isImage } from '@/utils/isImage';

interface FileCardProps {
  filename: string;
  originalName: string;
}

export const FileCard: React.FC<FileCardProps> = ({ originalName, filename }) => {
  const ext = getExt(filename);
  const imageUrl = ext && isImage(ext) ? 'http://localhost:7777/uploads/' + filename : '';

  return (
    <div className='w-20 align-self: stretch truncate'>
      {isImage(ext) ? (
        <img className='w-20 h-20 object-contain' src={imageUrl} alt='image' />
      ) : (
        <img className='w-20 h-20' src='/icon-text-file-80.png' alt='image' />
      )}
      <span className='text-xs'>{originalName}</span>
    </div>
  );
};
