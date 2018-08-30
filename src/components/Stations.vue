<template>
    <div>
        <ul>
            <li v-for="station of stations" :key="station.station_id">{{station.station_name}}</li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {    
    data() {
        return {
            
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
