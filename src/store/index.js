import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      stations: [],
      trips: [],
      tripHierarchy: {name: "root", children: []},
      links: []
    },
    getters: {
        stations: (state) => state.stations,
        trips: (state) => state.trips,
        tripHierarchy: (state) => state.tripHierarchy,
        links: (state) => state.links
    },
    mutations: {
        setStations(state, stations) {
            state.stations = stations
            const mappedStations = state.stations.map((station) => { return { name: station.station_name, id: station.station_id} })
            state.tripHierarchy = Object.assign({ children: mappedStations })
        },
        setTrips(state, trips) {
            state.trips = trips
            state.links = trips
                .filter(trip => trip.start_station_id != trip.end_station_id)
                .map(trip => { return { source: trip.start_station_id, target: trip.end_station_id, type: 1} })
        }
    },
    actions: {
        listStations({ commit }) {
            return axios.get('http://localhost:8081/stations')
                .then(response => commit('setStations', response.data))
                .catch(() => {commit('setStations', []) })
        },
        gettingTrips({ commit }) {
            return axios.get('http://localhost:8081/trips')
                .then(response => commit('setTrips', response.data))
                .catch(() => {commit('setTrips', []) })
        }

    }
})