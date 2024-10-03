import React from 'react';
import { Link } from 'react-router-dom';

interface ContentItem {
  title: string;
  href: string;
  src: string;
  alt: string;
}

interface ContentColumnsProps {
  mainTitle: string;
  columns: ContentItem[];
}

export const References: React.FC<ContentColumnsProps> = ({ mainTitle, columns }) => {
  return (
    <div className='w-full min-h-screen mt-32 isolate overflow-hidden bg-white px-[5%] xl:px-[10%]'>
      <h2 className='mb-16 text-4xl xl:text-5xl font-bold tracking-tight text-primary'>
        {mainTitle}
      </h2>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-[3%]`}>
        {columns.map((column, index) => (
          <div
            key={index}
            className='text-secondary hover:text-primary shadow-md hover:shadow-md hover:shadow-backgroundFourthSpecialColor p-2 rounded-lg'
          >
            <Link to={column.href} target='blank'>
              <img
                src={column.src}
                alt={column.alt}
                className='w-full h-auto aspect-square object-cover rounded-lg'
              />

              <h3 className='text-xl xl:text-2xl mb-4 pt-[2%]'>{column.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
