import '@/scss/style.scss';

import Vue from 'vue';
import VueTyperPlugin from 'vue-typer';
import VuePageTransition from 'vue-page-transition';
import { debounce } from 'debounce';

import App from './App.vue';
import router from './router';
var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo);
Vue.use(VueTyperPlugin);
Vue.use(VuePageTransition);
Vue.use(debounce);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
