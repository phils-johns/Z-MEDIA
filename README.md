# Z-MEDIA — site vitrine

Site statique : 3 pages, aucune dépendance, aucun build.

```
index.html            Accueil
evenements.html       Galerie (page "Vlog")
collaboration.html    Formulaire
assets/css/style.css  Styles
assets/js/images.js   ← liste des photos (le seul fichier à éditer au quotidien)
assets/img/           logo.png + les photos
```

## 1. Le logo

Le logo détouré et recadré est déjà dans `assets/img/logo.png` (fond
transparent). Il sert d'en-tête et de favicon.

## 2. Les couleurs

Relevées directement sur le logo, en haut de `assets/css/style.css` :

| Rôle | Valeur |
| --- | --- |
| Cyan | `#09B6EF` |
| Bleu | `#1E63C8` |
| Violet | `#662F87` |
| Magenta | `#E00387` |

Le dégradé complet est dans `--brand-gradient` : il habille les boutons,
l'onglet actif de la barre du bas et le filet sous l'en-tête. Le reste du site
reste neutre pour laisser les photos et le logo parler.

## 3. Ajouter des photos d'événements

1. Copiez l'image dans `assets/img/` (par ex. `evenement-07.jpg`).
2. Ajoutez une entrée dans `assets/js/images.js` :

```js
{
  src: "assets/img/evenement-07.jpg",
  titre: "Gala de fin d'année",
  lieu: "Lomé",
  annee: "2026",
  categorie: "Corporate",
},
```

3. `git add . && git commit -m "photos" && git push` → Vercel redéploie seul.

Les catégories créent automatiquement les filtres en haut de la galerie.

Pour héberger les photos dans un **autre** dépôt GitHub, renseignez son adresse
brute dans `BASE_URL` (même fichier) et ne mettez que le nom du fichier dans `src` :

```js
const BASE_URL = "https://raw.githubusercontent.com/COMPTE/DEPOT/main/images/";
```

Conseil : compressez les photos avant de les pousser (1600 px de large, < 400 Ko).

## 4. Le formulaire

Il passe par [FormSubmit](https://formsubmit.co) — gratuit, sans compte — et
arrive sur **zmedia861@gmail.com**.

**Activation obligatoire, une seule fois :** après la mise en ligne, envoyez un
premier message depuis le formulaire. FormSubmit envoie un e-mail de
confirmation à zmedia861@gmail.com ; cliquez sur le lien qu'il contient. Les
messages suivants arrivent directement.

## 5. Mise en ligne sur Vercel

1. Poussez ce dossier sur un dépôt GitHub.
2. Sur vercel.com : *Add New → Project → Import* le dépôt.
3. Framework Preset : **Other**. Build Command et Output Directory : laissez vide.
4. *Deploy*.

Chaque push sur la branche principale redéploie le site.
# Z-MEDIA
