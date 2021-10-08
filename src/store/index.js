import Vue from 'vue';
import Vuex from 'vuex';
import * as repo from './modules/repo';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    repo
  },
  state: {
    navMenuShown: false,
    loading: false,
    basicUserInfo: null,
    avatarUrl: ""
  },

  actions: {
    setBasicUserInfo({
      commit
    }, info) {
      commit('SET_BASIC_USER_INFO', info);
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

  mutations: {
    SET_BASIC_USER_INFO(state, info) {
      state.basicUserInfo = info;
      state.avatarUrl = info.user.avatarUrl;
    },
    TOGGLE_NAV_MENU(state, ) {
      state.navMenuShown = !state.navMenuShown;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    }
  },
})