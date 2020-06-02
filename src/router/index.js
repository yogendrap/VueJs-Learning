import Vue from 'vue';
import Router from 'vue-router';
import UserLogin from '@/components/UserLogin';
import DashBoard from '@/components/DashBoard';
import { requireAuth, authNotRequired } from '../utils/auth';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login Page',
      beforeEnter: authNotRequired,
      component: UserLogin,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      beforeEnter: requireAuth,
      component: DashBoard,
    },
  ],
});