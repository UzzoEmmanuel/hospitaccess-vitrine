import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../ui/button';
import { MoveRight } from 'lucide-react';

interface ContactUsProps {
  mainTitle: string;
  href: string;
  buttonText: string;
}

export const ContactUs: React.FC<ContactUsProps> = ({ mainTitle, href, buttonText }) => {
  return (
    <div className='w-full h-screen isolate overflow-hidden bg-white'>
      <div className='w-full h-full flex flex-col items-center justify-center px-[5%] xl:px-[10%]'>
        <h2 className='inline-block text-5xl sm:text-8xl tracking-tight text-primary font-poppins font-thin text-center'>
          {mainTitle}
        </h2>
        <div className='w-full h-auto mt-10 ml-0 lg:ml-10 flex items-center justify-center gap-x-6'>
          <Button className='rounded-full bg-primary hover:bg-secondary border-2 border-primary hover:border-secondary text-white'>
            <Link to={href} className='flex flex-row items-center justify-center'>
              <span className='mr-2'>{buttonText}</span>
              <MoveRight className='ml-2 h-4 w-4' />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
