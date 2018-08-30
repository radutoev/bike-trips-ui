import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      stations: []
    },
    getters: {
        stations: (state) => state.stations
    },
    mutations: {
        setStations(state, stations) {
            state.stations = stations
        }
    },
    actions: {
        listStations({ commit }) {
            axios.get('http://localhost:8081/stations')
                .then(response => commit('setStations', response.data))
                .catch(() => {commit('setStations', []) })
        }
    }
})