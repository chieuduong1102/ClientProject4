import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import LoginClient from '../components/ClientUI/Login.vue'
import RegisterClient from '../components/ClientUI/Register.vue'
import Admin from '../components/AdminManagement/Admin.vue'
import Shop from '../components/ClientUI/Shop.vue'
import HomePage from '../components/ClientUI/Home.vue'
import ProductDetail from '../components/ClientUI/ProductDetail.vue'
import AboutUs from '../components/ClientUI/AboutUs.vue'
import Cart from '../components/ClientUI/Cart.vue'
import NotFound from '../components/ClientUI/404.vue'
import UserManagement from '../components/ClientComponents/UserManagement.vue'

const routes = [
  { path: '/LoginClient', component: LoginClient, name:'LoginClient' },
  { path: '/RegisterClient', component: RegisterClient, name:'RegisterClient' },
  { path: '/Login', component: Login, name:'Login' },
  { path: '/Register', component: Register, name:'Register' },
  { path: '/Admin', component: Admin, name:'Admin' },
  { path: '/Shop', component: Shop, name:'Shop'},
  { path: '/HomePage', component: HomePage, name:'HomePage'},
  { path: '/ProductDetail', component: ProductDetail, name:'ProductDetail'},
  { path: '/AboutUs', component: AboutUs, name:'AboutUs'},
  { path: '/Cart', component: Cart, name:'Cart'},
  { path: '/404', component: NotFound, name:'NotFound'},
  { path: '/UserManagement', component: UserManagement, name:'UserManagement'},
]
  
  export default routes;