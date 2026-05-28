# Site Association La DIFF' — Version 2

Site vitrine **single-page** pour l'**Association La DIFF'**, lieu d'accueil pour jeunes et adultes en situation de handicap intellectuel à la pépinière de la Trévaresse (Puyricard, Aix-en-Provence).

**Stack** : Vite + React + TypeScript + Tailwind CSS v4 + Lucide icons + Framer Motion (motion).

---

## 🚀 Démarrer

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # build de production dans dist/
npm run preview      # preview locale du build
```

---

## 📁 Structure

```
ladiff-v2/
├── public/
│   ├── sitemap.xml             # SEO
│   └── robots.txt              # SEO
├── src/
│   ├── App.tsx                 # Assemblage des sections
│   ├── main.tsx                # Point d'entrée React
│   ├── styles/globals.css      # Tailwind + palette provençale
│   ├── lib/utils.ts            # Helper cn()
│   ├── components/
│   │   ├── Header.tsx          # Navigation sticky
│   │   ├── Hero.tsx            # Section 1 — Accueil
│   │   ├── About.tsx           # Section 2 — Stéphane
│   │   ├── Values.tsx          # Section 3 — 4 valeurs
│   │   ├── Workshops.tsx       # Section 4 — Ateliers
│   │   ├── PublicSection.tsx   # Section 5 — Public accueilli
│   │   ├── Modalites.tsx       # Section 6 — Horaires, CESU, MDPH
│   │   ├── Presse.tsx          # Section 7 — Article presse
│   │   ├── Trust.tsx           # Section 8 — Crédibilité
│   │   ├── Testimonials.tsx    # Section 9 — Témoignages (vide honnête)
│   │   ├── FAQ.tsx             # Section 10 — FAQ + Schema.org
│   │   ├── Contact.tsx         # Section 11 — Form + carte
│   │   ├── Footer.tsx          # Pied de page
│   │   ├── Logo.tsx            # Logo (basé sur la plaquette)
│   │   └── Reveal.tsx          # Animation au scroll
│   └── assets/                 # Toutes les vraies photos
├── index.html                  # SEO + Schema.org LocalBusiness
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## ✅ Contenu factuel intégré

Toutes les informations affichées proviennent de sources vérifiées :

| Information | Source |
|---|---|
| Numéros SIREN/SIRET/RNA | Certificat INSEE/SIRENE |
| Date de création 03/03/2019 + déclaration 16/03/2019 | Journal Officiel n°11 (16 mars 2019) |
| Objet associatif | Texte officiel du JO |
| Diplôme ETS de Stéphane (2007) | Certificat Académie d'Aix-Marseille |
| BEP agricole Horticulture | Diplôme Ministère de l'Agriculture |
| Horaires 9h-12h / 14h-17h | Article de presse + texte Stéphane |
| Paiement CESU + aide MDPH | Article de presse local |
| Citation "L'objectif n'est pas..." | Article presse + projet d'accueil |
| Adresse pépinière | Multiples sources officielles |
| Activités proposées | Texte Stéphane + plaquette |

**Aucune invention.** Tout est sourçable.

---

## 🎨 Palette provençale

| Couleur | Tailwind | Usage |
|---|---|---|
| 🫒 Olive | `olive-50` à `olive-900` | Couleur dominante |
| ☀️ Soleil | `soleil-50` à `soleil-800` | Accent chaud |
| 🌸 Lavande | `lavande-100` à `lavande-700` | Touches douces |
| 🏺 Tomette | `tomette-50` à `tomette-800` | Accents chauds |
| 🌅 Ciel | `ciel-100` à `ciel-400` | Bleu doux |
| 🍶 Crème | `creme-50` à `creme-300` | Fond principal |

**Typographies** :
- **Titres** : Fraunces (serif éditorial, italiques chaleureux)
- **Corps** : Inter (sans-serif lisible)

Les deux polices sont chargées depuis Google Fonts dans `globals.css`.

---

## 🔍 SEO — Déjà en place

- ✅ Title + description optimisées (Aix-en-Provence, Puyricard, handicap intellectuel, TSA, MDPH, CESU…)
- ✅ Schema.org LocalBusiness + NGO dans `index.html`
- ✅ Schema.org FAQPage généré dynamiquement (10 questions)
- ✅ Open Graph + Twitter Cards
- ✅ Sitemap.xml + robots.txt dans `public/`
- ✅ HTML sémantique (`<section>`, `<article>`, `<h1>` unique)
- ✅ Attributs `alt` descriptifs sur toutes les images
- ✅ Ancres internes pour navigation (`#a-propos`, `#contact`, etc.)

## 🔍 SEO — À faire après déploiement (CRUCIAL)

L'objectif principal est la **visibilité locale**. En complément du site :

1. **Google Business Profile** (gratuit) → https://business.google.com
   - Catégorie : "Association à but non lucratif" + "Service social"
   - Adresse : 210 route du Moulin, 13100 Aix-en-Provence
   - Ajouter les vraies photos du site
   - Demander à 3-5 personnes d'écrire un avis Google

