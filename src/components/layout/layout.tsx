import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from './loader/loader';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { BackToTop } from './back-to-top/backToTop';
import { headerContent } from '../../locales/content/common/header.content';
import { footerContent } from '../../locales/content/common/footer.content';
import { loaderContent } from '../../locales/content/common/loader.content';

export const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Suspense fallback={<Loader src={loaderContent.src} alt={loaderContent.alt} />}>
        <Header
          srOnly={headerContent.srOnly}
          srOnly2={headerContent.srOnly2}
          srOnly3={headerContent.srOnly3}
          src={headerContent.src}
          alt={headerContent.alt}
          src2={headerContent.src2}
          alt2={headerContent.alt2}
          href={headerContent.href}
          buttonText={headerContent.buttonText}
          services={headerContent.services}
          teamLink={headerContent.teamLink}
          ctaButtons={headerContent.ctaButtons}
        />
        <main className='flex-grow'>
          <Outlet />
        </main>
        <Footer
          title={footerContent.title}
          title2={footerContent.title2}
          title3={footerContent.title3}
          srOnly={footerContent.srOnly}
          srOnly2={footerContent.srOnly}
          src={footerContent.src}
          alt={footerContent.alt}
          src2={footerContent.src2}
          alt2={footerContent.alt2}
          href={footerContent.href}
          contact={footerContent.contact}
          socialMedia={footerContent.socialMedia}
          registration={footerContent.registration}
          policy={footerContent.policy}
        />
        <BackToTop />
      </Suspense>
    </div>
  );
};
