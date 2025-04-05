export function renderDons() {
  return `
    <div class="page-content">
      <h1 class="page-title">Dons et adhésions</h1>

      <div class="row">
        <!-- Section Appel au don -->
        <section id="appel-au-don" class="section">
          <h2 class="section-title">Appel au don</h2>
          
          <div class="subsection">
            <h3>Donner pour le projet de création du centre de soins du Var.</h3>
            <p>Soutenez un projet structurant pour la conservation de la faune sauvage du Var.</p>
          </div>

          <div class="subsection">
            <!-- Lien vers le formulaire de don HelloAsso -->
            <a href="https://www.helloasso.com/associations/totem-paca/formulaires/1/" target="_blank">
              <button class="don-button">
                Faire un don
              </button>
            </a>
          </div>

          <div class="subsection">
            <div>
              <a href="https://www.helloasso.com/associations/totem-paca/formulaires/1/" target="_blank">
                <img src="images/HelloAsso.png" alt="Faire un don" width="25%">
              </a>
            </div>
          </div>
        </section>

        <!-- Section Adhésion Totem -->
        <section id="adhesion" class="section">
          <h2 class="section-title">Adhésion Totem</h2>
          
          <div class="subsection">
            <h3>Adhérer à Totem c’est soutenir la conservation et la biodiversité.</h3>
            <p>Pour soutenir notre action, vous pouvez également adhérer à notre association.</p>
          </div>

          <div class="subsection">
            <div>
              <!-- Lien vers la page d'adhésion HelloAsso -->
              <a href="https://www.helloasso.com/associations/totem-paca/adhesions/adhesion-2025" target="_blank">
                <button class="don-button">
                  Adhérer à Totem
                </button>
              </a>
            </div>
          </div>

          <div class="subsection">
            <div>
              <a href="https://www.helloasso.com/associations/totem-paca/adhesions/adhesion-2025" target="_blank">
                <img src="images/HelloAsso.png" alt="Adhésion 2025" width="25%">
              </a>
            </div>
          </div>
        </section>
      </div>

      <section id="image-section" class="image-section">
        <img src="images/Herisson.png" alt="Hérisson" class="image-hero">
      </section>
    </div>

    <style>
      .row {
        display: flex;
        justify-content: space-between;
        gap: 20px;
      }

      .section {
        flex: 1;
        min-width: 45%;
      }

      .don-button {
        padding: 10px 20px;
        background-color: var(--color-orange);
        color: white;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .don-button:hover {
        background-color: #0056b3;
      }

      .download-button {
        padding: 10px 20px;
        margin-top: 10px;
        background-color: var(--color-orange);
        color: white;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .download-button:hover {
        background-color: #0056b3;
      }

      .image-hero {
        width: auto;
        max-width: 100%;
      }

      /* Media Query pour petits écrans */
      @media (max-width: 768px) {
        .row {
          flex-direction: column;  /* Empile les sections verticalement */
          align-items: center;  /* Centre les sections */
        }

        .section {
          min-width: 100%;  /* Assure que chaque section prend toute la largeur disponible */
          margin-bottom: 20px; /* Ajoute un espacement entre les sections */
        }
      }
    </style>
  `;
}