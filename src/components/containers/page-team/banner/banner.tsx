import React from 'react';

interface BannerProps {
  src: string;
  alt: string;
}

export const Banner: React.FC<BannerProps> = ({ src, alt }) => {
  return (
    <div className='w-full h-screen flex items-center mt-16 relative isolate overflow-hidden'>
      <img alt={alt} src={src} className='w-full' />
    </div>
  );
};
