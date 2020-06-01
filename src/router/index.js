import Vue from 'vue';
import Router from 'vue-router';
import UserLogin from '@/components/UserLogin';
import UserProfile from '@/components/UserProfile';
import { requireAuth } from '../utils/auth';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login Page',
      component: UserLogin,
    },
    {
      path: '/profile',
      name: 'Profile',
      beforeEnter: requireAuth,
      component: UserProfile,
    },
  ],
});