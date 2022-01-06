<template>
  <div>
    <main>
      <router-link to="/" class="previous">
        <i class="fas fa-arrow-left"></i>
      </router-link>
      <div v-for="building in buildingList" class="building">
        <img :src="building.acf.image.url" alt="Image" class="profile-picture">
        <h2>{{ building.acf.nom }}</h2>
        <p v-if="building.acf.description">{{ building.acf.description }}</p>
      </div>
    </main>
  </div>

</template>

<script>
import param from '@/param/param'
import axios from 'axios';
import _ from 'lodash';

export default {
  name: 'Batiment',
  data() {
    return {
      buildingList: []
    }
  },

  created() {
    // Liste des sections
    axios.get(param.host + 'batiment')
      .then(response => {
        console.log('Réponse :', response);
        this.buildingList = _.filter(response.data, {'slug': this.$route.query.q});
        console.log('Réponse filtrée :', this.buildingList);
      })
      .catch(error => console.log(error))
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  padding: 2rem 1rem;
}

.building {
  display: block;
  margin: 1rem auto;
}

.profile-picture {
  width: 10rem;
  height: auto;
  border-radius: 10rem;
}

.profile-picture, .building > h2 {
  display: block;
  margin: 0.5rem auto;
  text-align: center;
}

.previous {
  width: 1rem;
  height: 1rem;
  padding: 0.5rem;
  border: solid #9fe5d0;
  border-radius: 2rem;
  color: #9fe5d0;
  box-shadow: lightgrey 0 4px 7px;
  transition: box-shadow 1s;
}

.previous:hover {
  box-shadow: lightgrey 0 2px 4px;
}

.previous:active {
  box-shadow: none;
}
</style>
