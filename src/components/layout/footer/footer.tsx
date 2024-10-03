import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSocialMediaLink {
  href: string;
  logo: LucideIcon;
  srOnly: string;
}

interface FooterContent {
  title: string;
  title2: string;
  title3: string;
  srOnly: string;
  srOnly2: string;
  src: string;
  alt: string;
  src2: string;
  alt2: string;
  href: string;
  contact: FooterLink[];
  socialMedia: FooterSocialMediaLink[];
  registration: FooterLink[];
  policy: FooterLink[];
}

export const Footer: React.FC<FooterContent> = ({
  title,
  title2,
  title3,
  srOnly,
  srOnly2,
  src,
  alt,
  src2,
  alt2,
  href,
  contact,
  socialMedia,
  registration,
  policy,
}) => {
  return (
    <footer aria-labelledby='footer-heading' className='mt-10'>
      <h2 id='footer-heading' className='sr-only'>
        {srOnly}
      </h2>
      <div className='mx-auto w-full h-auto px-6 py-8 bg-primary'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8 flex items-center'>
            <div className='flex lg:flex-1'>
              <Link to={href} className='-m-1.5 p-1.5'>
                <span className='sr-only'>{srOnly2}</span>
                <img alt={alt} src={src} className='h-12 w-auto hidden lg:flex' />
                <img alt={alt2} src={src2} className='h-12 w-auto flex lg:hidden' />
              </Link>
            </div>
          </div>
          <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-md font-bold leading-6 text-white'>{title}</h3>
                <ul className='mt-4 space-y-2'>
                  {registration.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        target='blank'
                        className='text-sm leading-6 text-white hover:text-secondary cursor-pointer'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-md font-bold leading-6 text-white'>{title2}</h3>
                <ul className='mt-4 space-y-2'>
                  {contact.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        target='blank'
                        className='text-sm leading-6 text-white hover:text-secondary cursor-pointer'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  {socialMedia.map((item, index) => (
                    <li key={index}>
                      <Link to={item.href} target='blank'>
                        <span className='sr-only'>{item.srOnly}</span>
                        <item.logo className='mr-2 h-4 w-4 text-white hover:text-secondary' />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-md font-bold leading-6 text-white'>{title3}</h3>
                <ul className='mt-4 space-y-2'>
                  {policy.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        target='blank'
                        className='text-sm leading-6 text-white hover:text-secondary cursor-pointer'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
