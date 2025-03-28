export function renderEquipe() {
  return `
    <div class="page-content">
      <h1 class="page-title">L'équipe</h1>

      <section id="les-fondatrices" class="section">
        <h2 class="section-title">Les fondatrices</h2>
        <div class="team-members">
          <div class="team-member">
            <img src="images/alice-brunet.jpg" alt="Alice Brunet" class="team-member-photo">
            <h3>Alice Brunet, Présidente</h3>
            <ul>
              <li>Vétérinaire depuis plus de 10 ans</li>
              <li>Grande expérience dans le soin à la faune sauvage captive</li>
              <li>DIE Santé de la Faune Sauvage non captive (Diplôme Inter Ecoles Vétérinaires)</li>
            </ul>
          </div>
          <div class="team-member">
            <img src="images/jennifer-jolicard.jpg" alt="Jennifer Jolicard" class="team-member-photo">
            <h3>Jennifer Jolicard, Vice-Présidente</h3>
            <ul>
              <li>Assistante vétérinaire pendant 13 ans</li>
              <li>Médiatrice par l’animal</li>
              <li>Créatrice et gestionnaire d’un centre de soin à la faune sauvage (CSAM)</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="image-section" class="image-section">
        <img src="images/Ecureuil.png" alt="Ecureuil" class="image-hero">
      </section>

      <section id="le-conseil-d-administration" class="section">
        <h2 class="section-title">Le conseil d'administration</h2>
        <div class="board-members">
          <div class="board-member">
            <h3>Amélie Nicolau, Trésorière</h3>
            <ul>
              <li>Vétérinaire</li>
            </ul>
          </div>
          <div class="board-member">
            <h3>Virginie Fernandes, Sécrétaire (Pôle communication)</h3>
            <ul>
              <li>Conseillère en marketing et communication</li>
            </ul>
          </div>
          <div class="board-member">
            <h3>Barbara Sesma, Administratrice (Pôle communication)</h3>
            <ul>
              <li>Responsable commerciale en régie publicitaire</li>
            </ul>
          </div>
          <div class="board-member">
            <h3>Julien Veys, Administrateur</h3>
            <ul>
              <li>Vétérinaire</li>
            </ul>
          </div>
          <div class="board-member">
            <h3>Mathilde Prévot, Administratrice</h3>
            <ul>
              <li>Vétérinaire</li>
            </ul>
          </div>
          <div class="board-member">
            <h3>Marine Afchain, Administratrice</h3>
            <ul>
              <li>Musicothérapeute</li>
            </ul>
          </div>
        </div>
      </section>
    </div>

    <style>
      .team-members,
      .board-members {
        display: grid;
        gap: 1.5rem; /* Espacement entre les éléments */
        margin-top: 2rem;
      }

      .team-members {
        grid-template-columns: repeat(2, 1fr);
      }
      .board-members {
        grid-template-columns: repeat(3, 1fr);
      }

      .team-member,
      .board-member {
        padding: 1rem;
        background-color: rgba(158, 178, 196, 0.1);
        border-radius: 8px;
        text-align: center;
      }

      /* Pour les petits écrans */
      @media (max-width: 600px) {
        .team-members,
        .board-members {
          grid-template-columns: 1fr; /* Afficher les membres sur une seule colonne sur mobile */
        
        }
      }
    </style>
  `;
}
