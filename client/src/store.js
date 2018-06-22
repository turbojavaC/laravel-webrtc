import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'

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
    async createRoom({ commit }, newRoom) {
      const res = await axios.get('/rooms')
      console.log(res.data)
      commit('createRoom', newRoom)
    },
  },
})
