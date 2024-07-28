import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/login.vue';
import SignIn from './components/signin.vue';
import AddMeds from './components/add_meds.vue';
import MainMenu from './components/web_mainmenu.vue'
import Receipts from './components/receipts.vue'
import Billing from './components/billing.vue'
import ViewMeds from './components/view_meds.vue'

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
  {
    path: '/receipts',
    name: 'Receipts',
    component: Receipts,
  },
  {
    path : '/billing',
    name : 'Billing',
    component: Billing,
  },
  {
    path : '/view_meds',
    name : 'ViewMeds',
    component: ViewMeds,
  },
  {
    path: '/web_mainmenu',
    name: 'MainMenu',
    component : MainMenu,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Use import.meta.env.BASE_URL instead of process.env.BASE_URL
  routes,
});

export default router;