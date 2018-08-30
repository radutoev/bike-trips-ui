<template>
  <div id="app">
     <Header></Header>
  </div>
  <!-- <div id="app">
    <Stations />
  </div> -->
</template>

<script>
import Header from './components/Header.vue'
import Stations from './components/Stations.vue'

export default {
  name: 'app',
  components: {
    Header,
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
