import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.scss'

import * as filters from './filters'
Object.keys(filters).forEach((key: string) => {
  Vue.filter(key, (filters as any)[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
