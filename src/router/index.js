import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/search-user.vue')
  },
  {
    path: '/home',
    name: 'SearchUser',
    component: () => import('../views/search-user.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
