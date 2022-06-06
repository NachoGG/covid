import Vue from 'vue'
import Index from './Index.vue'
import router from './router'
import store from './store'
import  './assets/css/main.scss'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Index)
}).$mount('#app')
