import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Admin from '../components/Admin.vue'

const routes = [
  { path: '/Login', component: Login, name:'Login' },
  { path: '/Register', component: Register, name:'Register' },
  { path: '/Admin', component: Admin, name:'Admin' }
]
  
  export default routes;