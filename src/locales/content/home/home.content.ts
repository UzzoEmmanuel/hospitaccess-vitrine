import BgHero1 from '../../../assets/images/page-home/hospitaccess-vitrine-bg-hero-1.webp';
import BgHero2 from '../../../assets/images/page-home/hospitaccess-vitrine-bg-hero-2.webp';
import BgIntroduction1 from '../../../assets/images/page-home/hospitaccess-vitrine-bg-introduction-1.webp';
import BgAvailabelFeature from '../../../assets/images/page-home/hospitaccess-vitrine-bg-available-features.webp';
import FlowChart from '../../../assets/images/page-home/hospitaccess-vitrine-diagramme-de-flux.webp';
import BgAdvantagesExtend1 from '../../../assets/images/page-home/hospitaccess-vitrine-bg-advantages-extend-1.webp';
import BgAdvantagesExtend2 from '../../../assets/images/page-home/hospitaccess-vitrine-bg-advantages-extend-2.webp';
import BgAdvantages1 from '../../../assets/images/page-home/hospitaccess-vitrine-bg-advantages-1.webp';

import { CarouselCardContent } from '../../../components/containers/page-home/advantages/advantages';
import { BigCarouselCardContent } from '../../../components/containers/page-home/partners/partners';

import BgPartners from '../../../assets/images/page-home/hospitaccess-vitrine-bg-partners.webp';
import LogoClinea from '../../../assets/images/partners/hospitaccess-vitrine-logo-clinea.webp';
import LogoInicea from '../../../assets/images/partners/hospitaccess-vitrine-logo-inicea.webp';
import LogoKantys from '../../../assets/images/partners/hospitaccess-vitrine-logo-kantys.webp';
import LogoOrpea from '../../../assets/images/partners/hospitaccess-vitrine-logo-orpea.webp';
import EstablishmentTroisSollies from '../../../assets/images/establishments/hospitaccess-vitrine-establishment-1.webp';
import EstablishmentLesCollinesDuRevest from '../../../assets/images/establishments/hospitaccess-vitrine-establishment-2.webp';
import EstablishmentLaBastideDeCallian from '../../../assets/images/establishments/hospitaccess-vitrine-establishment-3.webp';
import EstablishmentCliniqueLeGolfe from '../../../assets/images/establishments/hospitaccess-vitrine-establishment-4.webp';
import EstablishmentLesOliviers from '../../../assets/images/establishments/hospitaccess-vitrine-establishment-5.webp';
import EstablishmentBessillion from '../../../assets/images/establishments/hospitaccess-vitrine-establishment-6.webp';
import EstablishmentValfleur from '../../../assets/images/establishments/hospitaccess-vitrine-establishment-7.webp';
import EstablishmentMontsToulonnais from '../../../assets/images/establishments/hospitaccess-vitrine-establishment-8.webp';
import EstablishmentValmante from '../../../assets/images/establishments/hospitaccess-vitrine-establishment-9.webp';
import EstablishmentLaSalette from '../../../assets/images/establishments/hospitaccess-vitrine-establishment-10.webp';
import EstablishmentValDuFenouillet from '../../../assets/images/establishments/hospitaccess-vitrine-establishment-11.webp';
import EstablishmentLaProvencale from '../../../assets/images/establishments/hospitaccess-vitrine-establishment-12.webp';
import EstablishmentLaCheneviere from '../../../assets/images/establishments/hospitaccess-vitrine-establishment-13.webp';
import EstablishmentMadeleineRemuzat from '../../../assets/images/establishments/hospitaccess-vitrine-establishment-14.webp';
import EstablishmentHeliadeSante from '../../../assets/images/establishments/hospitaccess-vitrine-establishment-15.webp';
import EstablishmentMontfleuriSaintRoch from '../../../assets/images/establishments/hospitaccess-vitrine-establishment-16.webp';
import EstablishmentMediazur from '../../../assets/images/establishments/hospitaccess-vitrine-establishment-17.webp';
import EstablishmentValdonne from '../../../assets/images/establishments/hospitaccess-vitrine-establishment-18.webp';
import EstablishmentLesOliviersInicea from '../../../assets/images/establishments/hospitaccess-vitrine-establishment-19.webp';

