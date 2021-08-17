<template>
  <div class="admin">
      <div id="viewport">
          <!-- Sidebar -->
          <div id="sidebar">
              <header>
                  <img src="../assets/full-logo.png" class="img-fluid" id="img-branch" alt="logo" />
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
              <div class="container-fluid content">
                  <div class="row">
                      <div class="col-md-12">
                          <div class="content-detail" v-show="this.isShowHome">
                              <h1>Home</h1>
                          </div>
                          <div class="content-detail" v-show="this.isShowCategory">
                              <h1>Category</h1>
                          </div>
                          <div class="content-detail" v-show="this.isShowProduct">
                              <h1>Product</h1>
                          </div>
                          <div class="content-detail" v-show="this.isShowOrders">
                              <h1>Orders</h1>
                          </div>
                          <div class="content-detail" v-show="this.isShowAdminAccount">
                              <h1><fa-icon class="icon" icon="user-cog" /> Admin Account</h1>
                              <hr />
                              <div class="row">
                                  <div class="col-md-4" v-show="this.isCreateNew">
                                    <h2>Create New</h2>
                                      <div class="alert alert-danger" role="alert" v-if="errorValidation.length">
                                          <li v-for="(error, index) in errorValidation" :key="index">
                                              {{ error }}
                                          </li>
                                      </div>
                                      <form id="formCreateAdminAccount" @submit.prevent="createAdminAccount()">
                                          <div class="form-group">
                                              <label for="fullname"><fa-icon icon="address-card" /> Fullname</label>
                                              <input type="text" class="form-control" id="fullnameAdmin" name="fullname" v-model="admin.fullname" placeholder="Fullname" />
                                          </div>
                                          <div class="form-group">
                                              <label for="email"><fa-icon icon="envelope" /> Email</label>
                                              <input type="email" class="form-control" id="emailAdmin" name="email" v-model="admin.email" placeholder="Email" />
                                          </div>
                                          <div class="form-group">
                                              <label for="userName"><fa-icon icon="user" /> Username</label>
                                              <input type="text" class="form-control" id="usernameAdmin" name="username" v-model="admin.username" placeholder="Username" />
                                          </div>
                                          <div class="form-group">
                                              <label for="password"><fa-icon icon="unlock" /> Password</label>
                                              <input type="password" class="form-control" id="passwordAdmin" name="password" v-model="admin.password" placeholder="Password" />
                                          </div>
                                          <div class="form-group">
                                              <label for="comfirmPassword"><fa-icon icon="lock" /> Comfirm Password</label>
                                              <input type="password" class="form-control" id="comfirmPasswordAdmin" name="comfirmPassword" v-model="admin.comfirmPassword" placeholder="Comfirm Password" />
                                          </div>
                                          <div class="form-group">
                                              <label for="phoneNumber"><fa-icon icon="phone-alt" /> Phone Number</label>
                                              <input type="text" class="form-control" id="phoneNumberAdmin" name="phoneNumber" v-model="admin.phonenumber" placeholder="Phonenumber" />
                                          </div>
                                          <br />
                                          <div class="form-group text-center">
                                              <button type="submit" id="btnSubmitAdmin" class="btn btn-primary">
                                                  Create
                                              </button>
                                              <button type="reset" id="btnResetAdmin" class="btn btn-secondary" @click="resetFormAdmin()">
                                                  Clear
                                              </button>
                                          </div>
                                      </form>
                                  </div>
                                  <div class="col-md-4" v-show="this.isUpdate">
                                    <h2>Update Information</h2>
                                      <div class="alert alert-danger" role="alert" v-if="errorValidation.length">
                                          <li v-for="(error, index) in errorValidation" :key="index">
                                              {{ error }}
                                          </li>
                                      </div>
                                      <form id="formUpdateAdminAccount" @submit.prevent="comfirmUpdateAdminAccount()">
                                          <div class="form-group">
                                              <label for="fullname"><fa-icon icon="address-card" /> Fullname</label>
                                              <input type="text" class="form-control" id="fullname" name="fullname" v-model="admin.fullname" placeholder="Fullname" />
                                          </div>
                                          <div class="form-group">
                                              <label for="email"><fa-icon icon="envelope" /> Email</label>
                                              <input type="email" class="form-control" id="email" name="email" v-model="admin.email" placeholder="Email" />
                                          </div>
                                          <div class="form-group">
                                              <label for="userName"><fa-icon icon="user" /> Username</label>
                                              <input type="text" class="form-control" id="username" name="username" v-model="admin.username" placeholder="Username" readonly />
                                          </div>
                                          <div class="form-group">
                                              <label for="password"><fa-icon icon="unlock" /> Password</label>
                                              <input type="password" class="form-control" id="password" name="password" v-model="admin.password" placeholder="Password" />
                                          </div>
                                          <div class="form-group">
                                              <label for="comfirmPassword"><fa-icon icon="lock" /> Comfirm Password</label>
                                              <input type="password" class="form-control" id="comfirmPassword" name="comfirmPassword" v-model="admin.comfirmPassword" placeholder="Comfirm Password" />
                                          </div>
                                          <div class="form-group">
                                              <label for="phoneNumber"><fa-icon icon="phone-alt" /> Phone Number</label>
                                              <input type="text" class="form-control" id="phonenumber" name="phonenumber" v-model="admin.phonenumber" placeholder="Phonenumber" />
                                          </div>
                                          <br />
                                          <div class="form-group text-center">
                                              <button type="submit" id="btnUpdateAdmin" class="btn btn-success">
                                                  Update
                                              </button>
                                              <button type="reset" id="btnCancelAdmin" class="btn btn-secondary" @click="isCreateNew = true;isUpdate = false;">
                                                  Cancel
                                              </button>
                                          </div>
                                      </form>
                                  </div>
                                  <div class="col-md-8">
                                    <h2>List Admin Account</h2>
                                    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-show="this.isDelete">
                                      Do you want delete Admin Account: <strong>{{admin.username}}</strong> ?
                                      <button class="btn btn-success" style="width:45px; height: 45px" @click="comfirmDeleteAdminAccount(admin)"><fa-icon id="ic-yes" icon="check"></fa-icon></button>
                                      <button class="btn btn-danger" style="width:45px; height: 45px" @click="isDelete=false"><fa-icon id="ic-close" icon="times"></fa-icon></button>
                                    </div>
                                    <table class="table">
                                      <thead id="thead-admin">
                                        <tr>
                                          <th>Username</th>
                                          <th>Fullname</th>
                                          <th>Email</th>
                                          <th>Phone</th>
                                          <th>Detail</th>
                                          <th>Update</th>
                                          <th>Delete</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr v-for="(item, index) in listAdmin" :key="index">
                                          <td>{{ item.username }}</td>
                                          <td>{{ item.fullname }}</td>
                                          <td>{{ item.email }}</td>
                                          <td>{{ item.phonenumber }}</td>
                                          <td><button class="btn btn-primary" style="width:40px; height: 40px" @click="findAdminAccount(item.username)"><fa-icon icon="info" /></button></td>
                                          <td><button class="btn btn-success" style="width: 40px; height: 40px" @click="updateAdminAccount(item.username)"><fa-icon icon="user-edit" /></button></td>
                                          <td><button class="btn btn-danger" style="width:40px; height: 40px" @click="deleteAdminAccount(item.username)"><fa-icon icon="trash" /></button></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                              </div>
                          </div>
                          <div class="content-detail" v-show="this.isShowUserAccpunt">
                              <h1><fa-icon class="icon" icon="user" /> User Account</h1>
                              <hr />
                              <div class="row">
                                  <div class="col-md-3" v-show="this.isCreateNew">
                                    <h2>Create New</h2>
                                      <div class="alert alert-danger" role="alert" v-if="errorValidation.length">
                                          <li v-for="(error, index) in errorValidation" :key="index">
                                              {{ error }}
                                          </li>
                                      </div>
                                      <form id="formCreateUserAccount" @submit.prevent="createUserAccount()">
                                          <div class="form-group">
                                              <label for="fullname"><fa-icon icon="address-card" /> Fullname</label>
                                              <input type="text" class="form-control" name="fullname" v-model="user.fullname" placeholder="Fullname" />
                                          </div>
                                          <div class="form-group">
                                              <label for="email"><fa-icon icon="envelope" /> Email</label>
                                              <input type="email" class="form-control" name="email" v-model="user.email" placeholder="Email" />
                                          </div>
                                          <div class="form-group">
                                              <label for="userName"><fa-icon icon="user" /> Username</label>
                                              <input type="text" class="form-control" name="username" v-model="user.username" placeholder="Username" />
                                          </div>
                                          <div class="form-group">
                                              <label for="password"><fa-icon icon="unlock" /> Password</label>
                                              <input type="password" class="form-control" name="password" v-model="user.password" placeholder="Password" />
                                          </div>
                                          <div class="form-group">
                                              <label for="comfirmPassword"><fa-icon icon="lock" /> Comfirm Password</label>
                                              <input type="password" class="form-control" name="comfirmPassword" v-model="user.comfirmPassword" placeholder="Comfirm Password" />
                                          </div>
                                          <div class="form-group">
                                              <label for="address"><fa-icon icon="map-marker-alt" /> Address</label>
                                              <input type="text" class="form-control" name="address" v-model="user.address" placeholder="Address" />
                                          </div>
                                          <div class="form-group">
                                              <label for="phoneNumber"><fa-icon icon="phone-alt" /> Phone Number</label>
                                              <input type="text" class="form-control" name="phoneNumber" v-model="user.phonenumber" placeholder="Phonenumber" />
                                          </div>
                                          <br />
                                          <div class="form-group text-center">
                                              <button type="submit" id="btnSubmitUser" class="btn btn-primary">
                                                  Create
                                              </button>
                                              <button type="reset" id="btnResetUser" class="btn btn-secondary" @click="resetFormUser()">
                                                  Clear
                                              </button>
                                          </div>
                                      </form>
                                  </div>
                                  <div class="col-md-3" v-show="this.isUpdate">
                                    <h2>Update Information</h2>
                                      <div class="alert alert-danger" role="alert" v-if="errorValidation.length">
                                          <li v-for="(error, index) in errorValidation" :key="index">
                                              {{ error }}
                                          </li>
                                      </div>
                                      <form id="formUpdateUserAccount" @submit.prevent="comfirmUpdateUserAccount()">
                                          <div class="form-group">
                                              <label for="fullname"><fa-icon icon="address-card" /> Fullname</label>
                                              <input type="text" class="form-control" name="fullname" v-model="user.fullname" placeholder="Fullname" />
                                          </div>
                                          <div class="form-group">
                                              <label for="email"><fa-icon icon="envelope" /> Email</label>
                                              <input type="email" class="form-control" name="email" v-model="user.email" placeholder="Email" />
                                          </div>
                                          <div class="form-group">
                                              <label for="userName"><fa-icon icon="user" /> Username</label>
                                              <input type="text" class="form-control" name="username" v-model="user.username" placeholder="Username" readonly />
                                          </div>
                                          <div class="form-group">
                                              <label for="password"><fa-icon icon="unlock" /> Password</label>
                                              <input type="password" class="form-control" name="password" v-model="user.password" placeholder="Password" />
                                          </div>
                                          <div class="form-group">
                                              <label for="comfirmPassword"><fa-icon icon="lock" /> Comfirm Password</label>
                                              <input type="password" class="form-control" name="comfirmPassword" v-model="user.comfirmPassword" placeholder="Comfirm Password" />
                                          </div>
                                          <div class="form-group">
                                              <label for="address"><fa-icon icon="map-marker-alt" /> Address</label>
                                              <input type="text" class="form-control" name="address" v-model="user.address" placeholder="Phonenumber" />
                                          </div>
                                          <div class="form-group">
                                              <label for="phoneNumber"><fa-icon icon="phone-alt" /> Phone Number</label>
                                              <input type="text" class="form-control" name="phonenumber" v-model="user.phonenumber" placeholder="Phonenumber" />
                                          </div>
                                          <br />
                                          <div class="form-group text-center">
                                              <button type="submit" id="btnUpdateUser" class="btn btn-success">
                                                  Update
                                              </button>
                                              <button type="reset" id="btnCancelUser" class="btn btn-secondary" @click="isCreateNew = true;isUpdate = false;">
                                                  Cancel
                                              </button>
                                          </div>
                                      </form>
                                  </div>
                                  <div class="col-md-9">
                                    <h2>List User Account</h2>
                                    <div class="d-flex justify-content-end">
                                      <input type="text" id="valueSearch" placeholder="Search" v-model="valueSearch" v-on:keyup.13="searchUserAccount(valueSearch)"><fa-icon id="searchUserIcon" icon="search" />
                                    </div>
                                    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-show="this.isDelete">
                                      Do you want delete User Account: <strong>{{user.username}}</strong> ?
                                      <button class="btn btn-success" style="width:45px; height: 45px" @click="comfirmDeleteUserAccount(user)"><fa-icon id="ic-yes" icon="check"></fa-icon></button>
                                      <button class="btn btn-danger" style="width:45px; height: 45px" @click="isDelete=false"><fa-icon id="ic-close" icon="times"></fa-icon></button>
                                    </div>
                                    <table class="table" id="table-user">
                                      <thead id="thead-user">
                                        <tr>
                                          <th>Username</th>
                                          <th>Fullname</th>
                                          <th>Email</th>
                                          <th>Address</th>
                                          <th>Phone</th>
                                          <th>Detail</th>
                                          <th>Update</th>
                                          <th>Delete</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr v-for="(item, index) in listUser" :key="index">
                                          <td>{{ item.username }}</td>
                                          <td>{{ item.fullname }}</td>
                                          <td>{{ item.email }}</td>
                                          <td>{{ item.address }}</td>
                                          <td>{{ item.phonenumber }}</td>
                                          <td><button class="btn btn-primary" style="width:40px; height: 40px" @click="findUserAccount(item.username)"><fa-icon icon="info" /></button></td>
                                          <td><button class="btn btn-success" style="width: 40px; height: 40px" @click="updateUserAccount(item.username)"><fa-icon icon="user-edit" /></button></td>
                                          <td><button class="btn btn-danger" style="width:40px; height: 40px" @click="deleteUserAccount(item.username)"><fa-icon icon="trash" /></button></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                              </div>
                          </div>
                          <div class="content-detail" v-show="this.isShowFeedback">
                              <h1>Feedback</h1>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import axios from "axios";
