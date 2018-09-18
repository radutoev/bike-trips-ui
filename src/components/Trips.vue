<template>
  <md-content class="md-scrollbar">
    <hierarchical-edge-bundling 
      identifier="id" 
      :data="tripHierarchy" 
      :links="links" 
      @mouseNodeOver="Highlight"
      node-text="name" 
      marginX = 0
      marginY = 0
      style="width: 100%; height: 1190px; margin-top=-500px position: absolute"/>
      <!-- <a>{{$route.params}}</a> -->
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
        highlightedNode: null,
        linkTypes: [
          {id: 1, name: 'depends', symmetric: true},
          {id: 2, name: 'implement', inName: 'implements', outName: 'is implemented by'},
          {id: 3, name: 'uses', inName: 'uses', outName: 'is used by'},
        ]
    }
    },
    computed: {
        ...mapGetters([ 'stations', 'trips', 'tripHierarchy', 'links', 'tripsByMonth'])
    },
    mounted: function() {
        this.listStations()
          // .then(this.gettingTrips())
          .then(this.ListTripsByMonth(this.$route.params.tripId))
    },
    methods: {
        ...mapActions(['listStations' , 'gettingTrips','ListTripsByMonth']),
        ...mapMutations(['setStations','setTrips','setTripsByMonth']),
        Highlight(a) {
          //eslint-disable-next-line
          console.log(a.data)
          this.highlightedNode = a.data;
        }
    }
}

</script>

<style lang="scss" scoped>
.svg-container { 
	display: inline-block;
	position: relative;
	width: 100%;
	vertical-align: middle;  
	overflow: overlay; 
  position: absolute;
}
.md-content {
  max-width: 100%;
  max-height: 1090px;
  overflow: overlay;
}
</style>