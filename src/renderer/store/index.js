import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import myPlugin from 'vuex-persistence'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  plugins: [myPlugin()],
  strict: process.env.NODE_ENV !== 'production'
})
