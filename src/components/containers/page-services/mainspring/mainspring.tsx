import React from 'react';

interface ContentItem {
  text: string;
}

export const Mainspring: React.FC<ContentItem> = ({ text }) => {
  return (
    <div className='w-full lg:w-[60%] min-h-screen mt-16 isolate flex items-center justify-start overflow-hidden bg-white px-[5%] xl:px-[10%]'>
      <p className='text-fontLight text-lg xl:text-xl'>{text}</p>
    </div>
  );
};
