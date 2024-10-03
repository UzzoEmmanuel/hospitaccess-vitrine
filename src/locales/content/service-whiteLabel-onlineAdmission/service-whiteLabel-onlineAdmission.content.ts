import { CarouselCardContent } from '../../../components/containers/page-services/advantages/advantages';
import BannerHospitaccessServicePro from '../../../assets/images/page-services/hospitaccess-vitrine-banner-services-page.webp';

export const heroContent = {
  title: 'Gorem ipsum dolor sit',
  titel2: 'amet consectetur',
  text: "Une marque blanche permet aux établissements de santé de proposer des produits ou services sous leur propre marque, sans avoir à développer eux-mêmes ces solutions. Grâce à ce modèle, vous pouvez offrir à vos patients des solutions innovantes et de qualité, tout en renforçant l'image de votre établissement.",
};

export const bannerContent = {
  src: BannerHospitaccessServicePro,
  alt: 'bannière de la section service marque blanche admission en ligne d&apos;Hospit&apos;Access',
};

export const problematicContent = {
  mainTitle: 'Les problématiques que vous rencontrez sont',
  columns: [
    {
      title: 'Téléphone qui sonne',
      text: 'Vous êtes constamment dérangé par votre télépghone pou savoir si vous pouvez prendre en charge un patient',
    },
    {
      title: 'Manque de coordination entre services',
      text: "Vous n'avez pas de centralisation des demandes d'hospitalisation ce qui retarde le processus de traitement",
    },
    {
      title: 'Mail et fax',
      text: "Les médecins vous envoient les demandes par mail et fax ce qui pose probleme en terme de securité informations patient vis à vis de l'ars",
    },
    {
      title: 'Notification et alerte',
      text: 'Vous vous rendez compte trop tard que les mutuelles de vos patients sont arrivé à bout, et votre patient finis par payer des sommes astronomiques',
    },
  ],
};

export const mainspringContent = {
  text: "Nous concevons avec vous votre propre formulaire d'admission en ligne qui sera disponible depuis votre site internet. Permettant en lien plus direct avec vos médecins.",
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
  title: "Paramétrez vous aussi votre formulaire d'",
  titel2: 'admission en ligne',
  buttonText: 'Paramétrer',
  href: 'contact@hospitaccess.fr?subject=WhiteLabelOnlineAdmission',
};
