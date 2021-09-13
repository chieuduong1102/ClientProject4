import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import store from "./store";

Vue.use(Antd);

//axios cors
import AxiosPlugin from 'vue-axios-cors';
Vue.use(AxiosPlugin)

//StarRating
import StarRating from 'vue-star-rating'
Vue.component('vue-star-rating', StarRating)

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)
Vue.component('fa-icon', FontAwesomeIcon)

// datatable
import { VuejsDatatableFactory } from 'vuejs-datatable';
Vue.use( VuejsDatatableFactory );

//vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from "./router/router"
import vuetify from './plugins/vuetify'
const router = new VueRouter({
  mode: 'history',
  routes
})

//vuex

//lightGallery
import LightGallery from 'vue-light-gallery';
Vue.use(LightGallery);

Vue.config.productionTip = false


new Vue({
  router,
  vuetify,
  StarRating,
  store : store,
  render: h => h(App)
}).$mount('#app')
