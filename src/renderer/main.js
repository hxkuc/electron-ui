import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

// 引入多窗口和element
import Win from 'electron-vue-windows'
import './assets/icon/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入动画样式css
import './assets/transform/transform.css'

Win.init(router, {
  freeWindowNum: 2,
  port: 9088
})
Vue.prototype.$Win = Win
Vue.use(ElementUI)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
