import Vue from 'vue'
import LangFlag from 'vue-lang-code-flags';
import App from './App.vue'

//import necessari per le icone delle stelline
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.component('lang-flag', LangFlag);

new Vue({
  render: h => h(App),
}).$mount('#app')
