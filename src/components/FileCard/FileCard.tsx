'use client';
import { getExt } from '@/utils/getExt';
import { isImage } from '@/utils/isImage';
import { useEffect, useRef, useState } from 'react';

interface FileCardProps {
  filename: string;
  originalName: string;
}

export const FileCard: React.FC<FileCardProps> = ({ originalName, filename }) => {
  const [activeCard, setActiveCard] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const ext = getExt(filename);
  const imageUrl = ext && isImage(ext) ? 'http://localhost:7777/uploads/' + filename : '';

  const clickHandler = (evt) => {
    if (cardRef.current && !cardRef.current.contains(evt.target)) {
      setActiveCard(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickHandler);
  }, []);

  return (
    <div
      onClick={() => setActiveCard(!activeCard)}
      ref={cardRef}
      className='w-20 align-self: stretch truncate cursor-pointer hover:opacity-75 text-center relative'
      title={originalName}
    >
      {ext && isImage(ext) ? (
        <img className='w-20 h-20 object-contain' src={imageUrl} alt='image' />
      ) : (
        <img className='w-20 h-20 object-contain' src='/icon-text-file-80.png' alt='image' />
      )}
      <span className='text-xs'>{originalName}</span>
      {activeCard && <div className='absolute top-0 left-0'>Buttons</div>}
    </div>
  );
};
