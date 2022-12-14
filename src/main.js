import Vue from 'vue'

import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css' 
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
Vue.use(VueMaterial)
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