export const heroContent = {
  title: 'Gérez, accompagnez et suivez vos patients',
  title2: "de la consultation jusqu'à l'hospitalisation !",
  text: 'La solution complète pour faciliter et optimiser le parcours des patients entre médecins et établissements de santé.',
  buttonText: "S'inscrire gratuitement",
  href: 'https://www.hospitaccess.fr/',
  src: BgHero2,
  alt: "fond d'écran 3 de la section hero d'Hospit'Access",
  src2: BgHero1,
  alt2: "Ordinateur et smartphone avec l'application Hospit'Access",
};

export const partnersContent: BigCarouselCardContent = {
  mainTitle: 'Ils nous font confiance',
  src: BgPartners,
  alt: "fond d'écran de la section patners d'Hospit'Access",
  text: 'Spécialité',
  cards: [
    {
      title: 'KANTYS - Trois Solliès',
      address: 'Chemin de Guiran 83210 Solliès-Toucas',
      speciality: [{ text: 'Psychiatrie' }],
      src: EstablishmentTroisSollies,
      alt: 'établissement partenaire: Trois Solliès',
    },
    {
      title: 'ORPEA - Les Collines Du Revest',
      address: '1251 Route General De Gaulle 83200 Le Revest-les-Eaux',
      speciality: [{ text: 'Psychiatrie' }, { text: 'SMR' }],
      src: EstablishmentLesCollinesDuRevest,
      alt: 'établissement partenaire: Les Collines Du Revest',
    },
    {
      title: 'ORPEA - La Bastide De Callian',
      address: 'Chemin des Moulins 83440 Callian',
      speciality: [{ text: 'Psychiatrie' }],
      src: EstablishmentLaBastideDeCallian,
      alt: 'établissement partenaire: La Bastide De Callian',
    },
    {
      title: 'INICEA - Clinique le Golfe',
      address: 'Rue du Gaou 83310 Cogolin',
      speciality: [{ text: 'Psychiatrie' }],
      src: EstablishmentCliniqueLeGolfe,
      alt: 'établissement partenaire: Clinique le Golfe',
    },
    {
      title: 'ORPEA - Les Oliviers',
      address: '83830 Callas 83830 Callas',
      speciality: [{ text: 'SMR' }],
      src: EstablishmentLesOliviers,
      alt: 'établissement partenaire: Les Oliviers',
    },
    {
      title: 'ORPEA - Bessillon',
      address: 'Avenue de Verdun 83300 Draguignan',
      speciality: [{ text: 'SMR' }],
      src: EstablishmentBessillion,
      alt: 'établissement partenaire: Bessillon',
    },
    {
      title: 'JCM Santé - Valfleur',
      address: '965 Route Enco De Botte 13190 Allauch',
      speciality: [{ text: 'Psychiatrie' }],
      src: EstablishmentValfleur,
      alt: 'établissement partenaire: Valfleur',
    },
    {
      title: 'CLINEA - Monts Toulonnais',
      address: '9 Rue Henri Matisse 83100 Toulon',
      speciality: [{ text: 'SMR' }],
      src: EstablishmentMontsToulonnais,
      alt: 'établissement partenaire: Monts Toulonnais',
    },
    {
      title: 'CLINEA - Valmante',
      address: '100 Traverse De La Gouffonne 13009 Marseille',
      speciality: [{ text: 'SMR' }],
      src: EstablishmentValmante,
      alt: 'établissement partenaire: Valmante',
    },
    {
      title: 'CLINEA - La salette',
      address: '18 Traverse de la Salette 13190 Marseille',
      speciality: [{ text: 'SMR' }],
      src: EstablishmentLaSalette,
      alt: 'établissement partenaire: La salette',
    },
    {
      title: 'INICEA - Val Du Fenouillet',
      address: 'Rue du Cinsault 83260 La Crau',
      speciality: [{ text: 'Psychiatrie' }],
      src: EstablishmentValDuFenouillet,
      alt: 'établissement partenaire: Val Du Fenouillet',
    },
    {
      title: 'CLINEA - La provençale',
      address: 'Route des Camoins 13011 Marseille',
      speciality: [{ text: 'SMR' }],
      src: EstablishmentLaProvencale,
      alt: 'établissement partenaire: La provençale',
    },
    {
      title: 'CLINEA - La chenevière',
      address: '533 Avenue Berty Albrecht 83700 Saint-Raphaël',
      speciality: [{ text: 'SMR' }],
      src: EstablishmentLaCheneviere,
      alt: 'établissement partenaire: La chenevière',
    },
    {
      title: 'CLINEA - Clinique Madeleine Remuzat',
      address: '515 Rue Saint-Pierre 13012 Marseille',
      speciality: [{ text: 'SMR' }],
      src: EstablishmentMadeleineRemuzat,
      alt: 'établissement partenaire: Clinique Madeleine Remuzat',
    },
    {
      title: 'HELIADES SANTE',
      address: '40 Rue Roland Garros 83600 Fréjus',
      speciality: [{ text: 'SMR' }],
      src: EstablishmentHeliadeSante,
      alt: 'établissement partenaire: HELIADES SANTE',
    },
    {
      title: 'Montfleuri Saint Roch',
      address: '160 Route des Camoins 13011 Marseille',
      speciality: [{ text: 'Psychiatrie' }],
      src: EstablishmentMontfleuriSaintRoch,
      alt: 'établissement partenaire: Montfleuri Saint Roch',
    },
    {
      title: 'Clinique Mediazur',
      address: '1100 Avenue De La Sainte-baume 13720 La Bouilladisse',
      speciality: [{ text: 'Psychiatrie' }],
      src: EstablishmentMediazur,
      alt: 'établissement partenaire: Clinique Mediazur',
    },
    {
      title: 'INICEA - Valdonne',
      address: 'Avenue Elie Garro 13124 Peypin',
      speciality: [{ text: 'SMR' }],
      src: EstablishmentValdonne,
      alt: 'établissement partenaire: Valdonne',
    },
    {
      title: 'INICEA - Les Oliviers',
      address: 'Avenue du Cours 13610 Le Puy-Sainte-Réparade',
      speciality: [{ text: 'SMR' }],
      src: EstablishmentLesOliviersInicea,
      alt: 'établissement partenaire: Les Oliviers',
    },
  ],
  partners: [
    {
      src: LogoClinea,
      alt: 'Logo de Clinéa',
    },
    {
      src: LogoInicea,
      alt: 'Logo de Inicea',
    },
    {
      src: LogoKantys,
      alt: 'Logo de Kantys',
    },
    {
      src: LogoOrpea,
      alt: 'Logo de Orpea',
    },
  ],
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

export const introductionContent = {
  mainTitle: 'Vos premiers pas chez nous',
  title: "Plateforme d'hospitalisation en ligne",
  title2: 'Motivation du projet',
  text: "Hospit'Access est une plateforme d'hospitalisation en ligne mettant en relation les médecins de villes, les services hospitalier et les urgences avec les établissements de santé afin de fluidifier la prise en charge des patients.",
  text2:
    "Notre principale motivation réside dans la résolution des problèmes complexes liés au processus d'hospitalisation des patients. Nous aspirons à remédier aux lourdeurs administratives qui entravent souvent ce processus, ainsi qu'à corriger les erreurs d'orientation vers des établissements inadéquats. Cette démarche est motivée par un besoin criant d'améliorer l'efficacité et la qualité des soins prodigués aux patients, en garantissant une prise en charge appropriée et efficiente dès l'admission.",
  src: BgIntroduction1,
  alt: "fond d'écran 1 de la section d'introduction d'Hospit'Access",
};

export const availableFeaturesContent = {
  title: 'Services disponibles',
  title2: "Types d'hospitalisation disponibles",
  src: BgAvailabelFeature,
  alt: "fond d'écran de la section de services et types d'hospitalisation disponibles d'Hospit'Access",
  services: [
    {
      title: 'MCO',
    },
    {
      title: 'SMR',
    },
    {
      title: 'Maison de retraite',
    },
    {
      title: 'Psychiatrie',
    },
  ],
  hospitalizationTypes: [
    {
      title: 'Hospitalisation complète',
    },
    {
      title: 'HDJ',
    },
    {
      title: 'HAD',
    },
    {
      title: 'Hospitalisation de nuit',
    },
    {
      title: 'Soins non programmés',
    },
  ],
};

export const ProcessContent = {
  title: 'Processus de fonctionnement',
  text: 'Réseau sécurisé',
  src: FlowChart,
  alt: "Diagramme de flux d'Hospit'Access",
};

export const advantagesContent: CarouselCardContent = {
  mainTitle: 'Les avantages',
  src: BgAdvantages1,
  alt: "fond d'écran de la section advantages d'Hospit'Access",
  cards: [
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
        {
          text: 'Communiquez facilement avec les bons interlocuteurs grâce à notre ',
          isPrimary: false,
        },
        { text: 'chat en direct.', isPrimary: true },
      ],
    },
    {
      title: 'Organisation',
      icon: 'SquareStack',
      textSegments: [
        { text: 'Soyez alerté par e-mail et sur votre téléphone ', isPrimary: true },
        {
          text: "grâce à nos notifications. Il n'est pas nécessaire de rester connecté à la plateforme.",
          isPrimary: false,
        },
      ],
    },
    {
      title: 'Gain de temps',
      icon: 'Clock',
      textSegments: [
        {
          text: 'Vos patients et vous ',
          isPrimary: false,
        },
        { text: "pouvez suivre l'évolution de la demande ", isPrimary: true },
        {
          text: "en temps réel. La date et le lieu de l'hospitalisation sont communiqués dès l'acceptation de la demande.",
          isPrimary: false,
        },
      ],
    },
    {
      title: 'Organisation',
      icon: 'SquareStack',
      textSegments: [
        {
          text: 'Nous nous connectons à vos outils informatiques quotidiens pour ',
          isPrimary: false,
        },
        { text: 'transférer automatiquement les informations ', isPrimary: true },
        {
          text: 'des patients. (sur demande)',
          isPrimary: false,
        },
      ],
    },
    {
      title: 'Gain de temps',
      icon: 'Clock',
      textSegments: [
        {
          text: 'Toutes vos données patients sont protégées (HDS), ',
          isPrimary: false,
        },
        { text: 'cryptées et sécurisées.', isPrimary: true },
      ],
    },
    {
      title: 'Organisation',
      icon: 'SquareStack',
      textSegments: [
        { text: "Ajoutez l'ensemble de votre équipe médicale ", isPrimary: true },
        {
          text: 'afin que chacun puisse consulter les demandes et les dossiers patients.',
          isPrimary: false,
        },
      ],
    },
  ],
};

