export function renderDons() {
  return `
    <div class="page-content">
      <h1 class="page-title">Appel aux dons</h1>

      <!-- Section Appel au don -->
      <section id="appel-au-don" class="section">
        
          <h3>Donner pour le projet de création du centre de soins du Var.</h3>
          <p>Soutenez un projet structurant pour la conservation de la faune sauvage du Var.</p>

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