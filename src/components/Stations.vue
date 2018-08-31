<template>
    <div>
        <!-- <p>Using Stations.vue</p> -->
        <p v-for="station in stations" :key="station.station_id">{{station.station_name}}</p>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {    
    data() {
        return {
            console: this
        }
    },
    computed: {
        ...mapGetters([ 'stations' ])
    },
    mounted: function() {
        this.listStations()
    },
    methods: {
        ...mapActions(['listStations'])
    }
}
</script>
