import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/login.vue';
import SignIn from './components/signin.vue';
import AddMeds from './components/add_meds.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/add-meds',
    name: 'AddMeds',
    component: AddMeds,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Use import.meta.env.BASE_URL instead of process.env.BASE_URL
  routes,
});

export default router;