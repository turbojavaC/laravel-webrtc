import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register.vue'
import RoomsList from './views/RoomsList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: RoomsList,
    },
  ],
})
