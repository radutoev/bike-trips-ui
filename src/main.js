import Vue from 'vue'
import VueRouter from 'vue-router'
import { MdButton, MdTabs } from 'vue-material/dist/components'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import App from './App.vue'
import Stations from './components/Stations.vue'
import Station from './components/Station.vue'

Vue.config.productionTip = false

Vue.use(MdButton)
Vue.use(MdTabs)
Vue.use(VueRouter)

const User = {
  template: '<div>User {{ $route.params.param }}</div>'
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/stations' , component: Stations},
    { path: '/stations/:stationId' , component: Station},
    { path: '/params/:param' , component: User}
  ]
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