const API_URL = "http://localhost:8088/";
export default {
  data() {
    return {
      adminSession: {
        username: "",
        fullname: "",
        email: "",
        phonenumber: "",
        password: "",
      },
      admin: {
        username: "",
        fullname: "",
        email: "",
        phonenumber: "",
        password: "",
      },
      user: {
        username: "",
        fullname: "",
        email: "",
        phonenumber: "",
        address: "",
        password: "",
      },
      listAdmin: [],
      listUser: [],
      errorValidation: [],
      currentTime: "",
      valueSearch: "",
      isShowHome: true,
      isShowCategory: false,
      isShowProduct: false,
      isShowOrders: false,
      isShowAdminAccount: false,
      isShowUserAccpunt: false,
      isShowFeedback: false,
      isCreateNew: true,
      isUpdate: false,
      isDelete: false
    };
  },
  mounted() {
    this.checkIsLogin();
    this.getTimeNow();
    this.getAllAdminAccount();
    this.getAllUserAccount();
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
          if (sessionLogin == null || sessionLogin != response.data.username) {
            this.$router.push({ name: "Login" });
          } else {
            this.admin = response.data;
            this.adminSession = response.data;
            //console.log(response.data);
          }
        })
        .catch(function (error) {
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
    resetFormAdmin: function () {
      this.errorValidation = [];
      this.admin.username = "";
      this.admin.fullname = "";
      this.admin.email = "";
      this.admin.phonenumber = "";
      this.admin.password = "";
    },
    createAdminAccount: function () {
      this.errorValidation = [];
      axios
        .post(API_URL + "admin/create", {
          username: this.admin.username,
          fullname: this.admin.fullname,
          email: this.admin.email,
          phonenumber: this.admin.phonenumber,
          password: this.admin.password,
        })
        .then((response) => {
          let data = response.data;
          if (data.code == 202) {
            this.errorValidation.push("Username already exist!");
            console.log(data);
          } else if (data.code == 200) {
            this.getAllAdminAccount();
            console.log(data);
          }
        }).then(
            this.admin.username = "",
            this.admin.fullname = "",
            this.admin.email = "",
            this.admin.phonenumber = "",
            this.admin.password = "",
            this.admin.comfirmPassword = ""
          )
        .catch((error) => console.log(error));
    },
    getAllAdminAccount: function () {
      axios
      .get(API_URL + "admin/getAllAdmin")
      .then((response) => {
        this.listAdmin = response.data;
        console.log(response.data);
        })
      .catch((error) => console.log(error));
    },
    findAdminAccount: function (username) {
      this.errorValidation = [];
      this.isCreateNew = true;
      this.isUpdate = false;
      this.isDelete = false;
      axios
        .get(API_URL + "admin/adminInfo?admin=" + username)
        .then((response) => {
            //this.admin = response.data;
            this.admin = response.data;
            //console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    updateAdminAccount: function (username) {
      this.errorValidation=[];
      axios
        .get(API_URL + "admin/adminInfo?admin=" + username)
        .then((response) => {
            //this.admin = response.data;
            this.admin = response.data;
            //console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      this.isCreateNew = false;
      this.isUpdate = true;
      this.isDelete = false;
      console.log(username);
    },
    comfirmUpdateAdminAccount: function () {
      this.errorValidation = [];
      axios
        .post(API_URL + "admin/update", {
          username: this.admin.username,
          fullname: this.admin.fullname,
          email: this.admin.email,
          phonenumber: this.admin.phonenumber,
          password: this.admin.password,
        })
        .then((response) => {
          let data = response.data;
          if (data.code == 402) {
            this.errorValidation.push("Username already exist!");
            console.log(data);
          } else if (data.code == 400) {
            this.isCreateNew = true;
            this.isUpdate = false;
            this.isDelete = false;
            this.getAllAdminAccount();
            console.log(data);
          }
        }).then(
            this.admin.username = "",
            this.admin.fullname = "",
            this.admin.email = "",
            this.admin.phonenumber = "",
            this.admin.password = "",
            this.admin.comfirmPassword = ""
          )
        .catch((error) => console.log(error));
    },
    deleteAdminAccount: function (username) {
      this.errorValidation = [];
      axios
        .get(API_URL + "admin/adminInfo?admin=" + username)
        .then((response) => {
          this.admin = response.data;
          if(this.adminSession.username == this.admin.username){
            console.log(this.adminSession.username + " and " + this.admin.username);
            this.errorValidation.push("Cannot delete! This account is activing!");
          } else {
            this.isCreateNew = true;
            this.isUpdate = false;
            this.isDelete = true;
          }
            //console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    comfirmDeleteAdminAccount: function () {
      this.errorValidation=[];
      axios
          .post(API_URL + "admin/delete", {
            username: this.admin.username,
            fullname: this.admin.fullname,
            email: this.admin.email,
            phonenumber: this.admin.phoneNumber,
            password: this.admin.password,
          })
          .then((response) => {
            let data = response.data;
            if (data.code == 302) {
              this.errorValidation.push("Username not exist!");
              console.log(data);
            } else if (data.code == 300) {
              this.isCreateNew = true;
              this.isUpdate = false;
              this.isDelete = false;
              this.getAllAdminAccount();
              //console.log(data);
            }
          }).then(
            this.admin.username = "",
            this.admin.fullname = "",
            this.admin.email = "",
            this.admin.phonenumber = "",
            this.admin.password = "",
            this.admin.comfirmPassword = ""
          )
          .catch((error) => console.log(error));
    },
    resetFormUser: function () {
      this.errorValidation = [];
      this.user.username = "";
      this.user.fullname = "";
      this.user.email = "";
      this.user.address = "";
      this.user.phonenumber = "";
      this.user.password = "";
    },
    createUserAccount: function () {
      this.errorValidation = [];
      axios
        .post(API_URL + "user/create", {
          username: this.user.username,
          fullname: this.user.fullname,
          email: this.user.email,
          address: this.user.address,
          phonenumber: this.user.phonenumber,
          password: this.user.password,
        })
        .then((response) => {
          let data = response.data;
          if (data.code == 202) {
            this.errorValidation.push("Username already exist!");
            console.log(data);
          } else if (data.code == 200) {
            this.getAllUserAccount();
            console.log(data);
          }
        }).then(
            this.user.username = "",
            this.user.fullname = "",
            this.user.email = "",
            this.user.address = "",
            this.user.phonenumber = "",
            this.user.password = "",
            this.user.comfirmPassword = ""
          )
        .catch((error) => console.log(error));
    },
    getAllUserAccount: function () {
      axios
      .get(API_URL + "user/getAllUser")
      .then((response) => {
        this.listUser = response.data;
        console.log(response.data);
        })
      .catch((error) => console.log(error));
    },
    findUserAccount: function (username) {
      this.errorValidation = [];
      this.isCreateNew = true;
      this.isUpdate = false;
      this.isDelete = false;
      axios
        .get(API_URL + "user/userInfo?user=" + username)
        .then((response) => {
            //this.admin = response.data;
            this.user = response.data;
            //console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    updateUserAccount: function (username) {
      this.errorValidation=[];
      axios
        .get(API_URL + "user/userInfo?user=" + username)
        .then((response) => {
            //this.admin = response.data;
            this.user = response.data;
            //console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      this.isCreateNew = false;
      this.isUpdate = true;
      this.isDelete = false;
      console.log(username);
    },
    comfirmUpdateUserAccount: function () {
      this.errorValidation = [];
      axios
        .post(API_URL + "user/update", {
          username: this.user.username,
          fullname: this.user.fullname,
          email: this.user.email,
          address: this.user.address,
          phonenumber: this.user.phonenumber,
          password: this.user.password,
        })
        .then((response) => {
          let data = response.data;
          if (data.code == 402) {
            this.errorValidation.push("Username already exist!");
            console.log(data);
          } else if (data.code == 400) {
            this.isCreateNew = true;
            this.isUpdate = false;
            this.isDelete = false;
            this.getAllUserAccount();
            console.log(data);
          }
        }).then(
            this.user.username = "",
            this.user.fullname = "",
            this.user.email = "",
            this.user.address = "",
            this.user.phonenumber = "",
            this.user.password = "",
            this.user.comfirmPassword = ""
          )
        .catch((error) => console.log(error));
    },
    deleteUserAccount: function (username) {
      this.errorValidation = [];
      axios
        .get(API_URL + "user/userInfo?user=" + username)
        .then((response) => {
          this.isCreateNew = true;
          this.isUpdate = false;
          this.isDelete = true;
          this.user = response.data;
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    comfirmDeleteUserAccount: function () {
      this.errorValidation=[];
      axios
          .post(API_URL + "user/delete", {
            username: this.user.username,
            fullname: this.user.fullname,
            email: this.user.email,
            address: this.user.address,
            phonenumber: this.user.phoneNumber,
            password: this.user.password,
          })
          .then((response) => {
            let data = response.data;
            if (data.code == 302) {
              this.errorValidation.push("Username not exist!");
              console.log(data);
            } else if (data.code == 300) {
              this.isCreateNew = true;
              this.isUpdate = false;
              this.isDelete = false;
              this.getAllUserAccount();
              //console.log(data);
            }
          }).then(
            this.user.username = "",
            this.user.fullname = "",
            this.user.email = "",
            this.user.address = "",
            this.user.phonenumber = "",
            this.user.password = "",
            this.user.comfirmPassword = ""
          )
          .catch((error) => console.log(error));
    },
    searchUserAccount: function (valueSearch) {
        console.log(valueSearch);
        axios
        .get(API_URL + "user/searchUser?param=" + valueSearch)
        .then((response) => {
            //this.admin = response.data;
            this.listUser = response.data;
            //this.getAllUserAccount();
            //console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
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
}

#img-branch {
  height: 10vh;
}

#div-logout {
  background-image: url(../assets/bg-header-admin.png);
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
  height: 100%;
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

/* Admin Account Style */
#formCreateAdminAccount {
  width: 90%;
}

input {
  height: 46px;
  margin-bottom: 10px;
}


table tr td {
  vertical-align: middle;
}

label {
  font-weight: bold;
}

#valueSearch{
  border: none;
  border-bottom: 1px solid black;
  width: 20vw;
  padding-left: 20px;
}
#valueSearch:focus{
    outline: none;
    border-bottom: 2px solid #74b9ff;

}
#searchUserIcon{
  margin-right: 1vw ;
  margin-left: -1.8vw;
}
</style>