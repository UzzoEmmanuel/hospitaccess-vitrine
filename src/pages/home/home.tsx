import useScrollOpacity from '../../hooks/useScrollOpacity';
import { Hero } from '../../components/containers/page-home/hero/hero';
import { Partners } from '../../components/containers/page-home/partners/partners';
import { Introduction } from '../../components/containers/page-home/introduction/introduction';
import { AvailableFeatures } from '../../components/containers/page-home/available-features/availableFeatures';
import { Process } from '../../components/containers/page-home/process/process';
import { Advantages } from '../../components/containers/page-home/advantages/advantages';
import { AdvantagesExtend } from '../../components/containers/page-home/advantages-extend/advantagesExtend';
import { Services } from '../../components/containers/page-home/services/services';
import { ContactUs } from '../../components/containers/common/contact-us/contactUs';
import {
  heroContent,
  partnersContent,
  introductionContent,
  availableFeaturesContent,
  ProcessContent,
  advantagesContent,
  advantagesExtendContent,
  ServicesContent,
} from '../../locales/content/home/home.content';
import { contactUsContent } from '../../locales/content/common/contactUs.content';

const Home = () => {
  const opacities = useScrollOpacity(9, [0]);

  return (
    <div className='mx-auto flex flex-col items-center justify-between'>
      <div
        className={`w-full scroll-section transition-all duration-700 ease-in-out ${opacities[0]}`}
      >
        <Hero
          title={heroContent.title}
          title2={heroContent.title2}
          text={heroContent.text}
          buttonText={heroContent.buttonText}
          href={heroContent.href}
          src={heroContent.src}
          alt={heroContent.alt}
          src2={heroContent.src2}
          alt2={heroContent.alt2}
        />
      </div>
      <div
        className={`w-full scroll-section transition-all duration-700 ease-in-out ${opacities[1]}`}
      >
        <Partners partnersContent={partnersContent} />
      </div>
      <div
        className={`w-full scroll-section transition-all duration-700 ease-in-out ${opacities[2]}`}
      >
        <Introduction
          mainTitle={introductionContent.mainTitle}
          title={introductionContent.title}
          title2={introductionContent.title2}
          text={introductionContent.text}
          text2={introductionContent.text2}
          src={introductionContent.src}
          alt={introductionContent.alt}
        />
      </div>
      <div
        className={`w-full scroll-section transition-all duration-700 ease-in-out ${opacities[3]}`}
      >
        <AvailableFeatures
          title={availableFeaturesContent.title}
          title2={availableFeaturesContent.title2}
          src={availableFeaturesContent.src}
          alt={availableFeaturesContent.alt}
          services={availableFeaturesContent.services}
          hospitalizationTypes={availableFeaturesContent.hospitalizationTypes}
        />
      </div>
      <div
        className={`w-full scroll-section transition-all duration-700 ease-in-out ${opacities[4]}`}
      >
        <Process
          title={ProcessContent.title}
          text={ProcessContent.text}
          src={ProcessContent.src}
          alt={ProcessContent.alt}
        />
      </div>
      <div
        className={`w-full scroll-section transition-all duration-700 ease-in-out ${opacities[5]}`}
      >
        <Advantages advantagesContent={advantagesContent} />
      </div>
      <div
        className={`w-full scroll-section transition-all duration-700 ease-in-out ${opacities[6]}`}
      >
        <AdvantagesExtend
          title={advantagesExtendContent.title}
          title2={advantagesExtendContent.title2}
          title3={advantagesExtendContent.title3}
          src={advantagesExtendContent.src}
          alt={advantagesExtendContent.alt}
          src2={advantagesExtendContent.src2}
          alt2={advantagesExtendContent.alt2}
        />
      </div>
      <div
        className={`w-full scroll-section transition-all duration-700 ease-in-out ${opacities[7]}`}
      >
        <Services
          mainTitle={ServicesContent.mainTitle}
          text={ServicesContent.text}
          text2={ServicesContent.text2}
          buttonText={ServicesContent.buttonText}
          href={ServicesContent.href}
          services={ServicesContent.services}
        />
      </div>
      <div
        className={`w-full scroll-section transition-all duration-700 ease-in-out ${opacities[8]}`}
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

export default Home;
