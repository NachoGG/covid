import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nameCountries: [],
    cases: {},
    vaccines: {}
  },
  getters: {
    cases: state => state.cases,
    vaccines: state => state.vaccines
  },
  mutations: {
    setCases(state, payload) {
      state.cases = payload;
    },
    setVaccines(state, payload) {
      state.vaccines = payload;
    },
    setNameCountries(state, payload) {
      state.nameCountries = payload;
    }
  },
  actions: {
    getCases({ commit }) {
      fetch('https://covid-api.mmediagroup.fr/v1/cases', {
        method: 'GET'
      }).then(response => {
        return response.json()
      }).then(response => {
        let countries = [{
          label: 'All',
          value: ''
        }];
        countries = [
          ...countries,
          ...Object.keys(response).map(countrie => {
            return {
              label: countrie,
              value: countrie
            }
          })
        ];
        commit('setCases', response);
        commit('setNameCountries', countries);
      })
    },

    getVaccines({ commit }) {
      fetch('https://covid-api.mmediagroup.fr/v1/vaccines', {
        method: 'GET'
      }).then(response => {
        return response.json();
      }).then(response => {
        commit('setVaccines', response);
      })
    }
  },
  modules: {
  }
})
