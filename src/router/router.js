import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Admin from '../components/AdminManagement/Admin.vue'
import Home from '../components/User/Home.vue'
import ProductDetail from '../components/User/ProductDetail.vue'
import Shop from '../components/User/Shop.vue'

const routes = [
  { path: '/Login', component: Login, name:'Login' },
  { path: '/Register', component: Register, name:'Register' },
  { path: '/Admin', component: Admin, name:'Admin' },
  { path: '/Home', component: Home, name:'Home'},
  { path: '/ProductDetail', component: ProductDetail, name:'ProductDetail'},
  { path: '/Shop', component: Shop, name:'Shop'}
]
  
  export default routes;