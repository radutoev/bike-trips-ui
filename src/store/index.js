import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      stations: [],
      trips: [],
      tripHierarchy: {name: "root", children: []},
      links: [],
      tripsByMonth: [],
      monthlyCounts: []
    },
    getters: {
        stations: (state) => state.stations,
        trips: (state) => state.trips,
        tripHierarchy: (state) => state.tripHierarchy,
        links: (state) => state.links,
        tripsByMonth: (state) => state.tripsByMonth,
        monthlyCounts: (state) => state.monthlyCounts

    },
    mutations: {
        setStations(state, stations) {
            state.stations = stations
            const mappedStations = state.stations.map((station) => { return { name: station.station_name, id: station.station_id} })
            state.tripHierarchy = Object.assign({ children: mappedStations })
        },
        setTrips(state, trips) {
            state.trips = trips
            state.links = []
            state.links = trips
                .filter(trip => trip.start_station_id != trip.end_station_id)
                .map(trip => { return { source: trip.start_station_id, target: trip.end_station_id, type: 1} })
            
        },
        setTripsByMonth (state, tripsByMonth) {
            state.tripsByMonth = tripsByMonth
            state.links = []
            state.links = tripsByMonth
                .filter(trip => trip.start_station_id != trip.end_station_id)
                .map(trip => { return { source: trip.start_station_id, target: trip.end_station_id, type: 1} })
            
        },
        setCounts (state, monthlyCounts) {
            state.monthlyCounts = []
            state.monthlyCounts.push('2018')
            monthlyCounts.forEach(element => {
                state.monthlyCounts.push(element)
            });
            
            //eslint-disable-next-line
            console.log(state.monthlyCounts)
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
        },
        ListTripsByMonth({ commit }, month) {
            return axios.get('http://localhost:8081/trip?month=' + month)
                .then(response => {commit('setTripsByMonth', response.data);})
                .catch(() => {commit('setTripsByMonth', []) })
        },
        getCounts ({commit}) {
            return Promise.all([
                axios.get("http://localhost:8081/graph?month=01"),
                axios.get("http://localhost:8081/graph?month=02"),
                axios.get("http://localhost:8081/graph?month=03"),
                axios.get("http://localhost:8081/graph?month=04"),
                axios.get("http://localhost:8081/graph?month=05"),
                axios.get("http://localhost:8081/graph?month=06"),
                axios.get("http://localhost:8081/graph?month=07"),
                axios.get("http://localhost:8081/graph?month=08")])
                .then(response => {
                    var val = [response[0].data,response[1].data,response[2].data,response[3].data,response[4].data,response[5].data,response[6].data, response[7].data];
                    commit('setCounts',val)
                    ;})
                .catch(() => {commit('setCounts',[])})
        }

    }
})