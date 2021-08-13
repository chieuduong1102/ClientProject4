import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'

//axios cors
import AxiosPlugin from 'vue-axios-cors';
Vue.use(AxiosPlugin)

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)
Vue.component('fa-icon', FontAwesomeIcon)

//vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from "./router/router"
const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
