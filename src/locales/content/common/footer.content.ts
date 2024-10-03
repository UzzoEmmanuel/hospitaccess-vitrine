import { Linkedin } from 'lucide-react';
import HospitAccessLogoFullDark from '../../../assets/images/hospitaccess-logos/hospitaccess-vitrine-logo-full-dark.webp';
import HospitAccessLogoSolid from '../../../assets/images/hospitaccess-logos/hospitaccess-vitrine-logo-solid.webp';

export const footerContent = {
  title: 'Nous rejoindre',
  title2: 'Contact',
  title3: 'Politique',
  srOnly: 'Footer',
  srOnly2: "Hospit'Access-vitrine",
  src: HospitAccessLogoFullDark,
  alt: "logo grand format Hospit'Access",
  src2: HospitAccessLogoSolid,
  alt2: "logo petit format Hospit'Access",
  href: '/',
  contact: [
    { name: 'contact@hospitaccess.fr', href: 'mailto:contact@hospitaccess.fr' },
    { name: '04 12 34 56 78', href: 'tel:+33412345678' },
  ],
  socialMedia: [
    {
      logo: Linkedin,
      href: 'https://www.linkedin.com/company/hospit-access/',
      srOnly: 'Linkedin link',
    },
  ],
  registration: [
    { name: "S'inscrire", href: 'https://www.hospitaccess.fr/' },
    { name: 'Se connecter', href: 'https://www.hospitaccess.fr/login' },
  ],
  policy: [
    { name: 'CGU', href: 'https://www.hospitaccess.fr/hospitaccessInformationsPublic#condition' },
    {
      name: 'Mentions légales',
      href: 'https://www.hospitaccess.fr/hospitaccessInformationsPublic#mention',
    },
    {
      name: 'Politique de protection de données',
      href: 'https://www.hospitaccess.fr/hospitaccessInformationsPublic#policy',
    },
  ],
};
