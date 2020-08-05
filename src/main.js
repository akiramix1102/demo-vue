import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import VueRouter from 'vue-router'
import {store} from '../store/store';
import {routes} from './routes'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
