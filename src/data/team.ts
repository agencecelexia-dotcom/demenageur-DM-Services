import type { TeamMember } from "@/types";
import { clientConfig } from "@/config/client.config";

const c = clientConfig;

export const team: TeamMember[] = [
  {
    id: "tm1",
    name: `${c.PRENOM_DIRIGEANT} ${c.NOM_DIRIGEANT}`,
    role: "Gérante",
    bio: `${c.PRENOM_DIRIGEANT} dirige ${c.NOM_ENTREPRISE} avec passion et exigence. Elle gère aussi bien l'organisation des déménagements, les devis et le suivi client que la stratégie de l'entreprise. Sa proximité avec les clients et sa connaissance de l'agglomération lyonnaise font la différence.`,
    image: "/images/team/sophie-blanchard.png",
    specialties: [
      "Direction et organisation",
      "Relation client",
      "Devis et planification",
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
    name: "Yannick Perrin",
    role: "Déménageur Référent",
    bio: `Yannick fait partie des premiers déménageurs de ${c.NOM_ENTREPRISE}. Spécialiste du montage-démontage et de la manutention d'objets fragiles ou volumineux, il intervient sur les chantiers les plus exigeants : pianos, œuvres d'art, mobilier ancien.`,
    image: "/images/team/laurent-mercier.png",
    specialties: [
      "Manutention spécialisée",
      "Montage et démontage",
      "Objets fragiles et volumineux",
    ],
  },
];
