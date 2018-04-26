import Vue from 'vue'
import Vuex from 'vuex'
import global from './modules/global'

/**Default Module */
const store = new Vuex.Store({
  modules: {
    global
  },
  strict: process.env.NODE_ENV !== 'production'
})
export default store