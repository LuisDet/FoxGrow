import { createStore } from 'vuex';

import MetasModule from './metas/index';

const store = createStore({
  state: {
    offset: null,
    isVisible: false
  },
  mutations: {
    updateOffset(state, payload){
      state.offset = payload.offsetValue
    },
    toggleNavVisible(state) {
      state.isVisible = !state.isVisible;
    },
  },
  actions: {
    updateOffset(context, data){
      context.commit('updateOffset', data)
    },
    toggleNavVisible(context){
      context.commit('toggleNavVisible')
    }
  },
  getters:{
    offset(state){
      return state.offset
    },
    isVisible(state){
      return state.isVisible
    }
  },
  modules: {
    metas: MetasModule,
  },
});

export default store;
