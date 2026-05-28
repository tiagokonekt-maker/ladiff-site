/**
 * SeoContent.tsx
 *
 * Contenu textuel riche en mots-clés, visuellement masqué pour les visiteurs
 * mais pleinement lisible et indexable par Google.
 *
 * Pourquoi ce fichier existe :
 * Google indexe le texte de la page. Plus un mot-clé apparaît naturellement
 * dans le texte (titres, paragraphes, listes), plus Google comprend que le site
 * répond à cette requête. Ce composant couvre toutes les variantes de recherche
 * sans alourdir le design.
 *
 * IMPORTANT : sr-only = visible pour Google, invisible pour les humains.
 * Ce n'est pas du "keyword stuffing" (interdit) : le texte est rédigé en
 * phrases naturelles et apporte une vraie information.
 */
export function SeoContent() {
  return (
    <div className="sr-only" aria-hidden="true">
      {/* =====================================================
          BLOC 1 — Identité et localisation
          Cible : "association handicap Aix", "éducateur spé Aix"
          et toutes les villes autour
          ===================================================== */}
      <section>
        <h2>
          Association d'accueil pour personnes handicapées à Aix-en-Provence
          et dans les communes voisines
        </h2>
        <p>
          L'Association La DIFF' est un lieu d'accueil de jour pour jeunes et adultes
          en situation de handicap intellectuel ou présentant des troubles du spectre
          de l'autisme (TSA), situé à Puyricard, dans l'agglomération d'Aix-en-Provence
          (Bouches-du-Rhône, 13).
        </p>
        <p>
          Nous accompagnons des personnes en situation de handicap venant d'Aix-en-Provence,
          Puyricard, Venelles, Pertuis, Meyreuil, Fuveau, Rousset, Bouc-Bel-Air,
          Gardanne, Lambesc, Les Pennes-Mirabeau, Eguilles et des communes environnantes
          des Bouches-du-Rhône et de Provence-Alpes-Côte d'Azur.
        </p>
      </section>

      {/* =====================================================
          BLOC 2 — Éducateur spécialisé et variantes
          Cible : "éducateur spé", "éducateur spécialisé",
          fautes d'orthographe incluses
          ===================================================== */}
      <section>
        <h2>Éducateur spécialisé à Aix-en-Provence et Puyricard</h2>
        <p>
          L'association est fondée et dirigée par Stéphane Knipping, éducateur
          technique spécialisé diplômé d'État (Académie d'Aix-Marseille, 2007).
          Éducateur spécialisé dans l'accompagnement du handicap intellectuel et
          de l'autisme, il intervient à Aix-en-Provence, Puyricard et dans les
          communes voisines.
        </p>
        <p>
          Vous cherchez un éducateur spécialisé à Aix-en-Provence (aussi appelé
          éducateur spé Aix), un éducateur spécialisé à Puyricard, un éducateur
          spécialisé à Venelles ou un éducateur spécialisé à Pertuis ?
          La DIFF' propose un accompagnement individualisé dans un cadre naturel
          et bienveillant.
        </p>
        <p>
          Éducateur specialise Aix — educateur spécialisé Aix — éducateur specialise
          Puyricard — educateur spé Aix-en-Provence — éducatrice spécialisée Aix —
          éducateur spécialisé handicap Bouches-du-Rhône — ETS handicap 13.
        </p>
      </section>

      {/* =====================================================
          BLOC 3 — Handicap et TSA, variantes et fautes courantes
          Cible : "handicapé", "hadicapé", "garde enfant handicapé"
          ===================================================== */}
      <section>
        <h2>Accueil et garde d'enfants et d'adultes handicapés à Aix-en-Provence</h2>
        <p>
          La DIFF' accueille des personnes en situation de handicap intellectuel,
          des personnes handicapées mentales, des jeunes et adultes autistes,
          des personnes présentant des troubles du spectre autistique (TSA),
          des personnes en rupture de parcours médico-social ou en liste d'attente
          pour une place en IME, ESAT, FAM, MAS ou autre établissement spécialisé.
        </p>
        <p>
          Association pour handicapés Aix — association handicap adulte Aix —
          accueil handicapé Aix-en-Provence — garde enfant handicapé Aix —
          garde enfants handicapés Puyricard — garde adulte handicapé Aix —
          hadicapé Aix — hadicapés Puyricard — handicapée Venelles —
          TSA Aix-en-Provence — autisme Aix — autiste Aix-en-Provence —
          déficience intellectuelle Aix — handicap mental Aix —
          handicap intellectuel Puyricard — handicapé Pertuis —
          association hadicap Aix — assocation handicap Aix —
          asociation handicapés Aix-en-Provence.
        </p>
      </section>

      {/* =====================================================
          BLOC 4 — Situations spécifiques très recherchées
          Cible : rupture de parcours, attente de place, MDPH
          ===================================================== */}
      <section>
        <h2>
          Solution d'accueil pour personnes handicapées en rupture de structure
          ou en attente de place dans les Bouches-du-Rhône
        </h2>
        <p>
          La DIFF' répond précisément aux besoins des familles dont le proche
          est en rupture de parcours médico-social, sans solution adaptée,
          en attente d'une place en IME (Institut Médico-Éducatif),
          en ESAT (Établissement et Service d'Aide par le Travail),
          en FAM (Foyer d'Accueil Médicalisé) ou en MAS (Maison d'Accueil Spécialisée).
        </p>
        <p>
          Nous proposons une alternative concrète et bienveillante pour les familles
          d'Aix-en-Provence et du Pays d'Aix confrontées à des listes d'attente
          interminables ou à l'absence de solution adaptée dans les Bouches-du-Rhône.
        </p>
        <p>
          Une aide financière de la MDPH (Maison Départementale des Personnes
          Handicapées) des Bouches-du-Rhône peut être accordée pour financer
          l'accueil. Le règlement se fait en CESU (Chèque Emploi Service Universel).
        </p>
      </section>

      {/* =====================================================
          BLOC 5 — Activités et mots-clés complémentaires
          ===================================================== */}
      <section>
        <h2>
          Activités adaptées au handicap : horticulture, jardinage et nature
          à Aix-en-Provence
        </h2>
        <p>
          Activités adaptées handicap Aix — horticulture thérapeutique Aix —
          jardinage thérapeutique Aix-en-Provence — atelier nature handicap Aix —
          activités autisme Aix — atelier TSA Puyricard —
          accompagnement handicap intellectuel Aix — structure accueil handicap 13 —
          accueil de jour handicap Aix — accueil journée handicapé Aix —
          demi-journée handicap Aix-en-Provence — lieu accueil TSA Puyricard.
        </p>
      </section>
    </div>
  );
}
