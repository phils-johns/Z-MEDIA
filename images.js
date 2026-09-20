/* ==========================================================================
   Z-MEDIA — LISTE DES IMAGES
   --------------------------------------------------------------------------
   C'EST LE SEUL FICHIER À MODIFIER POUR AJOUTER DES PHOTOS.

  1. Mets tes photos dans le dossier du site.
   2. Ajoute une ligne dans la liste IMAGES ci-dessous.
   3. Commit + push : Vercel redéploie tout seul.

   Les images du dépôt sont déployées avec le site, donc un simple chemin
  relatif suffit ("ma-photo.jpg"). C'est plus rapide qu'un lien
  raw.githubusercontent.com.

   Si tu préfères garder les photos dans un AUTRE dépôt GitHub, mets son
   adresse raw dans BASE_URL ci-dessous et n'écris que le nom du fichier
   dans "src". Exemple :
   const BASE_URL = "https://raw.githubusercontent.com/ton-compte/ton-depot/main/images/";
   ========================================================================== */

const BASE_URL = ""; // laisser vide si les images sont dans ce dépôt

const IMAGES = [
  {
    src: "AFRICA_NEXT_DEBAT.jpg",
    titre: "Africa Next Débat",
    lieu: "Lomé",
    annee: "2025",
    categorie: "Soirée",
  },
  {
    src: "AFRICA_NEXT_EXPERIENCE.jpg",
    titre: "Africa Next Experience",
    lieu: "Agoè",
    annee: "2025",
    categorie: "Mariage",
  },
  {
    src: "partenaires.jpg",
    titre: "Nos partenaires",
    lieu: "Lomé",
    annee: "2024",
    categorie: "Corporate",
  },
  {
    src: "AFRICA_NEXT_DEBAT.jpg",
    titre: "Africa Next Débat",
    lieu: "Lomé",
    annee: "2025",
    categorie: "Soirée",
  },
  {
    src: "AFRICA_NEXT_EXPERIENCE.jpg",
    titre: "Africa Next Experience",
    lieu: "Agoè",
    annee: "2025",
    categorie: "Mariage",
  },
  {
    src: "partenaires.jpg",
    titre: "Nos partenaires",
    lieu: "Lomé",
    annee: "2024",
    categorie: "Corporate",
  },
];
