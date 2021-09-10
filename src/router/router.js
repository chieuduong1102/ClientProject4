import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Admin from '../components/AdminManagement/Admin.vue'
import Shop from '../components/ClientUI/Shop.vue'
import HomePage from '../components/ClientUI/Home.vue'
import ProductDetail from '../components/ClientUI/ProductDetail.vue'
import AboutUs from '../components/ClientUI/AboutUs.vue'
import Cart from '../components/ClientUI/Cart.vue'
import NotFound from '../components/ClientUI/404.vue'

const routes = [
  { path: '/Login', component: Login, name:'Login' },
  { path: '/Register', component: Register, name:'Register' },
  { path: '/Admin', component: Admin, name:'Admin' },
  { path: '/Shop', component: Shop, name:'Shop'},
  { path: '/HomePage', component: HomePage, name:'HomePage'},
  { path: '/ProductDetail', component: ProductDetail, name:'ProductDetail'},
  { path: '/AboutUs', component: AboutUs, name:'AboutUs'},
  { path: '/Cart', component: Cart, name:'Cart'},
  { path: '/404', component: NotFound, name:'NotFound'},
]
  
  export default routes;