import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nameCountries: [],
    data: {}
  },
  getters: {
    data: state => state.data,
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    },
    setNameCountries(state, payload) {
      state.nameCountries = payload;
    }
  },
  actions: {
    getCases({ commit }) {
      console.log('ola');
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
        commit('setData', response);
        commit('setNameCountries', countries);
        console.log(response, countries);
      })
    }
  },
  modules: {
  }
})
