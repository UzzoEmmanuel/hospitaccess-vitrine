import HospitAccessLogoFull from '../../../assets/images/hospitaccess-logos/hospitaccess-vitrine-logo-full.webp';
import HospitAccessLogoSolid from '../../../assets/images/hospitaccess-logos/hospitaccess-vitrine-logo-solid.webp';

export const headerContent = {
  srOnly: "Hospit'Access-vitrine",
  srOnly2: 'Open main menu',
  srOnly3: 'Close main menu',
  src: HospitAccessLogoFull,
  alt: "logo grand format Hospit'Access",
  src2: HospitAccessLogoSolid,
  alt2: "logo petit format Hospit'Access",
  href: '/',
  buttonText: 'Nos services',
  teamLink: {
    text: 'Notre équipe',
    href: '/team',
  },
  services: [
    {
      text: "Hospit'Access pro",
      href: '/service/hospit-access-pro',
    },
    {
      text: 'Marque blanche admission en ligne',
      href: '/service/white-label/online-admission',
    },
    {
      text: 'Marque blanche pré-admission en ligne',
      href: '/service/white-label/online-pre-admission',
    },
    {
      text: 'Bed manager',
      href: '/service/bed-manager',
    },
  ],
  ctaButtons: {
    signUp: {
      text: "S'inscrire",
      href: 'https://www.hospitaccess.fr/',
    },
    login: {
      text: 'Se connecter',
      href: 'https://www.hospitaccess.fr/login',
    },
  },
};
