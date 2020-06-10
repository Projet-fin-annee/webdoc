import '@/scss/style.scss';

import Vue from 'vue';
import VueTyperPlugin from 'vue-typer'
import VuePageTransition from 'vue-page-transition';

import App from './App.vue';
import router from './router';

Vue.use(VueTyperPlugin)
Vue.use(VuePageTransition);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
