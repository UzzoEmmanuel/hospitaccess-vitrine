import React from 'react';

interface ContentItem {
  title: string;
  text: string;
}

interface ContentColumnsProps {
  mainTitle: string;
  columns: ContentItem[];
}

export const Problematic: React.FC<ContentColumnsProps> = ({ mainTitle, columns }) => {
  return (
    <div className='w-full min-h-screen mt-32 isolate overflow-hidden bg-white px-[5%] xl:px-[10%]'>
      <h2 className='mb-16 text-4xl xl:text-5xl font-bold tracking-tight text-primary'>
        {mainTitle}
      </h2>
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10`}>
        {columns.map((column, index) => (
          <div key={index} className='column'>
            <h3 className='text-primary text-xl xl:text-2xl mb-4'>{column.title}</h3>
            <p className='text-secondary text-lg xl:text-xl'>{column.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
