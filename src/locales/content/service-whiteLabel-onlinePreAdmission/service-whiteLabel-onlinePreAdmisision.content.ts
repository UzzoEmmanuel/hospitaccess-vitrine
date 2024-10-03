import { CarouselCardContent } from '../../../components/containers/page-services/advantages/advantages';
import BannerHospitaccessServicePro from '../../../assets/images/page-services/hospitaccess-vitrine-banner-services-page.webp';

export const heroContent = {
  title: 'Gorem ipsum dolor sit',
  titel2: 'amet consectetur',
  text: "Une marque blanche permet aux établissements de santé de proposer des produits ou services sous leur propre marque, sans avoir à développer eux-mêmes ces solutions. Grâce à ce modèle, vous pouvez offrir à vos patients des solutions innovantes et de qualité, tout en renforçant l'image de votre établissement.",
};

export const bannerContent = {
  src: BannerHospitaccessServicePro,
  alt: 'bannière de la section service marque blanche pré admission en ligne d&apos;Hospit&apos;Access',
};

export const problematicContent = {
  mainTitle: 'Les problématiques que vous rencontrez sont',
  columns: [
    {
      title: 'Prise de décision lente',
      text: "Vos patients s'entassent à l'accueil afin d'effectuer leur pré admission",
    },
    {
      title: 'Perte de compétitivité',
      text: 'Vos concurrents adoptent pour des solutions de pré admission en ligne',
    },
    {
      title: "Pas de solution d'aval",
      text: "Vous n'avez pas la possibilité d'anticiper les besoin de votre patient le jour de son hospitalisation",
    },
  ],
};

export const mainspringContent = {
  text: 'Nous concevons avec vous votre propre formulaire de pré admission en ligne qui sera disponible depuis votre site internet. Permettant un lien plus direct avec vos patients.',
};

export const advantagesContent: CarouselCardContent = {
  mainTitle: 'Les avantages',
  cards: [
    {
      title: 'Gain de temps',
      icon: 'Clock',
      textSegments: [
        { text: 'Formulaires numériques simplifiés,', isPrimary: false },
        { text: ' envoyés en un clic,', isPrimary: true },
        { text: ' sans attente téléphonique.', isPrimary: false },
        { text: 'numérisés et simplifiés', isPrimary: true },
      ],
    },
    {
      title: 'Organisation',
      icon: 'SquareStack',
      textSegments: [
        { text: "Accédez à l'ensemble de vos", isPrimary: false },
        { text: ' dossiers patients', isPrimary: true },
        { text: ' en un clic, avec', isPrimary: false },
        { text: " l'historique complet", isPrimary: true },
        { text: ' de chaque hospitalisation.', isPrimary: false },
        {
          text: ' Ré-hospitalisez',
          isPrimary: true,
        },
        {
          text: ' vos patients directement depuis les',
          isPrimary: false,
        },
        {
          text: ' dossiers enregistrés.',
          isPrimary: true,
        },
      ],
    },
    {
      title: 'Gain de temps',
      icon: 'Clock',
      textSegments: [
        { text: 'Les ', isPrimary: false },
        { text: 'formulaires de demande ', isPrimary: true },
        { text: 'sont désormais ', isPrimary: false },
        { text: 'numérisés et simplifiés.', isPrimary: true },
        {
          text: ' En un clic, la demande est envoyée directement au service et à la personne concernés, éliminant ainsi ',
          isPrimary: false,
        },
        { text: 'les attentes téléphoniques ', isPrimary: true },
        { text: 'prolongées.', isPrimary: false },
      ],
    },

    {
      title: 'Organisation',
      icon: 'SquareStack',
      textSegments: [
        { text: "Accédez à l'ensemble de vos", isPrimary: false },
        { text: ' dossiers patients', isPrimary: true },
        { text: " en un clic, avec l'", isPrimary: false },
        { text: 'historique complet', isPrimary: true },
        {
          text: ' de chaque hospitalisation.',
          isPrimary: false,
        },
        { text: ' Ré-hospitalisez', isPrimary: true },
        {
          text: ' vos patients directement depuis les ',
          isPrimary: false,
        },
        { text: 'dossiers enregistrés.', isPrimary: true },
      ],
    },
  ],
};

export const callToActionContent = {
  title: 'Paramétrez vous aussi votre formulaire de ',
  titel2: 'pré admission en ligne',
  buttonText: 'Paramétrer',
  href: 'contact@hospitaccess.fr?subject=whiteLabelOnlinePreAdmission',
};
