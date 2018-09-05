<template>
  <hierarchical-edge-bundling identifier="id" :data="tripHierarchy" :links="links" node-text="name" style="width: 100%; height: 1050px; margin-top=-500px"/>
  <!-- <tree :data="tree" node-text="name" layoutType="circular" style="width: 100%; height: 100%;">
  </tree> -->
  <!-- <div>
    <p>{{links}}</p> 
  </div> -->
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

<style >
/* .svg-container { 
	display: inline-block;
	position: relative;
	width: 100%;
	vertical-align: middle;  
	overflow: hidden; 
} */
</style>