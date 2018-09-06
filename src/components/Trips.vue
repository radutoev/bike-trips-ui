<template>
  <md-content class="md-scrollbar">
    <hierarchical-edge-bundling 
      identifier="id" 
      :data="tripHierarchy" 
      :links="links" 
      node-text="name" 
      marginX = 0
      marginY = 0
      style="width: 100%; height: 1190px; margin-top=-500px position: absolute"/>
  </md-content>
</template>

<script>
import { mapGetters, mapActions , mapMutations} from 'vuex'
import { hierarchicalEdgeBundling } from 'vued3tree'

export default {  
    components: {
      hierarchicalEdgeBundling
    },
    data () {
      return {
      linkTypes: [
        {id: 1, name: 'depends', symmetric: true},
        {id: 2, name: 'implement', inName: 'implements', outName: 'is implemented by'},
        {id: 3, name: 'uses', inName: 'uses', outName: 'is used by'},
      ]
    }
    },
    computed: {
        ...mapGetters([ 'stations', 'trips', 'tripHierarchy', 'links'])
    },
    mounted: function() {
        this.listStations()
          .then(this.gettingTrips())
    },
    methods: {
        ...mapActions(['listStations' , 'gettingTrips']),
        ...mapMutations(['buildHierarchicalTripData', 'getLinks'])
    }
}

</script>

<style lang="scss" scoped>
.svg-container { 
	display: inline-block;
	position: relative;
	width: 100%;
	vertical-align: middle;  
	overflow: hidden; 
  position: absolute;
}
.md-content {
  max-width: 400px;
  max-height: 200px;
  overflow: auto;
}
</style>