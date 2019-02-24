import Vue from 'vue';
import App from './App.vue';
import VueMilligram from './vue-milligram.plugin';

require('../node_modules/milligram/dist/milligram.min.css');

Vue.config.productionTip = false;

Vue.use(VueMilligram);

new Vue({
  render: h => h(App),
}).$mount('#app');
