import Vue from 'vue';
import VueRouter from 'vue-router';

// VIEWS IMPORT
import Home from '../views/Home.vue';
// import Definitions from '../views/Definitions.vue';
// import Immersion from '../views/Immersion.vue';
// import WorldMap from '../views/WorldMap.vue';
// import Country from '../views/Country.vue';
// import Movements from '../views/Movements.vue';

// import AfroAmerica from '../views/movements/AfroAmerica.vue';

import Conclusion from '../views/Conclusion.vue';

Vue.use(VueRouter);

// C'est dans la constante routes que vous définisez les différentes routes de votre projet
// Chaque route doivent avoir au minimum un path et un component associé
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/definitions',
  //   name: 'Definitions',
  //   component: Definitions
  // },
  // {
  //   path: '/immersion',
  //   name: 'Immersion',
  //   component: Immersion
  // }
  // {
  //   path: '/worldMap',
  //   name: 'WorldMap',
  //   component: WorldMap
  // },
  // {
  //   path: '/country',
  //   name: 'Country',
  //   component: Country
  // },
  // {
  //   path: '/movements',
  //   name: 'Movements',
  //   component: Movements
  // },
  // {
  //   path: '/movements/afro-america',
  //   name: 'Afro-America',
  //   component: AfroAmerica
  // }
  // {
  //   path: '/movements/black-panthers',
  //   name: 'Black-Panthers',
  //   component: BlackPanthers
  // },
  // {
  //   path: '/movements/black-lives-matter',
  //   name: 'Black-Lives-Matter',
  //   component: BlackLivesMatter
  // },
  {
    path: '/conclusion',
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
