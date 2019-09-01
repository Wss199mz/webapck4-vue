import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/index.scss'

import * as filters from './filters'
Object.keys(filters).forEach((key: string) => {
  Vue.filter(key, (filters as any)[key])
})
import components from './components'
Vue.use(components)
Vue.use(Element)

import 'vue-fullpage/vue-fullpage.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
