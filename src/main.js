import Vue from 'vue'
import App from './App.vue'

import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
import Themes from './views/Themes.vue'

import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [  
  {path: '/themes', name: 'themes', component: Themes},
  {path: '/detail', name: 'detail', component: Detail},
  {path: '/home', name: 'home', component: Home},
  {path: '/', name: 'home', component: Home},
];

const router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
