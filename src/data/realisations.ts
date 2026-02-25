import type { Realisation } from "@/types";
import { clientConfig } from "@/config/client.config";

const c = clientConfig;

export const realisations: Realisation[] = [
  {
    id: "r1",
    slug: "demenagement-appartement-haussmannien-lyon",
    title: `Déménagement d'un appartement haussmannien — Lyon 6e`,
    category: "local",
    client: "Famille Bertrand",
    origin: `${c.COMMUNE_1} 6e`,
    destination: c.VILLE,
    volume: "65 m³",
    distance: "4 km",
    duration: "1 journée",
    team: "4 déménageurs + chef d'équipe",
    challenge:
      "Appartement au 4e étage sans ascenseur, escalier étroit en colimaçon, mobilier ancien de grande valeur incluant un piano droit et une bibliothèque en chêne massif.",
    solution:
      "Utilisation d'un monte-meuble pour les pièces volumineuses, protection renforcée du mobilier ancien avec couvertures et film mousse, démontage minutieux de la bibliothèque sur place.",
    result:
      `Déménagement réalisé en une journée sans aucune rayure ni dommage. La famille a particulièrement apprécié le soin apporté au piano et au mobilier ancien. Recommandation immédiate auprès de leur entourage.`,
    featuredImage: "/images/realisations/appartement-haussmannien.png",
    images: ["/images/realisations/appartement-haussmannien.png"],
    featured: true,
    date: "2024-11-10",
    tags: ["haussmannien", "piano", "sans ascenseur", "Lyon"],
  },
  {
    id: "r2",
    slug: "transfert-bureaux-startup-villeurbanne",
    title: `Transfert de bureaux — Startup tech à ${c.VILLE}`,
    category: "entreprise",
    client: `Startup tech ${c.VILLE}`,
    origin: `${c.COMMUNE_1} 3e`,
    destination: `${c.VILLE} — Tonkin`,
    volume: "40 m³",
    distance: "6 km",
    duration: "1 week-end",
    team: "3 déménageurs + coordinatrice",
    challenge:
      "Déménagement de 25 postes de travail avec matériel informatique sensible (serveurs, écrans, PC portables), le tout en un week-end pour ne pas interrompre l'activité le lundi.",
    solution:
      "Intervention le samedi pour le démontage, emballage et chargement. Livraison et réinstallation le dimanche. Étiquetage par poste de travail pour une réimplantation à l'identique.",
    result:
      "Les 25 collaborateurs ont retrouvé leur poste opérationnel lundi matin à 9h. Zéro casse, zéro perte de données. La startup a signé un contrat-cadre pour ses futurs besoins.",
    featuredImage: "/images/realisations/cabinet-architectes.png",
    images: ["/images/realisations/cabinet-architectes.png"],
    featured: true,
    date: "2024-09-14",
    tags: ["entreprise", "bureaux", "informatique", "week-end"],
  },
  {
    id: "r3",
    slug: "demenagement-longue-distance-lyon-paris",
    title: `Déménagement longue distance — ${c.COMMUNE_1} → Paris`,
    category: "international",
    client: "M. et Mme Leclerc",
    origin: `${c.COMMUNE_1} 7e`,
    destination: "Paris 11e",
    volume: "55 m³",
    distance: "465 km",
    duration: "2 jours",
    team: "4 déménageurs + chauffeur",
    challenge:
      "Déménagement d'une maison familiale vers un appartement parisien au 5e étage avec ascenseur étroit. Volume important incluant une collection de livres anciens et un mobilier de famille fragile.",
    solution:
      `Chargement jour 1 à ${c.COMMUNE_1} avec protection spéciale des livres anciens (cartons renforcés, calage individuel). Route de nuit. Livraison jour 2 à Paris avec monte-meuble pour les pièces hors gabarit ascenseur.`,
    result:
      `Livraison et installation complètes en 2 jours. Les clients ont été impressionnés par le soin apporté aux livres anciens : aucun ouvrage abîmé. Ils recommandent ${c.NOM_ENTREPRISE} sur Google.`,
    featuredImage: "/images/realisations/demenagement-canada.png",
    images: ["/images/realisations/demenagement-canada.png"],
    featured: true,
    date: "2024-08-22",
    tags: ["longue distance", "Paris", "livres anciens", "monte-meuble"],
  },
  {
    id: "r4",
    slug: "demenagement-cabinet-medical-villeurbanne",
    title: `Déménagement d'un cabinet médical — ${c.VILLE}`,
    category: "entreprise",
    client: "Cabinet du Dr Martin",
    origin: `${c.VILLE} — Charpennes`,
    destination: `${c.VILLE} — Gratte-Ciel`,
    volume: "30 m³",
    distance: "2 km",
    duration: "1 journée",
    team: "3 déménageurs + chef d'équipe",
    challenge:
      "Matériel médical sensible et coûteux, archives patients confidentielles, et obligation de rouvrir le cabinet dès le lendemain pour ne pas annuler les rendez-vous.",
    solution:
      "Emballage spécifique du matériel médical avec mousses et caisses sur mesure. Transport des archives dans des bacs scellés. Intervention dès 6h pour terminer avant 18h.",
    result:
      "Cabinet opérationnel le lendemain à 8h. Aucun rendez-vous annulé. Le Dr Martin a recommandé DM Services à trois confrères du quartier.",
    featuredImage: "/images/realisations/techflow-startup.png",
    images: ["/images/realisations/techflow-startup.png"],
    featured: false,
    date: "2024-10-18",
    tags: ["médical", "professionnel", "confidentiel", "Villeurbanne"],
  },
  {
    id: "r5",
    slug: "demenagement-studio-etudiant-lyon",
    title: `Déménagement étudiants — 12 studios en une journée, ${c.COMMUNE_1}`,
    category: "longue-distance",
    client: "Résidence étudiante Les Arches",
    origin: `${c.COMMUNE_1} 8e`,
    destination: `${c.COMMUNE_1} 7e et ${c.VILLE}`,
    volume: "60 m³ (total)",
    distance: "Intra-agglomération",
    duration: "1 journée",
    team: "6 déménageurs + 2 chauffeurs",
    challenge:
      `Organiser le déménagement simultané de 12 studios étudiants vers des destinations différentes dans l'agglomération lyonnaise, le tout en une seule journée de début septembre.`,
    solution:
      "Planification par créneaux horaires, deux camions en rotation, équipes de 3 déménageurs par camion. Chaque étudiant disposait d'un créneau de 45 minutes pour le chargement.",
    result:
      "12/12 déménagements réalisés dans la journée. La résidence a renouvelé le partenariat pour l'année suivante.",
    featuredImage: "/images/realisations/famille-rousseau.png",
    images: ["/images/realisations/famille-rousseau.png"],
    featured: false,
    date: "2024-07-11",
    tags: ["étudiants", "volume", "logistique", "Lyon"],
  },
  {
    id: "r6",
    slug: "demenagement-villa-caluire",
    title: `Déménagement d'une villa — ${c.COMMUNE_2} → Annecy`,
    category: "local",
    client: "Famille Dubois",
    origin: c.COMMUNE_2,
    destination: "Annecy",
    volume: "85 m³",
    distance: "145 km",
    duration: "2 jours",
    team: "5 déménageurs + chef d'équipe",
    challenge:
      "Villa de 180 m² sur 3 niveaux avec garage encombré, cave, et un jacuzzi extérieur à démonter et transporter. Accès étroit au nouveau logement en pente.",
    solution:
      `Visite technique préalable des deux sites. Jour 1 : emballage complet, démontage du jacuzzi par un technicien spécialisé, chargement. Jour 2 : transport et déchargement à Annecy avec grue pour le jacuzzi.`,
    result:
      `Déménagement impeccable en 2 jours. Jacuzzi remis en service une semaine après par le technicien. La famille a laissé un avis 5 étoiles et recommande ${c.NOM_ENTREPRISE}.`,
    featuredImage: "/images/realisations/collection-bernard.png",
    images: ["/images/realisations/collection-bernard.png"],
    featured: false,
    date: "2025-01-20",
    tags: ["villa", "jacuzzi", "Annecy", "grue"],
  },
];
