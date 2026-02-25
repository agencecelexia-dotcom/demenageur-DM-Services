import type { TeamMember } from "@/types";
import { clientConfig } from "@/config/client.config";

const c = clientConfig;

export const team: TeamMember[] = [
  {
    id: "tm1",
    name: `${c.PRENOM_DIRIGEANT} ${c.NOM_DIRIGEANT}`,
    role: "Gérante",
    bio: `${c.PRENOM_DIRIGEANT} dirige ${c.NOM_ENTREPRISE} avec passion et exigence. Forte d'une solide expérience dans le déménagement et les services à la personne, elle veille personnellement à la qualité de chaque prestation. Sa proximité avec les clients et sa connaissance de l'agglomération lyonnaise font la différence.`,
    image: "/images/team/laurent-mercier.png",
    specialties: [
      "Direction et organisation",
      "Relation client",
      "Déménagement résidentiel",
    ],
  },
  {
    id: "tm2",
    name: "Alexandre Morin",
    role: "Chef d'Équipe",
    bio: `Alexandre coordonne les équipes de déménageurs sur le terrain. Rigoureux et méthodique, il supervise chaque chantier pour garantir un travail soigné et le respect des délais. Il forme les nouveaux arrivants aux méthodes de protection et de manutention de ${c.NOM_ENTREPRISE}.`,
    image: "/images/team/karim-ait-ahmed.png",
    specialties: [
      "Supervision des chantiers",
      "Protection du mobilier",
      "Formation des équipes",
    ],
  },
  {
    id: "tm3",
    name: "Céline Faure",
    role: "Responsable Administrative",
    bio: `Céline gère la planification des déménagements, les devis et le suivi client. Elle est l'interlocutrice privilégiée des clients de ${c.NOM_ENTREPRISE}, du premier appel jusqu'à la fin de la prestation. Son organisation permet de tenir les engagements même en période de forte demande.`,
    image: "/images/team/sophie-blanchard.png",
    specialties: [
      "Planification et devis",
      "Suivi client",
      "Gestion administrative",
    ],
  },
  {
    id: "tm4",
    name: "Yannick Perrin",
    role: "Déménageur Référent",
    bio: `Yannick fait partie des premiers déménageurs de ${c.NOM_ENTREPRISE}. Spécialiste du montage-démontage et de la manutention d'objets fragiles ou volumineux, il intervient sur les chantiers les plus exigeants : pianos, œuvres d'art, mobilier ancien.`,
    image: "/images/team/emilie-fontaine.png",
    specialties: [
      "Manutention spécialisée",
      "Montage et démontage",
      "Objets fragiles et volumineux",
    ],
  },
];
