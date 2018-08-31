import Vue from 'vue'
import VueRouter from 'vue-router'
import * as VueGoogleMaps from 'vue2-google-maps'

import { MdButton, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import App from './App.vue'
import Stations from './components/Stations.vue'
import Maps from './components/Maps.vue'
import store from './store'

Vue.config.productionTip = false

Vue.use(MdButton)
Vue.use(MdTabs)
Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/stations' , component: Maps},
    { path: '/stations/:stationId' , component: Stations}
  ]
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBq-hdENkhk9rjUNqeDQkl6vF5PSqBOZO8',  
    libraries: 'places'
  },
})
export default {
  mounted () {
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({lat: 45.657974, lng: 25.601198})
    })
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
