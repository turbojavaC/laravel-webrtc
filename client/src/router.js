import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register.vue'
import RoomsList from './views/RoomsList.vue'
import ChatRoomView from './views/ChatRoomView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/chatroom/:id',
      name: 'chatroom',
      component: ChatRoomView,
    },
    {
      path: '/',
      name: 'rooms',
      component: RoomsList,
    },
  ],
})
