<template>
  <div id="app">
    <header>
      <nav>
        <div class="nav-content">
          <router-link to="/">
            <img id="nav-logo" src="./assets/mmi-logo.png" alt="Logo du MMI (contour)">
          </router-link>
          <div class="nav-socials">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-instagram"></i>
            <i class="fas fa-globe"></i>
          </div>
        </div>
      </nav>
    </header>
    <router-view/>
    <footer>
      <div class="footer-content">
        <div class="footer-socials">
          <h2>Suivez-nous</h2>
          <p>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-instagram"></i>
            <i class="fas fa-globe"></i>
          </p>
        </div>
        <div class="footer-contact">
          <h2>Contactez-nous</h2>
          <p>4 place Tharradin
            <br>
            25200 Montbéliard
            <br>
            <a href="tel:+33381994734">03 81 99 47 34</a>
            <br>
            <router-link to="/Legal"><a>Mentions légales</a></router-link>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;800&family=Space+Mono&display=swap');

h1 {
  font-family: "Space Mono", monospace;
  font-size: 1.5rem;
}

h2 {
  font-family: "Space Mono", monospace;
  font-size: 1.25rem;
}

p {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  line-height: 1.75rem;
}

strong {
  font-weight: 600;
}

body {
  margin: 0;
}

main {
  margin: 1rem;
}

.nav-content {
  max-width: 940px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
}

#nav-logo {
  height: 4rem;
  width: auto;
}

footer, main {
  max-width: 940px;
  display: block;
  margin: auto;
}

.footer-content {
  border-top: solid black 1px;
  padding: 1rem 0;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.footer-content > div {
  padding: 0 2rem;
  width: 100%;
}

nav {
  height: 4rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 3px 3px;
}

.nav-socials {
  margin-right: 1rem;
}

.nav-socials > i {
  margin: 0 0.25rem;
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
  }

  .footer-contact {
    border-left: solid black 1px;
    border-top: none;
  }
}
</style>
