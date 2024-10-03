import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../ui/button';
import { MoveRight } from 'lucide-react';

interface CallToActionProps {
  title: string;
  title2?: string;
  title3?: string;
  buttonText: string;
  href: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  title,
  title2,
  title3,
  buttonText,
  href,
}) => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center py-[10%] mt-16 xl:mt-0 isolate overflow-hidden bg-white px-[5%] xl:px-[10%]'>
      <h2 className='mt-10 text-4xl xl:text-5xl font-bold tracking-tight text-secondary'>
        {title} <span className='text-primary'>{title2}</span> {title3}
      </h2>
      <div className='w-full h-auto mt-10 ml-0 lg:ml-10 flex items-center justify-center gap-x-6'>
        <Button className='rounded-full bg-primary hover:bg-secondary border-2 border-primary hover:border-secondary text-white'>
          <Link to={href} target='blank' className='flex flex-row items-center justify-center'>
            <span className='mr-2'>{buttonText}</span>
            <MoveRight className='ml-2 h-4 w-4' />
          </Link>
        </Button>
      </div>
    </div>
  );
};
