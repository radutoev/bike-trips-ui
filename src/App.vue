<template>
  <div id="app">
    <Header></Header>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Stations from './components/Stations.vue'
import Header from './components/Header.vue'
import Trips from './components/Trips.vue'

export default {
  name: 'app',
  components: {
    Header,
    Stations,
    Trips
  },
  methods: {
  }
}
</script>

<style>
  html, body { 
    height: 100%; 
    margin: 0;
    padding: 0;
  }

  #app {
    text-align: center;
    color: #2c3e50;
    background-color: #fafafa;
    height: 100%;
  }
</style>
