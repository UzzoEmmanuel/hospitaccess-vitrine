import useScrollOpacity from '../../hooks/useScrollOpacity';
import { Hero } from '../../components/containers/common/hero/hero';
import { Banner } from '../../components/containers/page-team/banner/banner';
import { Us } from '../../components/containers/page-team/us/us';
import { Mainspring } from '../../components/containers/page-team/mainspring/mainspring';
import { References } from '../../components/containers/page-team/references/references';
import { ContactUs } from '../../components/containers/common/contact-us/contactUs';
import {
  heroContent,
  bannerContent,
  usContent,
  mainspringContent,
  referencesContent,
} from '../../locales/content/team/team.content';
import { contactUsContent } from '../../locales/content/common/contactUs.content';

const Team = () => {
  const opacities = useScrollOpacity(6, [0, 1]);

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
        <Us title={usContent.title} paragraphs={usContent.paragraphs} />
      </div>
      <div
        className={`w-full scroll-section transition-all duration-700 ease-in-out ${opacities[3]}`}
      >
        <Mainspring text={mainspringContent.text} />
      </div>
      <div
        className={`w-full scroll-section transition-all duration-700 ease-in-out ${opacities[4]}`}
      >
        <References mainTitle={referencesContent.mainTitle} columns={referencesContent.columns} />
      </div>

      <div
        className={`w-full scroll-section transition-all duration-700 ease-in-out ${opacities[5]}`}
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

export default Team;
