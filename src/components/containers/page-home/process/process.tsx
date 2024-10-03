import React from 'react';
import { CalendarDays } from 'lucide-react';

interface ProcessProps {
  title: string;
  text: string;
  src: string;
  alt: string;
}

export const Process: React.FC<ProcessProps> = ({ title, text, src, alt }) => {
  return (
    <div className='w-full h-screen flex items-center mt-16 relative isolate overflow-hidden bg-gray-100'>
      <div className='w-full h-auto flex flex-col items-center justify-center px-[5%] xl:px-[10%]'>
        <div className='w-full h-auto flex flex-col lg:flex-row justify-center lg:justify-between'>
          <div className='w-full lg:w-1/2 h-auto flex flex-col justify-center lg:justify-start mb-10 lg:mb-0'>
            <h2 className='mt-10 text-4xl xl:text-5xl font-bold tracking-tight text-primary'>
              {title}
            </h2>
          </div>
        </div>
        <div className='w-full h-auto flex flex-col flex-grom items-center justify-center mt-16'>
          <img
            alt={alt}
            src={src}
            className='w-full py-8 border-2 border-secondary border-dashed'
          />
        </div>
        <div className='w-full h-auto flex flex-wrap items-center justify-start my-10 gap-6'>
          <div className='flex flex-row items-center justify-center p-4 ml-0 bg-backgroundFourthSpecialColor rounded-xl '>
            <CalendarDays className='mr-2 h-4 w-4 text-secondary' />
            <span className='text-secondary font-semibold'>{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
