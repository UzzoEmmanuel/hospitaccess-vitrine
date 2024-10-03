import React from 'react';

interface Item {
  text: string;
}

interface ContentItem {
  title?: string;
  paragraphs: Item[];
}

export const Us: React.FC<ContentItem> = ({ title, paragraphs }) => {
  return (
    <div className='w-full min-h-screen mt-32 isolate overflow-hidden bg-white px-[5%] xl:px-[10%]'>
      <h2 className='mb-16 text-4xl xl:text-5xl font-bold tracking-tight text-primary'>{title}</h2>
      <div className={`grid grid-cols-1 gap-10`}>
        {paragraphs.map((paragraph, index) => (
          <div key={index} className='column'>
            <p className='text-secondary text-lg xl:text-xl'>{paragraph.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
