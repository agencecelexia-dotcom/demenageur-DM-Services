import type { Testimonial } from "@/types";
import { clientConfig } from "@/config/client.config";

const c = clientConfig;

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    clientName: "Caroline Mercier",
    location: `${c.VILLE}`,
    rating: 5,
    quote:
      `Équipe ponctuelle, soigneuse et très sympathique. Mon appartement au 3e sans ascenseur ne leur a posé aucun problème. Tout est arrivé intact dans mon nouveau logement. Je recommande ${c.NOM_ENTREPRISE} les yeux fermés.`,
    projectType: "Déménagement appartement",
    date: "Décembre 2024",
  },
  {
    id: "t2",
    clientName: "Sébastien Girard",
    location: `${c.COMMUNE_1} 3e`,
    rating: 5,
    quote:
      `Déménagement de nos bureaux réalisé en un week-end, sans aucun impact sur notre activité. L'organisation était parfaite et l'équipe de ${c.NOM_ENTREPRISE} a été d'une efficacité remarquable. Un vrai soulagement.`,
    projectType: "Déménagement bureaux",
    date: "Octobre 2024",
  },
  {
    id: "t3",
    clientName: "Nadia Belhaj",
    location: `${c.COMMUNE_2}`,
    rating: 5,
    quote:
      `J'avais peur pour mon piano et mes meubles anciens. L'équipe a pris un soin incroyable, avec des protections partout. Pas une seule rayure. ${c.NOM_ENTREPRISE} est le meilleur choix que j'ai fait pour ce déménagement.`,
    projectType: `Déménagement maison`,
    date: "Septembre 2024",
  },
  {
    id: "t4",
    clientName: "Philippe Dumont",
    location: `${c.COMMUNE_1} 7e`,
    rating: 5,
    quote:
      `Devis clair et respecté, pas de mauvaise surprise. L'équipe est arrivée à l'heure, le déménagement s'est déroulé sans stress. Le rapport qualité-prix est excellent. Merci ${c.NOM_ENTREPRISE} !`,
    projectType: "Déménagement appartement",
    date: "Janvier 2025",
  },
  {
    id: "t5",
    clientName: "Marie-Claire Rousseau",
    location: `${c.COMMUNE_3}`,
    rating: 5,
    quote:
      `Service de garde-meuble impeccable pendant 3 mois entre nos deux logements. Tout était propre, sec et bien rangé quand on a récupéré nos affaires. Très professionnel.`,
    projectType: "Garde-meuble",
    date: "Mars 2025",
  },
  {
    id: "t6",
    clientName: "Julien Perret",
    location: `${c.VILLE}`,
    rating: 5,
    quote:
      "Déménagement de Lyon à Paris en 2 jours, tout compris avec l'emballage. L'équipe a été formidable du début à la fin. Je n'ai eu à m'occuper de rien. Je recommande à 100%.",
    projectType: `Déménagement longue distance`,
    date: "Novembre 2024",
  },
];
