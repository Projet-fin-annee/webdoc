import Vue from 'vue';
import VueRouter from 'vue-router';

// VIEWS IMPORT
import Home from '../views/Home.vue';

import Introduction from '../views/Introduction.vue';

import Tutorial from '../views/Tutorial.vue';
import WorldMap from '../views/WorldMap.vue';
import Country from '../views/Country.vue';

import Movements from '../views/Movements.vue';
import AfroAmerica from '../views/movements/AfroAmerica.vue';
import BlackPanthers from '../views/movements/BlackPanthers.vue';
import BlackLivesMatter from '../views/movements/BlackLivesMatter.vue';

import Opening from '../views/Opening.vue';

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
    path: '/introduction',
    name: 'Introduction',
    component: Introduction
  },
  {
    path: '/worldMap',
    name: 'WorldMap',
    component: WorldMap
  },
  {
    path: '/worldMap/:country',
    name: 'WorldMap',
    component: Country,
    props: route => {
      route.query.country;
    }
  },
  {
    path: '/Country',
    name: 'Country',
    component: Country
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: Tutorial
  },
  {
    path: '/movements',
    name: 'Movements',
    component: Movements
  },
  {
    path: '/movements/AfroAmerica',
    name: 'Afro-America',
    component: AfroAmerica
  },
  {
    path: '/movements/BlackPanthers',
    name: 'Black-Panthers',
    component: BlackPanthers
  },
  {
    path: '/movements/BlackLivesMatter',
    name: 'Black-Lives-Matter',
    component: BlackLivesMatter
  },
  {
    path: '/opening',
    name: 'Opening',
    component: Opening
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
