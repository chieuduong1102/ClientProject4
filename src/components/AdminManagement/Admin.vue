<template>
  <div class="container-fluid admin">
      <div id="viewport">
          <!-- Sidebar -->
          <div id="sidebar">
              <header>
                  <img src="../../assets/full-logo.png" class="img-fluid" id="img-branch" alt="logo" />
              </header>
              <ul class="nav">
                  <a href="#" @click="showHome()">
                      <div class="item">
                          <li><fa-icon class="icon" icon="home" /> Home</li>
                      </div>
                  </a>
                  <a href="#" @click="showCategory()">
                      <div class="item">
                          <li><fa-icon class="icon" icon="th-list" /> Category</li>
                      </div>
                  </a>
                  <a href="#" @click="showProduct()">
                      <div class="item">
                          <li><fa-icon class="icon" icon="book-open" /> Product</li>
                      </div>
                  </a>
                  <a href="#" @click="showOrders()">
                      <div class="item">
                          <li><fa-icon class="icon" icon="tasks" /> Orders</li>
                      </div>
                  </a>
                  <a href="#" @click="showAdminAccount()">
                      <div class="item">
                          <li><fa-icon class="icon" icon="user-cog" @click="getAllAdminAccount();"/> Admin Account</li>
                      </div>
                  </a>
                  <a href="#" @click="showUserAccount()">
                      <div class="item">
                          <li><fa-icon class="icon" icon="user" /> User Account</li>
                      </div>
                  </a>
                  <a href="#" @click="showFeedback()">
                      <div class="item">
                          <li><fa-icon class="icon" icon="comment-alt" /> Feedback & Rating</li>
                      </div>
                  </a>
                  <router-link to="Login" id="router-logout">
                      <div class="item router-logout" @click="logout()">
                          <li>
                              <fa-icon class="icon" icon="power-off" />
                              <span>
                                  Logout
                              </span>
                          </li>
                      </div>
                  </router-link>
              </ul>
          </div>
          <!-- Content -->
          <div id="content">
              <div class="container-fluid">
                  <div class="row" id="div-logout">
                      <div class="d-flex justify-content-end">
                          <table>
                              <tr>
                                  <td style="vertical-align: bottom;"><fa-icon icon="clock" /> {{ currentTime }}</td>
                              </tr>
                              <tr>
                                  <td>
                                      <fa-icon class="icon" icon="user-cog" />
                                      <span id="adminName"> {{ adminSession.fullname }}</span>
                                  </td>
                              </tr>
                          </table>
                      </div>
                  </div>
              </div>
              <div class="container-fluid content" id="body-content">
                  <div class="row">
                      <div class="col-md-12">
                          <div class="content-detail" v-show="this.isShowHome">
                              <h1>Home</h1>
                          </div>
                          <div class="content-detail" v-show="this.isShowCategory">
                              <h1>Category</h1>
                          </div>
                          <div class="content-detail" v-show="this.isShowProduct" >
                              <Product />
                          </div>
                          <div class="content-detail" v-show="this.isShowOrders">
                              <h1>Orders</h1>
                          </div>
                          <div class="content-detail" v-show="this.isShowAdminAccount">
                              <AdminAccount />
                          </div>
                          <div class="content-detail" v-show="this.isShowUserAccpunt">
                              <UserAccount />
                          </div>
                          <div class="content-detail" v-show="this.isShowFeedback">
                              <Feedback />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import Product from "../AdminComponnents/Product.vue";
