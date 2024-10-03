import React from 'react';

interface HeroProps {
  title: string;
  title2?: string;
  title3?: string;
  text: string;
}

export const Hero: React.FC<HeroProps> = ({ title, title2, title3, text }) => {
  return (
    <div className='w-full lg:w-[60%] h-auto flex flex-col items-start justify-start py-[10%] mt-16 xl:mt-0 isolate overflow-hidden bg-white px-[5%] xl:px-[10%]'>
      <h1 className='mt-10 text-4xl xl:text-5xl font-bold tracking-tight text-secondary'>
        {title} <span className='text-primary'>{title2}</span> {title3}
      </h1>
      <p className='mt-6 text-lg xl:text-xl leading-8 text-secondary'>{text}</p>
    </div>
  );
};
