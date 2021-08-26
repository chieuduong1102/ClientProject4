import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Admin from '../components/Admin.vue'
import Home from '../components/User/Home.vue'
import Product from '../components/User/Product.vue'

const routes = [
  { path: '/Login', component: Login, name:'Login' },
  { path: '/Register', component: Register, name:'Register' },
  { path: '/Admin', component: Admin, name:'Admin' },
  { path: '/Home', component: Home, name:'Home'},
  { path: '/Product', component: Product, name:'Product'}
]
  
  export default routes;