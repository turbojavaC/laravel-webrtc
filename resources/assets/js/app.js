require('./bootstrap')

import Vue from 'vue'
import router from './router'
import store from './store'

const app = new Vue({
    router,
    store,
    el: '#app',
})
