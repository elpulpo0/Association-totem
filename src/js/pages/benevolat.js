export function renderBenevolat() {
  return `
    <div class="page-content">
      <h1 class="page-title">Bénévolat</h1>
      <!-- Section Adhésion Totem -->
      <section id="adhesion-totem" class="section">
        <h3>Devenir bénévole à TOTEM, c'est devenir actif dans la préservation de la biodiversité.</h3>
        <div class="iframe-container">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScQe1CmRp8j8A5pmiQNSvCLZqTYZHOHyHib9-p25yNALpQUoA/viewform?embedded=true" 
                  frameborder="0" 
                  marginheight="0" 
                  marginwidth="0">Chargement…</iframe>
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

      .iframe-container {
        width: 100%;
        max-width: 100%;
        overflow: hidden;
      }

      .iframe-container iframe {
        width: 100%;
        height: 2952px; /* Hauteur conservée, ajustez si nécessaire */
        border: none;
      }

      .image-hero {
        width: auto;
        max-width: 100%;
      }

      /* Media Query pour petits écrans */
      @media (max-width: 768px) {
        .section {
          min-width: 100%; /* Assure que chaque section prend toute la largeur disponible */
          margin-bottom: 20px; /* Ajoute un espacement entre les sections */
        }
      }
    </style>
  `;
}