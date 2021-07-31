import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/test.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
