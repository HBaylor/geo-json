import Vue from 'vue'
import Vuex from 'vuex'
import global from './modules/global'
import user from './modules/user'

/**Default Module */
const store = new Vuex.Store({
  modules: {
    global,
    user
  },
  strict: process.env.NODE_ENV !== 'production'
})
export default store