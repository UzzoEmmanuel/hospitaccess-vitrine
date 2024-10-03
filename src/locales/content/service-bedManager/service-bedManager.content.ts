import { CarouselCardContent } from '../../../components/containers/page-services/advantages/advantages';
import BannerHospitaccessServicePro from '../../../assets/images/page-services/hospitaccess-vitrine-banner-services-page.webp';

export const heroContent = {
  title: 'Gorem ipsum dolor sit',
  titel2: 'amet consectetur',
  text: 'Découvrez notre gestionnaire de lits, qui centralise admissions, transferts et sorties pour une coordination optimale entre les services.',
};

export const bannerContent = {
  src: BannerHospitaccessServicePro,
  alt: 'bannière de la section service bed manager d&apos;Hospit&apos;Access',
};

export const problematicContent = {
  mainTitle: 'Les problématiques que vous rencontrez sont',
  columns: [
    {
      title: 'Compléxité de visibilité disponible',
      text: "Voir l'état de vos lits qu'ils soient occupés ou vide est complexe et demande beaucoup de temps",
    },
    {
      title: 'Manque de coordination entre services',
      text: 'Les informations patients sont dispersées entre différents services, rendant la communication et la coordination entre les équipes médicales plus difficiles',
    },
    {
      title: 'Mauvaise gestion des ressources',
      text: "Mauvaise répartition des lits disponibles, avec certains services saturés et d'autres avec des lits vides.",
    },
    {
      title: 'Notification et alerte',
      text: 'Vous vous rendez compte trop tard que les mutuelles de vos patients sont arrivé à bout, et votre patient finis par payer des sommes astronomiques',
    },
    {
      title: 'Compléxité à placer des patients',
      text: 'Accepter ou non un patient vous prend beaucoup de temps avec vos équipes médicales',
    },
    {
      title: 'Aucunes statstiques',
      text: 'Faire vos statistiques vous prend un temps énorme',
    },
  ],
};

export const mainspringContent = {
  text: "Notre bed manager est conçu de A à Z avec vous afin de répondre au mieux à vos problématique. Nous concevons ce logiciel dans le but d'alléger votre charge mental dans le traitement des nouvelles demandes d'hospitalisations et de vous permettre d'un coup d'oeil de voir si toutes vos ressources sont bien organisées ",
};

export const advantagesContent: CarouselCardContent = {
  mainTitle: 'Avantage de notre gestionnaire de lit',
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
  title: 'Paramétrez vous aussi votre',
  titel2: ' bed manager',
  buttonText: 'Paramétrer',
  href: 'mailto:contact@hospitaccess.fr?subject=bedManager',
};
