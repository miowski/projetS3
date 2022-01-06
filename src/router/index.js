import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Legal from '@/components/Legal'
import Personne from '@/components/Personne'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/legal',
      name: 'Legal',
      component: Legal
    },
    {
      path: '/personne',
      name: 'Personne',
      component: Personne
    }
  ]
})
