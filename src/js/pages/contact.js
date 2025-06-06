export function renderContact() {
  return `
    <div class="page-content">
      <h1 class="page-title">Contact & Presse</h1>

      <!-- Formulaire de contact -->
      <section id="formulaire-contact" class="section">
        <h2 class="section-title">Formulaire de contact</h2>
        <form id="contactForm" class="contact-form" action="https://formspree.io/f/mgverwov" method="POST">
          <div class="form-group">
            <label for="name">Nom</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="subject">Sujet</label>
            <input type="text" id="subject" name="subject" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" required rows="5"></textarea>
          </div>
          <div class="g-recaptcha" data-sitekey="${
            import.meta.env.VITE_RECAPTCHA_SITE_KEY
          }"></div>
          <button type="submit" class="btn-submit">Envoyer le message</button>
        </form>
        <div id="responseMessage" class="response-message" style="display:none;"></div>
      </section>

      <section id="image-section" class="image-section">
        <img src="images/Herisson.png" alt="Hérisson" class="image-hero">
      </section>

      <!-- Formulaire presse avec seulement l'email affiché -->
      <section id="press-room" class="section">
        <h2 class="section-title">Press room</h2>
        <form id="pressForm" class="contact-form" action="https://formspree.io/f/mgverwov" method="POST">
          <div class="form-group">
            <label for="press-email">Entrez votre email professionnel pour recevoir le dossier de presse</label>
            <input type="email" id="press-email" name="press-email" required>
          </div>
          <!-- Champs cachés mais envoyés avec des valeurs par défaut -->
          <input type="hidden" name="subject" value="Demande d'accès au dossier de presse" />
          <div class="g-recaptcha" data-sitekey="${
            import.meta.env.VITE_RECAPTCHA_SITE_KEY
          }"></div>
          <button type="submit" class="btn-submit">Envoyer la demande</button>
        </form>
        <div id="responseMessage" class="response-message" style="display:none;"></div>
      </section>

    </div>

    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  `;
}