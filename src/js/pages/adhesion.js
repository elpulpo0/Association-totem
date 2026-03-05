export function renderAdhesions() {
  return `
    <div class="page-content">
      <h1 class="page-title">Adhésions Totem</h1>
      <!-- Section Adhésion Totem -->
      <section id="adhesion-totem" class="section">
        
          <h3>Adhérer à TOTEM c’est soutenir la conservation et la biodiversité.</h3>

        <div class="subsection">
          <div>
            <!-- Lien vers la page d'adhésion HelloAsso -->
            <a href="https://www.helloasso.com/associations/totem-paca/adhesions/adhesion-2026" target="_blank">
              <button class="don-button">
                Adhérer à Totem
              </button>
            </a>
          </div>
        </div>

        <div class="subsection">
          <div>
            <a href="https://www.helloasso.com/associations/totem-paca/adhesions/adhesion-2026" target="_blank">
              <img src="images/HelloAsso.png" alt="Adhésion 2025" width="25%">
            </a>
          </div>
        </div>
      </section>

      <section id="image-section" class="image-section">
        <img src="images/Herisson.png" alt="Hérisson" class="image-hero">
      </section>
    </div>

    <style>
.section {
        flex: 1;
        min-width: 45%;
        box-sizing: border-box;
        margin-bottom: 20px;
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

        .don-button, .download-button {
          width: 100%; /* Les boutons prennent la largeur totale sur petits écrans */
        }
      }

    </style>
  `;
}
