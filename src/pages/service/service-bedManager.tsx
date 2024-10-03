import useScrollOpacity from '../../hooks/useScrollOpacity';
import { Hero } from '../../components/containers/common/hero/hero';
import { Banner } from '../../components/containers/page-services/banner/banner';
import { Problematic } from '../../components/containers/page-services/problematic/problematic';
import { Mainspring } from '../../components/containers/page-services/mainspring/mainspring';
import { Advantages } from '../../components/containers/page-services/advantages/advantages';
import { CallToAction } from '../../components/containers/page-services/call-to-action/callToAction';
import { ContactUs } from '../../components/containers/common/contact-us/contactUs';
import {
  heroContent,
  bannerContent,
  problematicContent,
  mainspringContent,
  advantagesContent,
  callToActionContent,
} from '../../locales/content/service-bedManager/service-bedManager.content';
import { contactUsContent } from '../../locales/content/common/contactUs.content';

const ServiceBedManager = () => {
  const opacities = useScrollOpacity(7, [0, 1]);

  return (
    <div className='mx-auto flex flex-col items-center justify-between'>
      <div
        className={`w-full scroll-section transition-all duration-700 ease-in-out ${opacities[0]}`}
      >
        <Hero title={heroContent.title} title2={heroContent.titel2} text={heroContent.text} />
      </div>
      <div
        className={`w-full scroll-section transition-all duration-700 ease-in-out ${opacities[1]}`}
      >
        <Banner src={bannerContent.src} alt={bannerContent.alt} />
      </div>
      <div
        className={`w-full scroll-section transition-all duration-700 ease-in-out ${opacities[2]}`}
      >
        <Problematic
          mainTitle={problematicContent.mainTitle}
          columns={problematicContent.columns}
        />
      </div>
      <div
        className={`w-full scroll-section transition-all duration-700 ease-in-out ${opacities[3]}`}
      >
        <Mainspring text={mainspringContent.text} />
      </div>
      <div
        className={`w-full scroll-section transition-all duration-700 ease-in-out ${opacities[4]}`}
      >
        <Advantages advantagesContent={advantagesContent} />
      </div>
      <div
        className={`w-full scroll-section transition-all duration-700 ease-in-out ${opacities[5]}`}
      >
        <CallToAction
          title={callToActionContent.title}
          title2={callToActionContent.titel2}
          buttonText={callToActionContent.buttonText}
          href={callToActionContent.href}
        />
      </div>
      <div
        className={`w-full scroll-section transition-all duration-700 ease-in-out ${opacities[6]}`}
      >
        <ContactUs
          mainTitle={contactUsContent.mainTitle}
          href={contactUsContent.href}
          buttonText={contactUsContent.buttonText}
        />
      </div>
    </div>
  );
};

export default ServiceBedManager;
