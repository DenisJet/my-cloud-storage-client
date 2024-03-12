'use client';
import { remove } from '@/actions/file.actions';
import { getExt } from '@/utils/getExt';
import { isImage } from '@/utils/isImage';
import { useEffect, useRef, useState } from 'react';

interface FileCardProps {
  filename: string;
  originalName: string;
  id: number;
}

export const FileCard: React.FC<FileCardProps> = ({ originalName, filename, id }) => {
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

  const onClickDelete = () => {
    const idsArr = [];
    idsArr.push(id);

    if (window.confirm('Вы действительно хотите удалить файл?')) {
      remove(idsArr);
      window.location.reload();
    }
  };

  return (
    <div
      data-ui={activeCard ? 'checked active' : ''}
      onClick={() => setActiveCard(!activeCard)}
      ref={cardRef}
      className='w-20 align-self: stretch truncate cursor-pointer text-center relative data-checked:border-2 data-checked:hover:opacity-1'
      title={originalName}
    >
      {ext && isImage(ext) ? (
        <img
          data-ui={activeCard ? 'checked active' : ''}
          className='w-20 h-20 object-contain data-checked:opacity-25 hover:opacity-75 z-index-0'
          src={imageUrl}
          alt='image'
        />
      ) : (
        <img
          data-ui={activeCard ? 'checked active' : ''}
          className='w-20 h-20 object-contain data-checked:opacity-25 hover:opacity-75'
          src='/icon-text-file-80.png'
          alt='image'
        />
      )}
      <span data-ui={activeCard ? 'checked active' : ''} className='text-xs data-checked:opacity-25'>
        {originalName}
      </span>
      {activeCard && (
        <div className='absolute top-3 left-2 flex flex-col font-semibold'>
          <button type='button' className='mb-3 hover:underline hover:opacity-50 text-green-500 z-index-0'>
            Load
          </button>
          <button type='button' className='hover:underline hover:opacity-50 text-red-500' onClick={onClickDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
