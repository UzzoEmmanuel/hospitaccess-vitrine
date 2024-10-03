import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, X, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu';
import { Sheet, SheetContent, SheetClose } from '../../ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';
import { Button } from '../../ui/button';

interface ServiceLink {
  text: string;
  href: string;
}

interface HeaderContent {
  srOnly?: string;
  srOnly2?: string;
  srOnly3?: string;
  services: ServiceLink[];
  teamLink: ServiceLink;
  src: string;
  alt: string;
  src2: string;
  alt2: string;
  href: string;
  buttonText: string;
  ctaButtons: {
    signUp: ServiceLink;
    login: ServiceLink;
  };
}

export const Header: React.FC<HeaderContent> = ({
  srOnly,
  srOnly2,
  srOnly3,
  src,
  alt,
  src2,
  alt2,
  href,
  buttonText,
  services,
  teamLink,
  ctaButtons,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-white sticky top-0 z-40'>
      <nav
        aria-label='Global'
        className='mx-auto flex w-full items-center justify-between p-6 lg:px-8 shadow-[0_3px_5px_-2px_rgba(0,0,0,0.1)]'
      >
        <div className='w-[60%] flex items-center justify-start'>
          <div className='inline-block mx-[10%]'>
            <Link to={href} className='-m-1.5 p-1.5'>
              <span className='sr-only'>{srOnly}</span>
              <img alt={alt} src={src} className='h-12 w-auto hidden lg:flex' />
              <img alt={alt2} src={src2} className='h-12 w-auto flex lg:hidden' />
            </Link>
          </div>

          <div className='hidden lg:flex'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='text-fontLight hover:text-primary'>
                  <span className='mr-2'>{buttonText}</span>{' '}
                  <ChevronDown className='mr-2 h-4 w-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-66 z-50 bg-white'>
                <DropdownMenuGroup>
                  {services.map((service, index) => (
                    <DropdownMenuItem asChild key={index}>
                      <Link
                        to={service.href}
                        className='text-fontLight hover:text-primary cursor-pointer'
                      >
                        {service.text}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className='hidden lg:flex'>
            <Button variant='ghost' className='text-fontLight hover:text-primary cursor-pointer'>
              <Link to={teamLink.href} className='text-sm leading-6'>
                {teamLink.text}
              </Link>
            </Button>
          </div>
        </div>
        <div className='flex lg:hidden'>
          <Button
            variant='ghost'
            onClick={() => setMobileMenuOpen(true)}
            className='text-primary hover:text-secondary'
          >
            <span className='sr-only'>{srOnly2}</span>
            <Menu className='h-6 w-6' />
          </Button>
        </div>
        <div className='w-[40%] hidden lg:flex lg:justify-end lg:gap-4'>
          <Button className='rounded-full bg-primary hover:bg-secondary border-2 border-primary hover:border-secondary text-white'>
            <Link to={ctaButtons.signUp.href} target='blank' className='text-sm leading-6'>
              {ctaButtons.signUp.text}
            </Link>
          </Button>
          <Button className='rounded-full bg-white hover:bg-secondary border-2 border-primary hover:border-secondary text-primary hover:text-white'>
            <Link to={ctaButtons.login.href} target='blank' className='text-sm leading-6'>
              {ctaButtons.login.text}
            </Link>
          </Button>
        </div>
      </nav>

      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side='right' className='w-full sm:max-w-sm p-6 bg-white'>
          <div className='flex items-center justify-between'>
            <Link to={href} className='-m-1.5 p-1.5' onClick={() => setMobileMenuOpen(false)}>
              <span className='sr-only'>{srOnly}</span>
              <img alt={alt2} src={src2} className='h-12 w-auto flex lg:hidden' />
            </Link>
            <SheetClose>
              <Button
                variant='ghost'
                onClick={() => setMobileMenuOpen(false)}
                className='text-fontLight hover:text-secondary'
              >
                <span className='sr-only'>{srOnly3}</span>
                <X className='h-6 w-6 ' />
              </Button>
            </SheetClose>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Accordion type='single' collapsible>
                  <AccordionItem value='Services'>
                    <AccordionTrigger className='group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-fontLight hover:text-primary'>
                      {buttonText}
                    </AccordionTrigger>
                    <AccordionContent className='mt-2 space-y-2'>
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className='block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-fontLight hover:text-primary'
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.text}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Link
                  to={teamLink.href}
                  className='block rounded-lg px-3 py-2 text-base leading-7 text-fontLight hover:text-primary'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {teamLink.text}
                </Link>
                <div className='flex flex-col justify-start gap-4 py-6 border-t-2 border-gray-500/10'>
                  <Button className='w-32 rounded-full bg-primary hover:bg-secondary border-2 border-primary hover:border-secondary text-white'>
                    <Link
                      to={ctaButtons.signUp.href}
                      target='blank'
                      className='text-sm leading-6'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {ctaButtons.signUp.text}
                    </Link>
                  </Button>
                  <Button className='w-32 rounded-full bg-white hover:bg-secondary border-2 border-primary hover:border-secondary text-primary hover:text-white'>
                    <Link
                      to={ctaButtons.login.href}
                      target='blank'
                      className='text-sm leading-6'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {ctaButtons.login.text}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};
