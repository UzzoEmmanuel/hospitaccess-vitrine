import React from 'react';

interface ContentServices {
  title: string;
}
interface ContentHospitalizationType {
  title: string;
}

interface AvailableFeaturesProps {
  title: string;
  title2: string;
  src?: string;
  alt?: string;
  services: ContentServices[];
  hospitalizationTypes: ContentHospitalizationType[];
}

export const AvailableFeatures: React.FC<AvailableFeaturesProps> = ({
  title,
  title2,
  src,
  alt,
  services,
  hospitalizationTypes,
}) => {
  return (
    <div className='w-full min-h-screen mt-16 isolate overflow-hidden bg-white'>
      <div className='w-full h-auto flex flex-col items-center justify-center px-[5%] xl:px-[10%]'>
        <div className='w-full h-auto flex flex-col items-center justify-center'>
          <h3 className='font-bold text-4xl xl:text-5xl text-primary text-center'>{title}</h3>
          <div className='w-full h-auto flex flex-wrap items-center justify-center mt-8 gap-6'>
            {services.map((service, index) => (
              <span
                key={index}
                className='p-4 bg-backgroundFourthSpecialColor rounded-xl text-secondary font-semibold'
              >
                {service.title}
              </span>
            ))}
          </div>
        </div>
        <div className='w-full h-auto flex flex-col items-center justify-center mt-16'>
          <h3 className='font-bold text-4xl xl:text-5xl text-tertiary text-center'>{title2}</h3>
          <div className='w-full h-auto flex flex-wrap items-center justify-center mt-8 gap-6'>
            {hospitalizationTypes.map((hospitalizationType, index) => (
              <span
                key={index}
                className='p-4 bg-backgroundFifthSpecialColor rounded-xl text-secondary font-semibold'
              >
                {hospitalizationType.title}
              </span>
            ))}
          </div>
        </div>
        <div className='w-full h-auto flex items-center justify-end z-[-1] mt-[5%] 2xl:mt-[-10%]'>
          <img alt={alt} src={src} className='w-[30%]' />
        </div>
      </div>
    </div>
  );
};
