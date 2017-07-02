import Vue from 'vue'
import Router from 'vue-router'
import Dynamics from '../components/Dynamics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dynamics',
      component: Dynamics
    }
  ]
})
