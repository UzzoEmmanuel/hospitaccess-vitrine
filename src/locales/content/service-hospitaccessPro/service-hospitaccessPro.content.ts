import { CarouselCardContent } from '../../../components/containers/page-services/advantages/advantages';
import BannerHospitaccessServicePro from '../../../assets/images/page-services/hospitaccess-vitrine-banner-services-page.webp';

export const heroContent = {
  title: 'Gorem ipsum dolor sit',
  titel2: 'amet consectetur',
  text: 'Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.',
};

export const bannerContent = {
  src: BannerHospitaccessServicePro,
  alt: 'bannière de la section service pro d&apos;Hospit&apos;Access',
};

export const problematicContent = {
  mainTitle: 'Les problématiques que vous rencontrez sont',
  columns: [
    {
      title: "Processus d'admission lourd",
      text: 'Écrire un bon argument',
    },
    {
      title: 'Manque de coordination entre services',
      text: 'Les informations patients sont dispersées entre différents services, rendant la communication et la coordination entre les équipes médicales plus difficiles',
    },
    {
      title: 'Mauvaise visibilité',
      text: 'Pas de possibilité de promouvoir votre établissement ou des projets au sein de la communauté médicale en ligne',
    },
    {
      title: 'Mauvaise communication',
      text: 'Manque de lien direct avec la médecine de ville',
    },
    {
      title: 'Manque de lien direct avec la médecine de ville',
      text: "Complication à trouver des lits, des heures d'attentes au téléphone pour avoir le bon interlocuteur",
    },
    {
      title: 'Mauvaise transparence et suivi',
      text: 'Pour que tout le monde soit au courant il faut passer 15 appels',
    },
    {
      title: 'Aucunes statstiques',
      text: 'Faire vos statistiques vous prend un temps énorme',
    },
  ],
};

export const mainspringContent = {
  text: "Notre plateforme Hospit'Access a était conçu pour alléger les processus administratifs lourd et centraliser l'information pour une meilleur coordination entre service.",
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
  title: "N'attendez plus, optez pour une plateforme d'hospitalisation en ligne et ",
  titel2: 'inscrivez-vous gratuitement',
  buttonText: "S'inscrire gratuitement",
  href: 'https://www.hospitaccess.fr/',
};
