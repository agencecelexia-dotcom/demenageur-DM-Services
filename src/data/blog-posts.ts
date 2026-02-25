import type { BlogPost } from "@/types";
import { clientConfig } from "@/config/client.config";

const c = clientConfig;

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "bien-preparer-son-demenagement",
    title: "Comment bien préparer son déménagement : la checklist complète",
    excerpt:
      "Cartons, tri, administratif, fournisseurs : tout ce qu'il faut anticiper pour un déménagement sans stress.",
    category: "Conseils",
    readTime: "7 min",
    date: "2025-01-20",
    featuredImage: "/images/blog/checklist-demenagement.png",
    author: "Céline Faure",
    tags: ["checklist", "préparation", "organisation", "conseils", "déménagement"],
    content: [
      {
        type: "paragraph",
        content:
          "Un déménagement réussi se prépare plusieurs semaines à l'avance. Plus vous anticipez, plus le jour J sera serein. Voici notre checklist complète pour ne rien oublier.",
      },
      {
        type: "h2",
        content: "1. Deux mois avant : le tri et les démarches",
      },
      {
        type: "list",
        items: [
          "Faites le tri dans chaque pièce : donnez, vendez ou jetez ce qui ne vous sert plus",
          "Demandez plusieurs devis de déménagement et comparez",
          "Prévenez votre propriétaire (préavis de 1 à 3 mois selon le bail)",
          "Inscrivez les enfants dans leur nouvelle école",
          "Commencez à réunir les cartons et le matériel d'emballage",
        ],
      },
      {
        type: "h2",
        content: "2. Deux semaines avant : les fournisseurs et l'administratif",
      },
      {
        type: "list",
        items: [
          "Transférez vos contrats : électricité, gaz, internet, assurance habitation",
          "Faites suivre votre courrier (service La Poste)",
          "Prévenez votre employeur, la CAF, la CPAM, les impôts",
          "Réservez un emplacement de stationnement pour le camion si nécessaire",
          "Emballez les pièces que vous utilisez le moins en premier",
        ],
      },
      {
        type: "h2",
        content: "3. Le jour J : les bons réflexes",
      },
      {
        type: "paragraph",
        content:
          "Préparez un carton « essentiel » avec les documents importants, les chargeurs, une trousse de toilette et de quoi grignoter. Faites les relevés de compteur au départ et à l'arrivée. Et surtout, faites confiance à votre équipe de déménageurs !",
      },
      {
        type: "quote",
        content:
          "Le secret d'un déménagement serein, c'est l'anticipation. Plus vous préparez en amont, moins il y a de stress le jour J.",
        author: `${c.PRENOM_DIRIGEANT} ${c.NOM_DIRIGEANT}, Gérante de ${c.NOM_ENTREPRISE}`,
      },
    ],
  },
  {
    id: "b2",
    slug: "emballer-objets-fragiles",
    title: "Comment emballer vos objets fragiles pour un déménagement",
    excerpt:
      "Vaisselle, miroirs, écrans, objets de décoration : les techniques pro pour protéger vos biens les plus délicats.",
    category: "Conseils",
    readTime: "6 min",
    date: "2025-02-03",
    featuredImage: "/images/blog/emballage-fragiles.png",
    author: "Alexandre Morin",
    tags: ["emballage", "fragile", "protection", "vaisselle", "conseils"],
    content: [
      {
        type: "paragraph",
        content:
          "Les objets fragiles sont la hantise de tout déménagement. Pourtant, avec les bonnes techniques et le bon matériel, vous pouvez tout transporter sans casse. Voici nos conseils de professionnels.",
      },
      {
        type: "h2",
        content: "Le matériel indispensable",
      },
      {
        type: "list",
        items: [
          "Papier bulle (en rouleau, pas en feuilles découpées)",
          "Papier journal ou papier kraft pour le calage",
          "Cartons renforcés spécial vaisselle (avec croisillons)",
          "Ruban adhésif large et résistant",
          "Feutres pour l'étiquetage « FRAGILE »",
        ],
      },
      {
        type: "h2",
        content: "Les règles d'or de l'emballage fragile",
      },
      {
        type: "list",
        items: [
          "Emballer chaque pièce individuellement — jamais deux objets en contact direct",
          "Remplir tous les vides dans les cartons avec du papier froissé",
          "Placer les objets lourds en bas, les légers en haut",
          "Ne jamais dépasser 15 kg par carton de vaisselle",
          "Indiquer « FRAGILE » et « HAUT/BAS » sur chaque carton",
          "Les assiettes se transportent debout, comme des disques vinyle",
        ],
      },
      {
        type: "quote",
        content:
          "Le carton doit être tellement bien calé que rien ne bouge quand on le secoue. Si ça bouge, il faut rajouter du papier.",
        author: "Alexandre Morin, Chef d'Équipe",
      },
    ],
  },
  {
    id: "b3",
    slug: "demenager-a-villeurbanne-guide",
    title: `Déménager à ${c.VILLE} : le guide pratique quartier par quartier`,
    excerpt:
      `Stationnement, accès, réglementation : tout ce qu'il faut savoir pour déménager sereinement dans les quartiers de ${c.VILLE}.`,
    category: "Guide",
    readTime: "8 min",
    date: "2025-02-17",
    featuredImage: "/images/blog/demenagement-paris.png",
    author: `${c.PRENOM_DIRIGEANT} ${c.NOM_DIRIGEANT}`,
    tags: ["Villeurbanne", "quartiers", "stationnement", "guide", "local"],
    content: [
      {
        type: "paragraph",
        content:
          `${c.VILLE} est une ville dense et dynamique, collée à ${c.COMMUNE_1}. Chaque quartier a ses particularités pour le déménagement : accès, stationnement, étroitesse des rues. Voici notre guide pratique.`,
      },
      {
        type: "h2",
        content: "Gratte-Ciel et Charpennes",
      },
      {
        type: "list",
        items: [
          "Stationnement très réglementé — réservez un emplacement en mairie 15 jours avant",
          "Immeubles anciens avec escaliers étroits : prévoir un monte-meuble si nécessaire",
          "Accès limité aux gros camions dans certaines rues piétonnes",
          "Proximité métro : attention aux horaires de livraison",
          "Quartier très passant : privilégiez les créneaux matinaux (6h-9h)",
        ],
      },
      {
        type: "h2",
        content: "Tonkin, Cusset et Bonnevay",
      },
      {
        type: "list",
        items: [
          "Accès plus facile pour les camions de grande taille",
          "Résidences avec parkings souterrains : vérifier la hauteur de passage",
          "Quartiers en rénovation : attention aux déviations et travaux",
          "Créneaux recommandés : éviter les heures de pointe scolaire",
        ],
      },
      {
        type: "h2",
        content: "Nos conseils pour un déménagement réussi à Villeurbanne",
      },
      {
        type: "paragraph",
        content:
          `Chez ${c.NOM_ENTREPRISE}, nous connaissons ${c.VILLE} par cœur. Nous vous accompagnons dans les démarches de réservation de stationnement, le choix du créneau horaire optimal et l'adaptation du matériel (monte-meuble, camion adapté) à votre adresse. Contactez-nous pour un devis gratuit.`,
      },
      {
        type: "quote",
        content:
          `À ${c.VILLE}, un bon déménagement commence par une bonne visite technique. On anticipe tout sur place : accès, étages, stationnement.`,
        author: `${c.PRENOM_DIRIGEANT} ${c.NOM_DIRIGEANT}, Gérante`,
      },
    ],
  },
  {
    id: "b4",
    slug: "demenagement-comment-choisir-son-demenageur",
    title: "Comment choisir son déménageur : 7 critères essentiels",
    excerpt:
      "Assurance, devis, avis clients, matériel — les questions à se poser avant de confier son déménagement à un professionnel.",
    category: "Guide",
    readTime: "7 min",
    date: "2025-01-08",
    featuredImage: "/images/blog/demenagement-international.png",
    author: `${c.PRENOM_DIRIGEANT} ${c.NOM_DIRIGEANT}`,
    tags: ["choisir", "déménageur", "critères", "assurance", "devis"],
    content: [
      {
        type: "paragraph",
        content:
          "Choisir un déménageur, c'est confier ses biens les plus précieux à des inconnus. Pour faire le bon choix, il ne suffit pas de comparer les prix. Voici les 7 critères que nous vous recommandons de vérifier.",
      },
      {
        type: "h2",
        content: "1. L'inscription au registre des transporteurs",
      },
      {
        type: "paragraph",
        content:
          "Tout déménageur professionnel doit être inscrit au registre des transporteurs et commissionnaires de transport. Vérifiez son numéro d'inscription et son assurance responsabilité civile professionnelle.",
      },
      {
        type: "h2",
        content: "Les 6 autres critères à vérifier",
      },
      {
        type: "list",
        items: [
          "Assurance : vérifiez les plafonds de garantie et les exclusions (objets de valeur, électroménager)",
          "Visite technique préalable : un bon déménageur se déplace pour évaluer le volume et les contraintes",
          "Devis détaillé et écrit : méfiez-vous des devis téléphoniques ou trop vagues",
          "Avis clients : consultez Google, Pages Jaunes et demandez des références récentes",
          "Matériel : camions propres et récents, couvertures de protection, monte-meuble disponible",
          "Réactivité : testez le temps de réponse à votre demande de devis",
          "Transparence : pas de frais cachés, conditions d'annulation claires",
        ],
      },
      {
        type: "quote",
        content:
          "Le devis le moins cher n'est jamais le meilleur critère. Ce qui compte, c'est la tranquillité d'esprit le jour J.",
        author: `${c.PRENOM_DIRIGEANT} ${c.NOM_DIRIGEANT}, Gérante de ${c.NOM_ENTREPRISE}`,
      },
    ],
  },
  {
    id: "b5",
    slug: "garde-meuble-quand-comment",
    title: "Garde-meuble : quand et comment l'utiliser lors d'un déménagement",
    excerpt:
      "Entre deux logements, pendant des travaux ou pour désencombrer : le garde-meuble est souvent la solution idéale. Mode d'emploi.",
    category: "Conseils",
    readTime: "6 min",
    date: "2024-12-10",
    featuredImage: "/images/blog/garde-meuble.png",
    author: "Céline Faure",
    tags: ["garde-meuble", "stockage", "entre-deux", "travaux", "conseils"],
    content: [
      {
        type: "paragraph",
        content:
          `Le garde-meuble est un allié précieux lors d'un déménagement. Chez ${c.NOM_ENTREPRISE}, nous proposons un service de stockage sécurisé à ${c.VILLE} pour répondre aux besoins les plus courants.`,
      },
      {
        type: "h2",
        content: "Les situations où le garde-meuble s'impose",
      },
      {
        type: "list",
        items: [
          "Vente de votre bien avant d'avoir trouvé le suivant",
          "Travaux dans votre nouveau logement (peinture, sol, cuisine)",
          "Séparation ou divorce : besoin de temps pour s'organiser",
          "Expatriation temporaire : ne pas se séparer de ses affaires",
          "Désencombrement : gagner de l'espace dans un logement plus petit",
        ],
      },
      {
        type: "h2",
        content: "Comment bien préparer ses affaires pour le stockage",
      },
      {
        type: "paragraph",
        content:
          "Nettoyez et séchez tous les meubles et textiles avant le stockage. Démontez les meubles pour gagner de la place. Utilisez des housses pour protéger les canapés et matelas. Évitez de stocker des denrées périssables ou des produits inflammables.",
      },
      {
        type: "quote",
        content:
          `Notre garde-meuble à ${c.VILLE} est sec, ventilé et sous vidéosurveillance. Vos affaires sont en sécurité, et accessibles sur rendez-vous.`,
        author: `${c.PRENOM_DIRIGEANT} ${c.NOM_DIRIGEANT}, Gérante`,
      },
    ],
  },
  {
    id: "b6",
    slug: "demenagement-avec-enfants",
    title: "Déménager avec des enfants : nos conseils pour une transition en douceur",
    excerpt:
      "Un déménagement peut être stressant pour les enfants. Voici comment les préparer et les impliquer pour que tout se passe bien.",
    category: "Conseils",
    readTime: "5 min",
    date: "2024-11-28",
    featuredImage: "/images/blog/demenagement-entreprise.jpeg",
    author: `${c.PRENOM_DIRIGEANT} ${c.NOM_DIRIGEANT}`,
    tags: ["enfants", "famille", "transition", "conseils", "bien-être"],
    content: [
      {
        type: "paragraph",
        content:
          "Un déménagement est un grand changement, surtout pour les plus jeunes. Changer de maison, d'école, de quartier peut générer de l'anxiété. Voici nos conseils pour accompagner vos enfants dans cette transition.",
      },
      {
        type: "h2",
        content: "Avant le déménagement",
      },
      {
        type: "list",
        items: [
          "Annoncez le déménagement le plus tôt possible et expliquez les raisons",
          "Visitez le nouveau logement et le quartier ensemble si possible",
          "Laissez-les participer : choisir la couleur de leur chambre, emballer leurs jouets",
          "Préparez un carton spécial avec leurs objets préférés (doudou, jouets, livres)",
          "Maintenez les routines habituelles le plus longtemps possible",
        ],
      },
      {
        type: "h2",
        content: "Le jour du déménagement",
      },
      {
        type: "paragraph",
        content:
          "Si possible, confiez les enfants à un proche le jour J pour qu'ils ne soient pas au milieu de l'agitation. Sinon, préparez un coin calme avec des activités. Installez leur chambre en premier à l'arrivée pour qu'ils retrouvent leurs repères rapidement.",
      },
      {
        type: "quote",
        content:
          "On voit souvent des enfants stressés à l'arrivée. Dès que leur chambre est installée et qu'ils retrouvent leurs jouets, tout change. C'est pour ça qu'on installe toujours les chambres d'enfants en premier.",
        author: "Alexandre Morin, Chef d'Équipe",
      },
    ],
  },
];
