import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Admin from '../components/AdminManagement/Admin.vue'
import HomePage from '../components/ClientUI/Home.vue'
import ProductDetail from '../components/ClientUI/ProductDetail.vue'

const routes = [
  { path: '/Login', component: Login, name:'Login' },
  { path: '/Register', component: Register, name:'Register' },
  { path: '/Admin', component: Admin, name:'Admin' },
  { path: '/HomePage', component: HomePage, name:'HomePage'},
  { path: '/ProductDetail', component: ProductDetail, name:'ProductDetail'}
]
  
  export default routes;