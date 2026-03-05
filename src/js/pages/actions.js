export function renderActions() {
  return `
    <div class="page-content">
      <h1 class="page-title">Nos actions et nos projets</h1>

      <section id="la-ligne-sos" class="section">
        <h2 class="section-title">La ligne SOS faune sauvage</h2>
        <div class="phone-container">
          <p>En cas de découverte d’un animal de la faune sauvage en détresse dans le Var, contactez nous au:</p>
          <a href="tel:0483650279" class="phone-link">
            <div class="phone-image">
              <img src="images/phone.png" alt="Appeler" class="phone-img"/>
            </div>
          </a>
        </div>
      </section>

      <section id="image-section" class="image-section">
        <img src="images/Chauve-souris.png" alt="Chauve-souris" class="image-hero">
      </section>

      <section id="le-centre-de-soins-du-var" class="section">
        <h2 class="section-title">Le centre de soins du Var</h2>
        <p class="intro-text">
          L’association TOTEM œuvre à l’ouverture d'un nouveau centre de soins à la faune sauvage dans le Var car le faible nombre de structures existantes entraîne la perte de plusieurs centaines d’individus chaque année. 
          Les grands mammifères sont particulièrement touchés car ils ne sont pas pris en charge dans la région. Il en va de même pour les oiseaux d’eau, pourtant 2<sup>ème</sup> groupe d’oiseaux les plus menacés au monde et non pris en charge dans le Var et les Alpes-Maritimes.
        </p>

        <div class="care-centers-container">
          <div id="centre-var" class="care-center">
            <h3 class="subsection-title">Notre projet se concrétise!</h3>
            <p>Notre centre se situera sur un terrain du Conservatoire du littoral sur la commune du Pradet.
            Une convention de 30 ans a été signée début avril 2025.
            Le Permis de construire, après des mois de travail, nous a été accordé en décembre 2025 pour la rénovation et les travaux vont débuter ce printemps.
            Le site est composé de 2 bâtiments (env. 600 m²) à rénover pour salles de soins, chirurgie, hospitalisation et de 1,5 hectare de terrain pour les volières, enclos de rééducation, bassins (oiseaux d’eau, etc.)</p>
          </div>

          <a href="files/Presentation_Centre_TOTEM.pdf" target="_blank">
            <button class="download-button">
              Télécharger notre dossier de présentation du projet.
            </button>
          </a>
        </div>

        <div class="image-container">
          <img src="images/centre_var.jpeg" alt="Vue du bâtiment principal à rénover" class="species-image">
          <p class="image-caption"><em>Vu du bâtiment principal à rénover</em></p>
        </div>
      </section>

      <section id="image-section" class="image-section">
        <img src="images/Ecureuil.png" alt="Ecureuil" class="image-hero">
      </section>

      <section id="le-point-relais-martinets" class="section">
        <h2 class="section-title">Le point relais martinets de Cuers : un dispositif d’urgence indispensable</h2>
        <p class="intro-text">
          Chaque été, le ciel du Var s'anime du ballet aérien des martinets noirs. Mais lorsque ces oiseaux emblématiques sont en détresse, le point relais de Cuers, géré par TOTEM PACA, devient leur refuge.
        </p>
        <div>
          <div class="care-center">
            <h3 class="subsection-title">L'été : une période critique pour les martinets</h3>
            <p class="section-paragraph">
              Leurs nids se trouvant sous les toitures, les oisillons sont fortement impactés par les fortes chaleurs et canicules qui les poussent à sauter du nid à la recherche d’un peu d'air frais. Tombés au sol et impossibles à renicher, ils nécessitent une prise en charge rapide. 2025 a été le théâtre de canicules précoces et successives qui ont fragilisé les jeunes martinets dès le début de leur croissance. Très rapidement, les centres de soins existant ont été submergés. L’association TOTEM a apporté un début de solution en ouvrant en urgence, avec le concours de la ville de Toulon et de l’association Martinets d’ici et d’ailleurs, un point relais d’urgence à Cuers. D’autres soutiens n’ont pas tardé à l’instar de Nat’H Nature Harmonie, Fidel’Ami Santé, la fondation 30 Millions d’Amis et Univet Nature.
            </p>
            <p class="section-paragraph">
              Le point relais de Cuers joue alors un rôle vital : notre structure d'accueil temporaire a assuré les premiers soins. Les canicules se succédant et les structures d’accueil ne désemplissant pas, ce qui devait être seulement un point relais devient alors une centre de soins temporaires agissant sous la tutelle de la LPO PACA. Avec une capacité d'accueil allant jusqu'à 120 oiseaux simultanément, ce point relais a été l’un des maillons indispensables de la chaîne de secours pour ces infatigables voyageurs.
            </p>
          </div>
          <div class="image-container">
            <img src="images/martinet.jpg" alt="Martinet en cours de soins" class="species-image">
            <p class="image-caption"><em>Martinet en cours de soins - Copyright Michael Gonzalez</em></p>
          </div>
          <div class="care-center">
            <h3 class="subsection-title">Un bilan encourageant</h3>
            <p class="section-paragraph">
              En 2025, ce sont 376 martinets qui ont été pris en charge par notre équipe. Grâce à la mobilisation de 80 bénévoles dévoués et à la vigilance des habitants du territoire, nous avons pu offrir une seconde chance à ces oiseaux particulièrement vulnérables lors de leur croissance au nid puis de l’apprentissage du vol. L'engagement de nos bénévoles, disponibles de 8h à 19h chaque jour (plus de 1000 heures de bénévolat effectuées en juillet/août), a permis d'assurer les soins quotidiens, le nourrissage et le suivi individualisé de chaque oiseau. 212 martinets ont pu être relâchés avec succès.
            </p>
          </div>
          <div class="care-center">
            <h3 class="subsection-title">Un maillon essentiel de la protection de la faune sauvage</h3>
            <p class="section-paragraph">
              Ce point relais illustre parfaitement la mission de TOTEM PACA : créer des ponts entre la population et la faune sauvage locale. Chaque martinet accueilli est le fruit d'une vigilance citoyenne et d'une chaîne de solidarité qui ne fonctionne que grâce à l'engagement de chacun. Nous remercions chaleureusement tous les bénévoles, les habitants qui nous signalent les oiseaux en détresse, et nos partenaires qui rendent possible cette action chaque année.
            </p>
          </div>
        </div>
      </section>
    </div>

    <style>
    /* Section principale */
      #le-centre-de-soins-du-var {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      /* Numéro de téléphone avec l'icône */
      .phone-container {
        margin-top: 20px;
        text-align: center; /* Centrage du texte */
      }

      .phone-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: black;
      }

      .phone-image {
        display: flex; /* Transforme le conteneur en boîte flexible */
        align-items: center; /* Centre l'image verticalement */
        justify-content: center; /* Centre l'image horizontalement */
        margin: 0 auto; /* Centrage horizontal du conteneur */
      }

      .phone-img {
        width: 50%;
        height: auto; /* Laisse l'image à sa taille réelle */
      }

      /* Style individuel des blocs */
      .care-center {
        padding: 15px;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
      }

      /* Style pour les paragraphes */
      .section-paragraph {
        margin-bottom: 15px;
        line-height: 1.6;
      }

      /* Style pour les titres de sous-section */
      .subsection-title {
        margin-top: 25px;
        margin-bottom: 15px;
      }

      /* Style pour le texte d'introduction */
      .intro-text {
        margin-bottom: 20px;
        line-height: 1.6;
      }

      /* Image bloc */
      .care-center-image {
        width: 100%;
        height: auto;
        border-radius: 8px;
      }

      /* Images */
      .image-container {
        text-align: center;
        margin: 20px 0;
      }

      .species-image {
        width: 100%;
        height: auto;
        max-width: 600px;
        border-radius: 8px;
      }

      .image-caption {
        font-size: 0.9em;
        color: #666;
        margin-top: 10px;
      }

      .don-button, .download-button {
        padding: 10px 20px;
        background-color: var(--color-orange);
        color: white;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .don-button:hover, .download-button:hover {
        background-color: #0056b3;
      }

      /* Responsivité */
      @media (max-width: 768px) {
        .care-center {
          margin-bottom: 15px;
        }

        .section-paragraph {
          margin-bottom: 12px;
        }

        .subsection-title {
          margin-top: 20px;
          margin-bottom: 12px;
        }
      }
    </style>
  `;
}