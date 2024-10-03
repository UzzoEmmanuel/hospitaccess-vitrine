import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../ui/button';
import { CirclePlus } from 'lucide-react';

interface ContentAffected {
  title: string;
}

type BackgroundColor =
  | 'bg-backgroundthirdSpecial'
  | 'bg-backgroundFourthSpecialColor'
  | 'bg-backgroundFifthSpecialColor';

interface ContentServices {
  title: string;
  description: string;
  color: BackgroundColor;
  href: string;
  affected: ContentAffected[];
}

interface ServicesProps {
  mainTitle: string;
  text: string;
  text2?: string;
  buttonText?: string;
  href: string;
  services: ContentServices[];
}

export const Services: React.FC<ServicesProps> = ({
  mainTitle,
  text,
  text2,
  buttonText,
  href,
  services,
}) => {
  return (
    <div className='w-full min-h-screen mt-32 relative isolate overflow-hidden bg-white'>
      <div className='w-full h-auto flex flex-col justify-center px-[5%] xl:px-[10%]'>
        <div className='w-full h-auto flex flex-col justify-start mb-10 lg:mb-0 relative'>
          <h2 className='text-4xl xl:text-5xl font-bold tracking-tight text-primary mt-16'>
            {mainTitle}
          </h2>
        </div>
        <div className='w-full h-auto grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10'>
          {services.map((service, index) => (
            <Link
              to={service.href}
              key={index}
              className={`w-full h-full max-h-[305px] flex flex-col items-start justify-between aspect-[15/7] p-[3%] rounded-xl ${service.color} hover:bg-white hover:shadow-xl cursor-pointer`}
            >
              <div className='w-full h-auto flex flex-col items-start justify-start'>
                <h3 className='font-bold text-lg xl:text-2xl 2xl:text-3xl text-secondary'>
                  {service.title}
                </h3>
                <p className='inline-block text-secondary'>{service.description}</p>
              </div>
              <div className='w-full h-auto flex flex-row items-end justify-between'>
                <div className='w-full h-auto flex flex-col items-start justify-start gap-2'>
                  <h4 className='text-secondary text-md'>{text}</h4>
                  <div className='w-full h-auto flex flex-wrap gap-2'>
                    {service.affected.map((affected, index) => (
                      <p
                        key={index}
                        className='inline-block p-4 bg-backgroundSecondSpecial rounded-xl text-secondary font-semibold'
                      >
                        {affected.title}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <CirclePlus className='h-10 w-10 text-secondary' />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className='w-full h-auto mt-10 flex flex-col justify-center lg:justify-start gap-x-6'>
          <div className='inline-block'>
            <Button className='rounded-full bg-primary hover:bg-secondary border-2 border-primary hover:border-secondary text-white'>
              <Link to={href} className='flex flex-row items-center justify-center'>
                <CirclePlus className='mr-2 h-4 w-4' />
                <span className='ml-2'>{buttonText}</span>
              </Link>
            </Button>
          </div>
          <span className='inline-block text-fontLigth mt-2'>{text2}</span>
        </div>
      </div>
    </div>
  );
};
