import Vue from 'vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import '@/assets/css/font-face.css';
import '@/assets/css/all.min.css';

import '@/assets/vendor/font-awesome-4.7/css/font-awesome.min.css';
import '@/assets/vendor/font-awesome-5/css/fontawesome-all.min.css';

import '@/assets/vendor/mdi-font/css/material-design-iconic-font.min.css';

import '@/assets/css/theme.css';


import App from './App.vue'
import VueRouter from 'vue-router';


Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
    path: '/home', name:'Home',
    component: () => import('./components/LibraryBooks.vue')
  },
  {
    path: '/', name:'Front',
    component: () => import('./components/LibraryBooks.vue')
  },
  {
      path: '/books', name:'books',
      component: () => import('./components/LibraryBooks.vue')
  },
  {
    path: '/books/:bookId', name:'bookDetails',
    component: () => import('./components/LibraryBooksDetails.vue')
  },
  {
      path: '/genres', name:'genres',
      component: () => import('./components/LibraryGenres.vue')
  },
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
