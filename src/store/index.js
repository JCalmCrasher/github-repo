import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navMenuShown: false,
    loading: false,
    user: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    TOGGLE_NAV_MENU(state,) {
      state.navMenuShown = !state.navMenuShown;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    }
  },
  actions: {
    setUser({
      commit
    }, user) {
      commit('SET_USER', user);
    },
    toggleNavMenu({
      commit
    }) {
      commit('TOGGLE_NAV_MENU');
    },
    setLoading({
      commit
    }, loading) {
      commit('SET_LOADING', loading);
    }
  },
  modules: {}
})