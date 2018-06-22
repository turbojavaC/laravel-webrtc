import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roomsList: [
      {
        id: 0,
        name: 'Matrix',
        author: 'Jeff',
        createAt: Date.now(),
      },
      {
        id: 1,
        name: 'Football',
        author: 'Ronaldo',
        createAt: Date.now(),
      },
      {
        id: 2,
        name: 'Manga',
        author: 'Asaki',
        createAt: Date.now(),
      },
    ],
  },
  mutations: {
    createRoom(state, newRoom) {
      state.roomsList.push(newRoom)
    },
  },
  actions: {
    createRoom({ commit }, newRoom) {
      commit('createRoom', newRoom)
    },
  },
})
