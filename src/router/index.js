import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Scanner from '@/views/Scanner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/scanner',
      name: 'Scanner',
      component: Scanner
    }
  ]
})
