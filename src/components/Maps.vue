<template>
<md-content style="width: 100%; height: 700px; position: absolute">
  <br>
  <md-button class="md-raised" disabled>
    <span >STATIONS LOCATIONS</span>
    <md-icon theme="outlined">location_on</md-icon>
  </md-button>
    <GmapMap
  class="google-map" 
  :id="MyMap"
  :center="{lat: 37.558479, lng: -122.295982}"
  :zoom="10"
  map-type-id="terrain"
    >
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
     />
     
    <GmapMarker :id="myMarker" ref="myMarker" v-for="station in stations" :key ="station.station_id"
    :position="google && new google.maps.LatLng(station.station_latitude, station.station_longitude)" />
</GmapMap>
</md-content>
</template>

<script>
import { gmapApi } from 'vue2-google-maps'
import { mapGetters, mapActions } from 'vuex'
 
export default {
  computed: {
    google: gmapApi,
    ...mapGetters([ 'stations' ])
  },
  data() {
    return {
      markers: '#MyMarker',
      MyMap: '#MyMap'
        
    }
  },
  mounted: function() {
    this.listStations()
  },
  methods: {
      ...mapActions(['listStations'])
  }
}
</script>

<style scoped>
.google-map {
  width: 70%;
  height: 70%;
  margin: 0 auto;
  background: gray;
  margin-top: 4%;
}
</style>