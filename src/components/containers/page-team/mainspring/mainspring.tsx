import React from 'react';

interface ContentItem {
  text: string;
}

export const Mainspring: React.FC<ContentItem> = ({ text }) => {
  return (
    <div className='w-full min-h-screen mt-16 isolate flex items-center justify-center overflow-hidden bg-white px-[5%] xl:px-[10%]'>
      <h2 className='mb-16 text-4xl xl:text-5xl font-bold tracking-tight text-primary'>{text}</h2>
    </div>
  );
};
