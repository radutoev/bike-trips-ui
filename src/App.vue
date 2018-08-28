<template>
  <div id="app">
     <md-tabs md-sync-route md-alignment="right">
        <md-tab id="tab-stations" md-label="Stations" to=""></md-tab>
     </md-tabs>
  </div>
  <!-- <div id="app">
    <Stations />
  </div> -->
</template>

<script>
import Stations from './components/Stations.vue'

export default {
  name: 'app',
  components: {
    Stations
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
