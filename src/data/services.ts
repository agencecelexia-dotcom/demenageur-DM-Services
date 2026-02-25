import type { Service } from "@/types";
import { clientConfig } from "@/config/client.config";

const c = clientConfig;

export const services: Service[] = [
  {
    id: "s1",
    slug: "demenagement-particulier",
    title: "Déménagement Particulier",
    shortDescription:
      `Déménagement résidentiel à ${c.VILLE}, ${c.COMMUNE_1} et dans toute l'agglomération lyonnaise. Prise en charge complète de A à Z.`,
    fullDescription:
      `Votre déménagement mérite un accompagnement professionnel et humain. ${c.NOM_ENTREPRISE} prend en charge l'intégralité de votre déménagement à ${c.VILLE} et dans le ${c.DEPARTEMENT} : protection des meubles, démontage, chargement, transport sécurisé, déchargement et remontage. Appartement, maison, studio — nous nous adaptons à chaque situation.`,
    icon: "Home",
    image: "/images/services/demenagement-residentiel.png",
    features: [
      "Visite technique gratuite et devis détaillé",
      "Protection des meubles et sols",
      "Démontage et remontage du mobilier",
      "Équipe formée et expérimentée",
      "Camions équipés et adaptés",
      "Assurance tous risques incluse",
    ],
    price: "Devis gratuit",
    duration: "1 à 3 jours selon volume",
    featured: true,
    order: 1,
  },
  {
    id: "s2",
    slug: "demenagement-entreprise",
    title: "Déménagement Entreprise",
    shortDescription:
      `Déménagement de bureaux et locaux professionnels à ${c.VILLE} et ${c.COMMUNE_1}. Intervention rapide pour minimiser l'interruption d'activité.`,
    fullDescription:
      `${c.NOM_ENTREPRISE} accompagne les entreprises dans leurs déménagements de bureaux, locaux commerciaux et ateliers à ${c.VILLE} et dans toute la région ${c.REGION}. Nous intervenons en dehors des heures ouvrées si nécessaire pour limiter l'impact sur votre activité. Mobilier, matériel informatique, archives — tout est géré avec méthode.`,
    icon: "Building2",
    image: "/images/services/demenagement-entreprise.png",
    features: [
      `Intervention possible en soirée et week-end`,
      "Déménagement de mobilier de bureau et matériel IT",
      "Transfert d'archives et documents confidentiels",
      "Étiquetage et plan de réimplantation",
      "Coordination avec vos équipes",
      "Minimisation du temps d'arrêt d'activité",
    ],
    price: "Devis sur mesure",
    duration: "1 à 5 jours selon surface",
    featured: true,
    order: 2,
  },
  {
    id: "s3",
    slug: "demenagement-longue-distance",
    title: "Déménagement Longue Distance",
    shortDescription:
      "Vous quittez ou rejoignez la région lyonnaise ? Nous assurons votre déménagement partout en France avec le même soin.",
    fullDescription:
      `Que vous quittiez ${c.VILLE} pour une autre région ou que vous arriviez dans l'agglomération lyonnaise, ${c.NOM_ENTREPRISE} organise votre déménagement longue distance. Trajet sécurisé, planning maîtrisé, interlocuteur unique du début à la fin. Nous couvrons toute la France.`,
    icon: "MapPin",
    image: "/images/services/demenagement-longue-distance.jpeg",
    features: [
      "Couverture nationale France entière",
      "Camions dédiés à votre déménagement",
      "Planning et itinéraire optimisés",
      "Suivi personnalisé de votre dossier",
      "Emballage renforcé pour le transport longue distance",
      "Assurance transport incluse",
    ],
    price: "Devis sur mesure",
    duration: "2 à 5 jours selon distance",
    featured: false,
    order: 3,
  },
  {
    id: "s4",
    slug: "garde-meuble-stockage",
    title: "Garde-Meuble & Stockage",
    shortDescription:
      `Besoin de stocker vos affaires temporairement ? Notre garde-meuble sécurisé à ${c.VILLE} vous accueille pour la durée de votre choix.`,
    fullDescription:
      `${c.NOM_ENTREPRISE} met à votre disposition un espace de garde-meuble sécurisé à ${c.VILLE}. Que ce soit entre deux logements, pendant des travaux ou pour désencombrer, vos biens sont stockés dans des conditions optimales : local sec, ventilé, sous vidéosurveillance et accessible sur rendez-vous.`,
    icon: "Warehouse",
    image: "/images/services/garde-meuble-stockage.png",
    features: [
      "Local sécurisé et vidéosurveillé",
      "Stockage à la semaine, au mois ou à l'année",
      "Conditions de conservation optimales",
      "Accès sur rendez-vous",
      "Assurance stockage incluse",
      `Situé à ${c.VILLE}, facilement accessible`,
    ],
    price: "À partir de 49€/mois",
    duration: "Sans engagement de durée",
    featured: true,
    order: 4,
  },
  {
    id: "s5",
    slug: "emballage-demenagement",
    title: "Emballage & Déballage",
    shortDescription:
      "Pas le temps d'emballer ? Notre équipe s'occupe de tout : cartons, protection, étiquetage — et déballage à l'arrivée si vous le souhaitez.",
    fullDescription:
      `Le service d'emballage de ${c.NOM_ENTREPRISE} vous libère d'une tâche chronophage et stressante. Nos équipes emballent vos affaires avec soin : vaisselle, objets fragiles, vêtements, livres, électroménager. Chaque carton est étiqueté par pièce pour faciliter le déballage. Nous fournissons tout le matériel : cartons, papier bulle, film étirable, housses.`,
    icon: "Package",
    image: "/images/services/emballage-manutention.png",
    features: [
      "Fourniture de cartons et matériel d'emballage",
      "Emballage professionnel des objets fragiles",
      "Étiquetage par pièce et par contenu",
      "Protection du mobilier (couvertures, housses)",
      "Service de déballage à l'arrivée",
      "Récupération des cartons après déménagement",
    ],
    price: "Devis sur mesure",
    duration: "1 à 2 jours selon volume",
    featured: false,
    order: 5,
  },
  {
    id: "s6",
    slug: "montage-demontage-meubles",
    title: "Montage & Démontage",
    shortDescription:
      `Démontage de vos meubles au départ, remontage à l'arrivée. Nos équipes à ${c.VILLE} interviennent avec soin et efficacité.`,
    fullDescription:
      `Armoires, lits, cuisines, bureaux : nos équipes assurent le démontage soigné de votre mobilier avant le transport et le remontage complet dans votre nouveau logement. Ce service est inclus ou disponible en option selon la formule choisie. Nous intervenons à ${c.VILLE}, ${c.COMMUNE_1} et dans tout le ${c.DEPARTEMENT}.`,
    icon: "Wrench",
    image: "/images/services/emballage-manutention.png",
    features: [
      "Démontage soigné de tous types de meubles",
      "Remontage à l'identique dans le nouveau logement",
      "Outillage professionnel complet",
      "Protection des éléments démontés",
      "Gestion de la visserie et quincaillerie",
      `Intervention à ${c.VILLE} et agglomération`,
    ],
    price: "Inclus ou en option",
    duration: "Selon volume de mobilier",
    featured: false,
    order: 6,
  },
];
