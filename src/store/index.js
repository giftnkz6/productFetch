import { createStore } from 'vuex'

export default createStore({
  state: {
    results: null
  },
  getters: {
    results(state) {
      return state.results;
    },
  },
  mutations: {
    setResults(state, results){
      state.results = results
    }
  },
  actions: {
    fetchAllResults(context){
      return fetch("https://giftnkz6.github.io/personalDetailsAPI/data.json")
        .then((response) => response.json())
        .then((data) => {
          context.commit("setResults", data.results)
        })
        .catch((err) => console.error(err));
    }
  },
  modules: {
  }
})