export const advantagesExtendContent = {
  title: 'Simplifiez vos tâches administratives',
  title2: 'chronophage et concentrez-vous uniquement sur les',
  title3: 'soins de vos patients.',
  src: BgAdvantagesExtend1,
  alt: "fond d'écran 1 de la section advantages d'Hospit'Access",
  src2: BgAdvantagesExtend2,
  alt2: "fond d'écran 2 de la section advantages d'Hospit'Access",
};

export const ServicesContent = {
  mainTitle: 'Nos services',
  text: 'Ce service concerne',
  text2: '* Nous donnons suite à votre demande dans la journée',
  buttonText: 'Demander une démo',
  href: 'mailto:contact@hospitaccess.fr?subject=Demande de démo',
  services: [
    {
      title: "Hospit'Access Pro",
      description: "Plateforme d'hospitalisation en ligne",
      color: 'bg-backgroundFourthSpecialColor' as const,
      href: '/service/hospit-access-pro',
      affected: [{ title: 'Médecin libéral' }, { title: 'Établissement de santé' }],
    },
    {
      title: 'Marque blanche admission en ligne',
      description:
        "Créer votre propre formulaire d'admission en ligne disponible sur votre site internet",
      color: 'bg-backgroundFifthSpecialColor' as const,
      href: '/service/white-label/online-admission',
      affected: [{ title: 'Établissement de santé' }],
    },
    {
      title: 'Bed manager',
      description: 'Gestionnaire de lit',
      color: 'bg-backgroundthirdSpecial' as const,
      href: '/service/bed-manager',
      affected: [{ title: 'Établissement de santé' }],
    },
    {
      title: 'Marque blanche pré admission en ligne',
      description:
        'Créer votre propre dossier de pré admission en ligne disponible sur votre site internet',
      color: 'bg-backgroundFifthSpecialColor' as const,
      href: '/service/white-label/online-pre-admission',
      affected: [{ title: ' Établissement de santé' }],
    },
  ],
};
