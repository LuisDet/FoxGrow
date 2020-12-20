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
    openMenu(state) {
      state.isVisible = true;
    },
    closeMenu(state) {
      state.isVisible = false;
    },
  },
  actions: {
    updateOffset(context, data){
      context.commit('updateOffset', data)
    },
    closeMenu(context){
      context.commit('closeMenu')
    },
    openMenu(context){
      context.commit('openMenu')
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
