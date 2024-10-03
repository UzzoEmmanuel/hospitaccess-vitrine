import React from 'react';
interface IntroductionProps {
  mainTitle: string;
  title: string;
  title2?: string;
  text: string;
  text2?: string;
  src?: string;
  alt?: string;
}
export const Introduction: React.FC<IntroductionProps> = ({
  mainTitle,
  title,
  title2,
  text,
  text2,
  src,
  alt,
}) => {
  return (
    <div className='w-full min-h-screen mt-16 isolate overflow-hidden bg-white'>
      <div className='w-full h-auto flex flex-col items-center justify-center px-[5%] xl:px-[10%]'>
        <div className='w-full h-auto flex flex-col lg:flex-row justify-center lg:justify-between'>
          <div className='w-full lg:w-1/2 h-auto flex flex-col justify-center lg:justify-start lg:pr-[5%]'>
            <h2 className='mt-10 text-4xl xl:text-5xl font-bold tracking-tight text-primary'>
              {mainTitle}
            </h2>
          </div>
          <div className='w-full lg:w-1/2 h-auto flex flex-col justify-center lg:justify-end mt-10 lg:mt-0'>
            <div className='w-full h-auto flex flex-col justify-center gap-y-6 pb-16'>
              <h3 className='text-primary text-xl xl:text-2xl'>{title}</h3>
              <p className='text-secondary text-lg xl:text-xl'>{text}</p>
            </div>
            <div className='w-full h-auto flex flex-col justify-center pt-6 gap-y-6 border-t-2 border-gray-500/10'>
              <h3 className='text-primary text-xl xl:text-2xl'>{title2}</h3>
              <p className='text-secondary text-lg xl:text-xl'>{text2}</p>
            </div>
          </div>
        </div>
        <div className='w-full h-auto flex items-center justify-start pt-[10%]'>
          <img alt={alt} src={src} className='w-[20%] ml-0 lg:ml-10 ' />
        </div>
      </div>
    </div>
  );
};
