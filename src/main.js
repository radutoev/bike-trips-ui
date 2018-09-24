import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueGoogleCharts from 'vue-google-charts'
import Vs from 'd3-vs'

import { MdButton, MdTabs , MdToolbar, MdIcon, MdDrawer, MdList, MdContent, MdDialog, MdField} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import App from './App.vue'
import Stations from './components/Stations.vue'
import Station from './components/Station.vue'
import Maps from './components/Maps.vue'
import Trips from './components/Trips.vue'
import Tab from './components/Tab.vue'
import Theme from './components/Theme.vue'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(MdButton)
Vue.use(MdTabs)
Vue.use(VueRouter)
Vue.use(MdToolbar)
Vue.use(MdIcon)
Vue.use(MdDrawer)
Vue.use(MdList)
Vue.use(MdContent)
Vue.use(MdDialog)
Vue.use(MdField)
Vue.use(VueGoogleCharts)
Vue.use(Vs)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/stations' , component: Maps}, 
    { path: '/stations/:stationId' , component: Stations,}, 
    { path: '/trips', component: Trips}, 
    { path: '/tab', component: Tab}, 
    { path: '/trips/month=:tripId', component: Trips}, 
    { path: '/day?month=:month&day=:day', component: Station},
    { path: '/day', component: Station} ,
    { path: '/theme', component: Theme}
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
