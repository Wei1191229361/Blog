import Vue from 'vue';
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/base.css';
import './assets/css/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(ElementUi);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
