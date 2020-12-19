import { createStore } from 'vuex';

import MetasModule from './metas/index';

const store = createStore({
  state: {
    offset: null
  },
  mutations: {
    updateOffset(state, payload){
      state.offset = payload.offsetValue
    }
  },
  actions: {
    updateOffset(context, data){
      context.commit('updateOffset', data)
    }
  },
  getters:{
    offset(state){
      return state.offset
    }
  },
  modules: {
    metas: MetasModule,
  },
});

export default store;
