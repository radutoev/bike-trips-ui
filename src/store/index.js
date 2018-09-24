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
      monthlyCounts: [],
      day: []
    },
    getters: {
        stations: (state) => state.stations,
        trips: (state) => state.trips,
        tripHierarchy: (state) => state.tripHierarchy,
        links: (state) => state.links,
        tripsByMonth: (state) => state.tripsByMonth,
        monthlyCounts: (state) => state.monthlyCounts,
        day: (state) => state.day

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
            state.monthlyCounts.push(["Year","January","February","March","April","May","June","July","August","September","October","November","December"])
            state.monthlyCounts.push(["2017",0,0,0,0,0,0,monthlyCounts[0],monthlyCounts[1],monthlyCounts[2],monthlyCounts[3],monthlyCounts[4],monthlyCounts[5]])
            state.monthlyCounts.push(["2018",monthlyCounts[6],monthlyCounts[7],monthlyCounts[8],monthlyCounts[9],monthlyCounts[10],monthlyCounts[11],monthlyCounts[12],0,0,0,0,0])
            
        },
        setDataByDay (state, day){
            state.day = day
            //eslint-disable-next-line
            console.log(state.day)
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
                axios.get("http://localhost:8081/graph?year=2017&month=07"),
                axios.get("http://localhost:8081/graph?year=2017&month=08"),
                axios.get("http://localhost:8081/graph?year=2017&month=09"),
                axios.get("http://localhost:8081/graph?year=2017&month=10"),
                axios.get("http://localhost:8081/graph?year=2017&month=11"),
                axios.get("http://localhost:8081/graph?year=2017&month=12"),
                
                axios.get("http://localhost:8081/graph?year=2018&month=01"),
                axios.get("http://localhost:8081/graph?year=2018&month=02"),
                axios.get("http://localhost:8081/graph?year=2018&month=03"),
                axios.get("http://localhost:8081/graph?year=2018&month=04"),
                axios.get("http://localhost:8081/graph?year=2018&month=05"),
                axios.get("http://localhost:8081/graph?year=2018&month=06"),
                axios.get("http://localhost:8081/graph?year=2018&month=07"),
                axios.get("http://localhost:8081/graph?year=2018&month=08")])
                .then(response => {
                    var val = [response[0].data,response[1].data,response[2].data,response[3].data,response[4].data,response[5].data,response[6].data,response[7].data,response[8].data,response[9].data,response[10].data,response[11].data, response[12].data];
                    commit('setCounts',val)
                    
                    ;})
                .catch(() => {commit('setCounts',[])})
        },
        getDay({commit}, date) {
            var month = parseInt(date[0]);
            var day = parseInt(date[1]);
            //eslint-disable-next-line
            console.log(month + "     "+ day)
            return axios.get("http://localhost:8081/day?month="+ month +"&day=" + day)
            .then(response => {
                //eslint-disable-next-line
                console.log(response)
                commit('setDataByDay',response.data)})
            .catch(() => {
                //eslint-disable-next-line
                console.log('error')
                commit('setDataByDay',[])})
        }

    }
})