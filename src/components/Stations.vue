<template>
    <div>
        <p v-for="trip in trips" :key="trip.trip_id">{{trip.start_station_id}}</p> 
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
        ...mapGetters([ 'stations','trips'])
    },
    mounted: function() {
        this.listStations(),
        this.gettingTrips()
    },
    methods: {
        ...mapActions(['listStations' , 'gettingTrips'])
    }
}
</script>