2. **Google Search Console** → https://search.google.com/search-console
   - Ajouter le domaine
   - Sitemaps → coller `https://www.ladiff-aix.fr/sitemap.xml`

3. **Annuaires utiles** :
   - PagesJaunes (gratuit)
   - Annuaire associatif Mairie d'Aix-en-Provence
   - CREAI PACA (médico-social)
   - ESS France / CRESS PACA
   - Annuaires MDPH 13

4. **Lien depuis la page Facebook** vers le site

---

## 📨 Activer le formulaire de contact (à faire UNE FOIS)

Le formulaire est connecté à **Formspree** (service gratuit, 50 envois/mois). En l'état actuel, le formulaire affiche un message honnête pour rediriger les visiteurs vers téléphone/email tant qu'il n'est pas configuré. Voici comment l'activer en 5 minutes :

### Étape 1 — Créer le compte Formspree (par Stéphane)
1. Aller sur https://formspree.io
2. Cliquer "Sign up" et créer un compte gratuit avec **stephaneknipping@orange.fr**
3. Confirmer l'email reçu

### Étape 2 — Créer le formulaire (par Stéphane)
1. Une fois connecté, cliquer "+ New form"
2. Donner un nom (ex : "Site La DIFF'")
3. Confirmer que les e-mails arrivent bien à **stephaneknipping@orange.fr**
4. Sur la page du formulaire, copier l'**identifiant** dans l'URL endpoint
   - L'URL ressemble à : `https://formspree.io/f/xqkr1234`
   - L'identifiant est la partie après `/f/` (ici : `xqkr1234`)

### Étape 3 — Configurer le site (par Tiago)
1. Ouvrir le fichier `src/components/Contact.tsx`
2. Trouver la ligne 13 :
   ```typescript
   const FORMSPREE_ID = 'VOTRE_ID_FORMSPREE';
   ```
3. Remplacer `VOTRE_ID_FORMSPREE` par l'identifiant fourni par Stéphane
   ```typescript
   const FORMSPREE_ID = 'xqkr1234';  // exemple
   ```
4. Rebuilder et redéployer le site

### À partir de là
- Chaque message envoyé depuis le formulaire arrive directement dans la boîte mail orange.fr de Stéphane
- Il peut répondre directement par mail → le visiteur reçoit sa réponse
- Le tableau de bord Formspree garde aussi un historique
- Pas de logiciel à installer, pas de mot de passe à retenir au quotidien

---

## 🌐 Déploiement (recommandé : Vercel)

1. Pousser le code sur GitHub
2. Vercel.com → Import Project → sélectionner le repo
3. Vercel détecte Vite automatiquement → **Deploy**
4. Ajouter le domaine personnalisé (ex : `ladiff-aix.fr`)
5. HTTPS automatique

**Avant le déploiement**, modifier l'URL `https://www.ladiff-aix.fr/` dans :
- `index.html` (canonical, og:url, Schema.org)
- `public/sitemap.xml`
- `public/robots.txt`

---

## 📷 Photos utilisées (vraies)

Toutes dans `src/assets/`, déjà intégrées au build :

| Section | Photo | Fichier |
|---|---|---|
| Hero | Pépinière sous serre | `pepiniere-serre-1.jpg` |
| À propos | Stéphane sur stand | `stephane-stand.jpg` |
| Atelier 1 | Rempotage | `atelier-rempotage.jpg` |
| Atelier 2 | Massif de soucis | `massif-soucis.jpg` |
| Atelier 3 | Tonte pelouse | `atelier-entretien.jpg` |
| Atelier 4 | Stéphane semis | `stephane-semis.jpg` |
| Public | Intérieur serre | `pepiniere-serre-2.jpg` |
| Presse | Article scanné | `article-presse.jpg` |
| Logo | Version détourée | `logo-diff.png` |

---

## ⚠️ Notes importantes

### Logo
Le logo (`src/assets/logo-diff.png`) est une version détourée du logo officiel de l'association, à fond transparent et taille optimisée pour le web (400px). Si Stéphane veut une version SVG vectorielle (qualité parfaite à toutes les tailles), un graphiste peut la créer sur la base de ce PNG. Coût indicatif : 50-100€ sur Malt/Fiverr.

### Photos avec visages identifiables
Les photos floutées (visages cachés par cercles bleus) sont conformes RGPD. Pour les photos de Stéphane, on a son consentement.

### Témoignages
La section est volontairement vide avec une mention honnête. À enrichir avec **de vrais retours écrits** une fois recueillis (toujours avec accord écrit du témoin).

### Mentions légales
À créer en page séparée plus tard, avec :
- Hébergeur exact
- Directeur de publication (Stéphane Knipping ?)
- DPO RGPD si nécessaire

---

## 📞 Coordonnées affichées sur le site

- **Association La DIFF'** — Pépinière de la Trévaresse
- 210 route du Moulin, 13100 Aix-en-Provence (Puyricard)
- Tél : 06 12 84 05 89
- E-mail : stephaneknipping@orange.fr
- Facebook : profile.php?id=100057094854257

---

**Bon vent à La DIFF' 🌱**
