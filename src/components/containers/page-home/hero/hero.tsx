import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../ui/button';
import { CirclePlus, CircleChevronDown } from 'lucide-react';
interface HeroProps {
  title: string;
  title2?: string;
  title3?: string;
  text: string;
  buttonText: string;
  href: string;
  src?: string;
  alt?: string;
  src2?: string;
  alt2?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  title2,
  title3,
  text,
  buttonText,
  href,
  src,
  alt,
  src2,
  alt2,
}) => {
  return (
    <div className='w-full h-auto lg:h-screen flex items-center mt-16 xl:mt-0 relative isolate overflow-hidden bg-white px-[5%] xl:px-[10%]'>
      <div className='w-full h-auto flex flex-col lg:flex-row justify-center lg:justify-between'>
        <div className='w-full lg:w-1/2 h-screen lg:h-auto flex flex-col justify-center lg:justify-start pr-0 xl:pr-[2%]'>
          <h1 className='mt-10 text-4xl xl:text-5xl font-bold tracking-tight text-secondary'>
            {title} <span className='text-primary'>{title2}</span> {title3}
          </h1>
          <p className='mt-6 text-lg xl:text-xl leading-8 text-secondary'>{text}</p>
          <div className='w-full h-auto mt-10 flex items-center justify-center lg:justify-start gap-x-6'>
            <Button className='rounded-full bg-white hover:bg-secondary border-2 border-primary hover:border-secondary xl:px-6 xl:py-6 text-primary hover:text-white'>
              <Link
                to={href}
                target='blank'
                className='flex flex-row items-center justify-center text-lg xl:text-xl'
              >
                <CirclePlus className='mr-2 h-4 xl:h-6 w-4 xl:w-6' />
                <span className='ml-2'>{buttonText}</span>
              </Link>
            </Button>
          </div>
          <div className='w-full h-auto flex items-center justify-start mt-10'>
            <img alt={alt} src={src} className='w-[38%]' />
          </div>
        </div>
        <div className='w-full lg:w-1/2 h-screen lg:h-auto hidden lg:flex flex-col justify-center lg:justify-end mt-10 lg:mt-0 pb-[5%] lg:pb-0'>
          <div className='max-w-3xl flex justify-center sm:max-w-5xl z-1 relative lg:translate-y-[-15%]'>
            <img alt={alt2} src={src2} className='w-[90%]' />
          </div>
          <div className='w-full h-auto hidden lg:flex items-center justify-start relative translate-y-[-50%]'>
            <CircleChevronDown className='h-4 xl:h-6 w-4 xl:w-6 text-fontLight' />
          </div>
        </div>
      </div>
    </div>
  );
};
