import Vue from 'vue';
import VueRouter from 'vue-router';

// VIEWS IMPORT
import Home from '../views/Home.vue';
import Definitions from '../views/Definitions.vue';
import Immersion from '../views/Immersion.vue';
import WorldMap from '../views/WorldMap.vue';
import Country from '../views/Country.vue';
import Movements from '../views/Movements.vue';

import AfroAmerica from '../views/movements/AfroAmerica.vue';

Vue.use(VueRouter);

// C'est dans la constante routes que vous définisez les différentes routes de votre projet
// Chaque route doivent avoir au minimum un path et un component associé
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Definitions',
    component: Definitions
  },
  {
    path: '/',
    name: 'Immersion',
    component: Immersion
  },
  {
    path: '/',
    name: 'WorldMap',
    component: WorldMap
  },
  {
    path: '/',
    name: 'Country',
    component: Country
  },
  {
    path: '/',
    name: 'Movements',
    component: Movements
  },
  {
    path: '/movements/',
    name: 'Afro-America',
    component: AfroAmerica
  },
  {
    path: '/movements/',
    name: 'Black-Panthers',
    component: BlackPanthers
  },
  {
    path: '/movements/',
    name: 'Black-Lives-Matter',
    component: BlackLivesMatter
  },
  {
    path: '/',
    name: 'Conclusion',
    component: Conclusion
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
