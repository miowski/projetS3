<template>
  <div id="app">
    <header>
      <nav>
        <div class="nav-content">
          <router-link to="/">
            <img id="nav-logo" src="./assets/img/mmi-logo.png" alt="Logo du MMI (contour)">
          </router-link>
          <div>
            <ul class="socials">
              <li>
                <a href="https://www.facebook.com/">
                  <i class="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/mmi_montbeliard/">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://mmimontbeliard.com">
                  <i class="fas fa-globe"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <router-view/>
    <footer>
      <div class="footer-content">
        <div class="footer-socials">
          <h2>Suivez-nous</h2>
          <ul class="socials">
            <li>
              <a href="https://www.facebook.com/">
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mmi_montbeliard/">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://mmimontbeliard.com">
                <i class="fas fa-globe"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-contact">
          <h2>Contactez-nous</h2>
          <div>
            <div>
              <h3>Adresse</h3>
              <p>4 place Tharradin<br>
                25200 Montbéliard<br>
                FRANCE
              </p>
            </div>
            <div>
              <h3>Téléphone</h3>
              <p><a href="tel:+33381994734">03 81 99 47 34</a></p>
            </div>
            <div>
              <h3>E-mail</h3>
              <p><a href="mailto:dut-mmi-montbeliard@univ-fcomte.fr">dut-mmi-montbeliard@univ-fcomte.fr</a></p>
            </div>
          </div>
        </div>
      </div>
      <p style="font-size: smaller">
        <router-link to="/Legal"><a>Mentions légales</a></router-link>
      </p>
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

h3 {
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 1rem;
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

* {
  scroll-behavior: smooth;
}

a {
  transition: .2s;
}

main {
  margin: 1rem;
}

.nav-content {
  max-width: 1224px;
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
  max-width: 1224px;
  display: block;
  margin: auto;
}

.footer-content {
  border-top: solid lightgrey 1px;
  padding: 1rem 0;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.footer-content > div {
  padding: 0 2rem;
}

nav {
  height: 4rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 3px 3px;
}

.socials {
  margin-right: 1rem;
  list-style: none;
  text-indent: 0;
  padding: 0;
}

.socials > li {
  margin: 0 0.25rem;
  display: inline-block;
}

.socials > li > a {
  text-decoration: none;
  color: black;
}

.socials > li > a:hover {
  color: #9fe5d0;
}

footer > p {
  display: block;
  margin: auto;
  width: fit-content;
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
  }

  .footer-content > div.footer-contact {
    width: 67%;
  }

  .footer-contact {
    border-left: solid lightgrey 1px;
    border-top: none;
  }

  .footer-contact > div {
    display: flex;
  }

  .footer-contact > div > div {
    width: 33%;
    font-size: smaller;
    padding: 0 1rem;
    border-left: solid 1px lightgrey;
  }

  .footer-contact > div > div:nth-child(1) {
    border-left: none;
  }
}
</style>
