import Vue from 'vue';
import VueRouter from 'vue-router';
import Homepage from '../components/Homepage';
import Calculator from '../components/Calculator';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },

  {
    path: '/calcul',
    name: 'Calculator',
    component: Calculator
  },


  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
