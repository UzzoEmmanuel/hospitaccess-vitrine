import React from 'react';

interface AdvantagesExtendProps {
  title: string;
  title2?: string;
  title3?: string;
  src?: string;
  alt?: string;
  src2?: string;
  alt2?: string;
}

export const AdvantagesExtend: React.FC<AdvantagesExtendProps> = ({
  title,
  title2,
  title3,
  src,
  alt,
  src2,
  alt2,
}) => {
  return (
    <div className='w-full  min-h-screen mt-16 relative isolate overflow-hidden bg-white'>
      <div className='w-full h-auto flex flex-col justify-center px-[5%] xl:px-[10%]'>
        <div className='w-full h-auto flex items-center justify-end mb-16 translate-x-[-10%]'>
          <img alt={alt} src={src} className='w-[20%]' />
        </div>
        <div className='w-full lg:w-2/3 h-auto flex flex-wrap items-center justify-center mt-16 mx-auto'>
          <p className='text-4xl xl:text-5xl font-bold tracking-tight text-secondary text-center'>
            <span className='text-primary'>{title}</span> {title2}
            <span className='text-primary'> {title3}</span>
          </p>
        </div>
        <div className='w-full h-auto flex items-center justify-start translate-y-[-15%] z-[-1]'>
          <img alt={alt2} src={src2} className='w-[30%] ' />
        </div>
      </div>
    </div>
  );
};