import Feedback from "../AdminComponnents/Feedback.vue";
import AdminAccount from "../AdminComponnents/AdminAcount.vue";
import UserAccount from "../AdminComponnents/UserAccount.vue";
import axios from "axios";
const API_URL = "http://localhost:8088/";
export default {
  components: {
    Product,
    AdminAccount,
    UserAccount,
    Feedback
  },
  data() {
    return {
      adminSession: {
        username: "",
        fullname: "",
        email: "",
        phonenumber: "",
        password: "",
      },
      currentTime: "",
      isShowHome: true,
      isShowCategory: false,
      isShowProduct: false,
      isShowOrders: false,
      isShowAdminAccount: false,
      isShowUserAccpunt: false,
      isShowFeedback: false,
    };
  },
  mounted() {
    this.checkIsLogin();
    this.getTimeNow();
    // this.getAllAdminAccount();
    // this.getAllUserAccount();
  },
  methods: {
    checkIsLogin: function () {
      let sessionLogin = window.localStorage.getItem("sessionLogin");
      this.adminSession.username = sessionLogin;
      if (sessionLogin == null) {
        this.$router.push({ name: "Login" });
      }
      axios
        .get(API_URL + "admin/adminInfo?admin=" + this.adminSession.username)
        .then((response) => {
          if (sessionLogin == null || sessionLogin != response.data.username || response.data.username == null) {
            this.$router.push({ name: "Login" });
          } else {
            this.admin = response.data;
            this.adminSession = response.data;
            //console.log(response.data);
          }
        })
        .catch(function (error) {
          this.$router.push({ name: "Login" });
          console.log(error);
        });
    },
    logout: function () {
      window.localStorage.removeItem("sessionLogin");
    },
    getTimeNow: function () {
      const today = new Date();
      let t = today.getDay();
      t = this.checkDay(t);
      let d = today.getDate();
      let mo = today.getMonth();
      let y = today.getFullYear();
      d = this.checkTime(d);
      mo = this.checkTime(mo);
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      m = this.checkTime(m);
      s = this.checkTime(s);
      h = this.checkTime(h);
      this.currentTime =
        t + ", " + d + "/" + mo + "/" + y + " - " + h + ":" + m + ":" + s;
      setTimeout(this.getTimeNow, 1000);
    },
    checkTime: function (i) {
      if (i < 10) {
        i = "0" + i;
      } // add zero in front of numbers < 10
      return i;
    },
    checkDay: function (d) {
      switch (d) {
        case 0:
          d = "SUN";
          break;
        case 1:
          d = "MON";
          break;
        case 2:
          d = "TUE";
          break;
        case 3:
          d = "WED";
          break;
        case 4:
          d = "THU";
          break;
        case 5:
          d = "FRI";
          break;
        case 6:
          d = "SAT";
          break;
        default:
          break;
      }
      return d;
    },
    showHome: function () {
      this.isShowHome = true;
      this.isShowCategory = false;
      this.isShowProduct = false;
      this.isShowOrders = false;
      this.isShowAdminAccount = false;
      this.isShowUserAccpunt = false;
      this.isShowFeedback = false;
    },
    showCategory: function () {
      this.isShowHome = false;
      this.isShowCategory = true;
      this.isShowProduct = false;
      this.isShowOrders = false;
      this.isShowAdminAccount = false;
      this.isShowUserAccpunt = false;
      this.isShowFeedback = false;
    },
    showProduct: function () {
      this.isShowHome = false;
      this.isShowCategory = false;
      this.isShowProduct = true;
      this.isShowOrders = false;
      this.isShowAdminAccount = false;
      this.isShowUserAccpunt = false;
      this.isShowFeedback = false;
    },
    showOrders: function () {
      this.isShowHome = false;
      this.isShowCategory = false;
      this.isShowProduct = false;
      this.isShowOrders = true;
      this.isShowAdminAccount = false;
      this.isShowUserAccpunt = false;
      this.isShowFeedback = false;
    },
    showAdminAccount: function () {
      this.isShowHome = false;
      this.isShowCategory = false;
      this.isShowProduct = false;
      this.isShowOrders = false;
      this.isShowAdminAccount = true;
      this.isShowUserAccpunt = false;
      this.isShowFeedback = false;
    },
    showUserAccount: function () {
      this.isShowHome = false;
      this.isShowCategory = false;
      this.isShowProduct = false;
      this.isShowOrders = false;
      this.isShowAdminAccount = false;
      this.isShowUserAccpunt = true;
      this.isShowFeedback = false;
    },
    showFeedback: function () {
      this.isShowHome = false;
      this.isShowCategory = false;
      this.isShowProduct = false;
      this.isShowOrders = false;
      this.isShowAdminAccount = false;
      this.isShowUserAccpunt = false;
      this.isShowFeedback = true;
    },
  }
};
</script>
<style>
#adminName {
  font-weight: bold;
  color: #d63031;
}

/* Navbar */

/* Toggle Styles */

.admin {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
}

#img-branch {
  height: 10vh;
}

#div-logout {
  background-image: url(../../assets/bg-header-admin.png);
  background-repeat: no-repeat, repeat;
  background-size: cover;
  height: 10vh;
  color: white;
  font-size: 1.1rem;
}

#viewport {
  padding-left: 250px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;

}

#content {
  width: 100%;
  position: relative;
  margin-right: 0;
}

/* Sidebar Styles */

#sidebar {
  font-size: 20px;
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 250px;
  height: 100vh;
  margin-left: -250px;
  overflow-y: auto;
  background: #37474f;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.item {
  width: 100%;
  height: 65px;
  padding-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #455a64;
  transition: ease-out 0.1s;
  box-shadow: inset 0px 0 0 0 #dfe6e9;
}

.item:hover {
  box-shadow: inset 250px 0 0 0 #dfe6e9;
  color: #0984e3;
  border-left: 10px solid #0984e3;
}

.router-logout {

}

.router-logout:hover {
  box-shadow: inset 250px 0 0 0 #dfe6e9;
  color: #ff0808;
  border-left: 10px solid #ff0808;
}

.item > li {
  padding-left: 20px;
}

#sidebar{
  margin-top: 0;
  height: 102vh;
}

#sidebar header {
  background-color: #263238;
  font-size: 20px;
  line-height: 52px;
  text-align: center;
}

#sidebar header a {
  color: #fff;
  display: block;
  text-decoration: none;
}

#sidebar .nav {
}

#sidebar .nav a {
  background: none;
  color: #cfd8dc;
  text-decoration: none;
}

#sidebar .nav a:hover {
  color: #eceff1;
}

.nav > a {
  width: 250px;
}

#sidebar .nav a i {
  width: 100%;
}

/* Content Style */
.content-detail {
  height: 90vh;
  padding: 30px 30px 30px 30px;
}

.category {
  height: 90vh;
}

.btn {
  border-radius: 23px;
  width: 150px;
  height: 46px;
  font-size: 1.1rem;
  margin: 0 10px 0 10px;
  background-color: white;
  color: black;
}


</style>