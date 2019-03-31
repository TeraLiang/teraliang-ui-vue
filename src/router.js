import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
