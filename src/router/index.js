import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Legal from '@/components/Legal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Legal',
      name: 'Legal',
      component: Legal
    }
  ]
})
