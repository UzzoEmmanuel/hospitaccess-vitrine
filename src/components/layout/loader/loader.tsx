import React from 'react';

interface LoaderProps {
  src: string;
  alt: string;
}

export const Loader: React.FC<LoaderProps> = ({ src, alt }) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-primary'>
      <img
        alt={alt}
        // 'logo petit format HospitAccess'
        src={src}
        className='animate-pulse duration-[3000ms]'
      />
    </div>
  );
};
