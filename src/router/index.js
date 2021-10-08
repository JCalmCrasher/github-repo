import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/welcome.vue')
  },
  {
    path: '/search',
    name: 'UserSearch',
    component: () => import('../pages/home.vue')
  },
];

const router = new VueRouter({
  routes
});

export default router;
