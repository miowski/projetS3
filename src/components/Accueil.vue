<template>
  <div>
    <main>
      <div class="main-content">
        <div class="intro">
          <div class="timeline-container">
            <p>1997</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="244" height="32" viewBox="0 0 244 32">
              <g id="mini-timeline" transform="translate(-260 -203)">
                <g id="ellipse0" transform="translate(260 203)" fill="none" stroke="#b4f8c3" stroke-width="3">
                  <circle cx="16" cy="16" r="16" stroke="none"/>
                  <circle cx="16" cy="16" r="14.5" fill="none"/>
                </g>
                <g id="ellipse1" transform="translate(472 203)" fill="none" stroke="#b4f8c3" stroke-width="3">
                  <circle cx="16" cy="16" r="16" stroke="none"/>
                  <circle cx="16" cy="16" r="14.5" fill="none"/>
                </g>
                <line id="line" x2="184" transform="translate(289.5 218.5)" fill="none" stroke="#b4f8c3"
                      stroke-width="3"/>
                <circle id="Ellipse_25" cx="5" cy="5" r="5" transform="translate(271 214)" fill="#9fe5d0"/>
                <circle id="Ellipse_29" cx="5" cy="5" r="5" transform="translate(483 214)" fill="#9fe5d0"/>
              </g>
            </svg>
            <p>2022</p>
          </div>
          <div class="sub-intro">
            <img class="intro-photo" src="../assets/intro-photo.png" alt="Intro photo">
            <div class="intro-text">
              <h1>Le département MMI Montbéliard fête ses 25 ans !</h1>
              <p>Retraçons l'histoire du département, de sa création jusqu'à aujourd'hui.</p>
            </div>
          </div>
          <a href="#timeline">
            <svg id="intro-arrow" xmlns="http://www.w3.org/2000/svg" width="68.56" height="69.566"
                 viewBox="0 0 68.56 69.566">
              <g transform="translate(-926.22 -979.032)">
                <g id="arrow-1" transform="translate(21.682 2)">
                  <line id="line-1" x2="32.182" y2="43.58" transform="translate(906.635 1000.92)" fill="none"
                        stroke="#9fe5d0" stroke-linecap="round" stroke-width="3"/>
                  <line id="line-2" x1="32.182" y2="43.58" transform="translate(938.818 1000.92)" fill="none"
                        stroke="#9fe5d0" stroke-linecap="round" stroke-width="3"/>
                </g>
                <g id="arrow-2" transform="translate(21.682 -19.79)">
                  <line id="line-3" x2="32.182" y2="43.58" transform="translate(906.635 1000.92)" fill="none"
                        stroke="#b4f8c3" stroke-linecap="round" stroke-width="3"/>
                  <line id="line-4" x1="32.182" y2="43.58" transform="translate(938.818 1000.92)" fill="none"
                        stroke="#b4f8c3" stroke-linecap="round" stroke-width="3"/>
                </g>
              </g>
            </svg>
          </a>
        </div>
        <div class="timeline" id="timeline">
          <p id="timeline-intro-text"><strong>Il y a 25 ans était décrétée l’ouverture d’un département d’un genre
            nouveau : Service Réseau et
            Communications. </strong>
            Alors qu’Internet se répand à grande vitesse, cette formation forme de futurs ingénieurs capables de
            créer des réseaux d’ordinateurs et des sites web. Aujourd’hui, au vu de la place qu’a pris Internet au sein
            de nos sociétés, on constate l’avant-gardisme de l’initiative. Zoom sur l’évolution du département MMI
            Montbéliard, depuis ses débuts en 1997.</p>
          <div v-for="section in orderedSectionList" :key="section.id" class="timeline-block">
            <h1><span>{{ section.acf.year | orderBy }}</span> {{ section.acf.title }}</h1>
            <p>{{ section.acf.description }}</p>
            <img :src="section.acf.image" alt="Image">
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import param from '@/param/param'
import axios from 'axios';
import _ from 'lodash';

export default {
  name: 'Accueil',
  data() {
    return {
      sectionList: []
    }
  },

  created() {
    // Liste des sections
    axios.get(param.host + 'home-section')
      .then(response => {
        console.log('Réponse :', response);
        this.sectionList = response.data;
      })
      .catch(error => console.log(error))
  },

  computed: {
    orderedSectionList: function () {
      return _.orderBy(this.sectionList, 'acf.year');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main-content {
  padding: 1rem;
}

#timeline-intro-text {
  padding: 2rem 0;
}

.timeline {
  max-width: 1224px;
  display: block;
  margin: auto;
}

.timeline-container {
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: stretch;
}

.timeline-container > p {
  font-family: "Space Mono", monospace;
  margin: 0 1rem;
}

.mini-timeline > svg {
  width: fit-content;
}

.intro-text > h1 {
  font-size: 2.25rem;
}

.intro-photo {
  max-width: 100%;
  margin: 2rem 0;
}

#intro-arrow {
  position: relative;
  display: block;
  margin: 1.5rem auto;
  width: 2rem;
  height: 2rem;
  padding: 1rem;
  border: solid #9fe5d0;
  border-radius: 5rem;
  box-shadow: lightgrey 0 4px 7px;
  transition: box-shadow 1s;
}

#intro-arrow:hover {
  box-shadow: lightgrey 0 2px 4px;
}

#intro-arrow:active {
  box-shadow: none;
}

#line {
  stroke-dasharray: 40 10 0.1 10;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: timeline-bar 5s linear infinite;
}

@keyframes timeline-bar {
  to {
    stroke-dashoffset: -60.1;
  }
}

.intro-text > h1 {
  margin-top: 0;
}

.timeline-block {
  padding: 0 0 1rem 1rem;
  border-left: solid black;
}

.timeline-block > img {
  max-width: 100%;
  height: auto;
}

.timeline-block > h1 {
  text-indent: -1rem;
  margin-top: 0;
}

.timeline-block > h1 > span {
  font-size: smaller;
  padding: 0.25rem 0.5rem;
  background: #9fe5d0;
  border-radius: 0.25rem;
}

.timeline-block > h1::before {
  content: "•";
  position: relative;
  left: -0.5rem;
  background: white;
  border-radius: 1rem;
}

@media (min-width: 768px) {

  .intro {
    height: calc(100vh - 4rem)
  }

  .timeline-block {
    padding: 3rem;
    margin: auto 3rem;
  }

  .timeline-block > h1::before {
    left: -2.5rem;
  }

  .timeline-block > img {
    display: block;
    margin: 2rem auto;
    max-width: 50%;
    height: auto;
    padding: 1rem;
  }

  .timeline-block:nth-last-child(1)::after {
    content: "/";
    display: block;
    position: relative;
    writing-mode: vertical-lr;
    bottom: -1rem;
    left: -1.65rem;
    font-weight: 900;
  }

  .timeline-block:nth-last-child(1)::after {
    left: -3.65rem;
    bottom: -3rem;
  }

  .intro > img {
    width: 50%;
  }

  .sub-intro {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row-reverse;
    align-items: center;
  }

  .intro-text {
    margin-bottom: 1rem;
    max-width: 50%;
  }

  .intro-photo {
    max-width: 50%;
  }
}
</style>
