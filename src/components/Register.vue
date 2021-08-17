<template>
  <div class="register">
      <div class="notify" v-if="isNotify">
          <table class="notifyContent">
              <fa-icon id="ic-close" icon="times" @click="closeNotifyAlert()"></fa-icon>
              <tr>
                  <td>
                      <div class="text-center">
                          <div id="icon">
                              <fa-icon icon="check"></fa-icon>
                          </div>
                          <h1>Register Success</h1>
                          <hr style="width: 50%; margin: auto;" />
                          <br />
                          <router-link to="Login">
                              <button class="btn btn-primary" id="btnLoginNotify">
                                  Login
                              </button>
                          </router-link>
                      </div>
                  </td>
              </tr>
          </table>
      </div>
      <div class="container">
          <div class="row">
              <div class="col-md-6" id="div-left">
                  <div style="height: 25vh;"></div>
                  <img src="../assets/full-logo.png" class="img-fluid" alt="logo" />
                  <h1 class="text-center">MANAGEMENT</h1>
              </div>
              <div class="col-md-6" id="div-right">
                  <div id="form-register">
                      <h1 class="text-center">REGISTER</h1>
                      <br />
                      <hr style="width: 60%; margin: auto;" />
                      <br />
                      <div v-if="errorValidation.length">
                          <div id="msgErrorValidation">
                              <b>Please correct the following error(s):</b>
                              <ul>
                                  <li v-for="(error, index) in errorValidation" :key="index">
                                      {{ error }}
                                  </li>
                              </ul>
                          </div>
                          <hr style="width: 60%; margin: auto;" />
                          <br />
                      </div>
                      <form @submit.prevent="register()">
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
                              <input type="text" class="form-control" id="username" name="username" v-model="admin.username" placeholder="Username" />
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
                              <input type="text" class="form-control" id="phoneNumber" name="phoneNumber" v-model="admin.phoneNumber" placeholder="Phonenumber" />
                          </div>
                          <br />
                          <div class="form-group text-center">
                              <button type="submit" id="btnSubmit" class="btn btn-primary">
                                  <span class="spinner-border" style="height: 20px; width: 20px;" v-if="loading"></span>
                                  Register
                              </button>
                          </div>
                          <div class="form-group text-center">
                              Already have an admin's account?
                              <router-link to="Login"><span> Login!</span></router-link>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
const API_URL = "http://localhost:8088/admin/";
export default {
  data() {
    return {
      admin: {
        username: "",
        password: "",
        comfirmPassword: "",
        fullname: "",
        email: "",
        phoneNumber: "",
      },
      loading: false,
      isNotify: false,
      isSuccess: false,
      errorValidation: [],
    };
  },
  methods: {
    register: function () {
      this.errorValidation = [];

      if (
        this.admin.username &&
        this.admin.fullname &&
        this.admin.email &&
        this.phoneNumber &&
        this.admin.password &&
        this.comfirmPassword
      ) {
        return true;
      }

      if (!this.admin.username) {
        this.errorValidation.push("Username required!");
      }

      if (!this.admin.fullname) {
        this.errorValidation.push("Fullname required!");
      }

      if (!this.admin.email) {
        this.errorValidation.push("Email required!");
      }

      if (!this.admin.phoneNumber) {
        this.errorValidation.push("Phone Number required!");
      }

      if (!this.admin.password) {
        this.errorValidation.push("Password required!");
      }

      if (!this.admin.comfirmPassword) {
        this.errorValidation.push("Comfirm Password required!");
      }

      if (
        this.admin.password &&
        this.admin.comfirmPassword &&
        this.admin.password != this.admin.comfirmPassword
      ) {
        this.errorValidation.push("Check Password and Comfirm Password");
      }
      this.loading = true;
      if (this.errorValidation.length == 0) {
        this.loading = false;
        axios
          .post(API_URL + "create", {
            username: this.admin.username,
            fullname: this.admin.fullname,
            email: this.admin.email,
            phonenumber: this.admin.phoneNumber,
            password: this.admin.password,
          })
          .then((response) => {
            this.loading = false;
            let data = response.data;
            if (data.code == 202) {
              this.errorValidation.push("Username already exist!");
              console.log(data);
            } else if (data.code == 200) {
              this.isSuccess = true;
              this.isNotify = true;
              console.log(data);
            }
          })
          .catch((error) => console.log(error));
      }
    },
    closeNotifyAlert: function () {
      this.isNotify = false;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.register {
  background-color: #f1f2f6;
  height: 100vh;
}
#form-register {
  margin-top: 5vh;
  padding: 10vh 0 20vh 0;
  width: 90%;
  height: 90vh;
  background-color: white;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 46px -20px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 46px -20px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 46px -20px rgba(0, 0, 0, 0.75);
}

.form-group,
.form-check {
  width: 60%;
  margin: 0 auto 20px auto;
}

h1 {
  font-size: 2.5rem;
}

.notify {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: #0000004b;
}

.notifyContent {
  margin: 30vh auto auto auto;
  width: 600px;
  height: 400px;
  background-color: #ffff;
  color: #2ecc71;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 46px -20px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 46px -20px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 46px -20px rgba(0, 0, 0, 0.75);
}

#icon {
  margin: -70px auto auto auto;
  width: 100px;
  height: 100px;
  border: 4px solid #ffff;
  border-radius: 50px;
  font-size: 4rem;
  font-weight: bold;
  color: white;
  background-color: #2ecc71;
}

.btn {
  border-radius: 23px;
  width: 150px;
  height: 46px;
  font-size: 1.1rem;
}

#ic-close {
  font-size: 2rem;
  float: right;
  margin: 15px 15px 0px 0px;
  color: black;
  cursor: pointer;
}
#ic-close:hover {
  color: red;
}

#msgErrorValidation {
  color: red;
  margin-left: 100px;
}

label {
  font-weight: bold;
}

@media (max-width: 1366px) {
  .register {
    height: 100%;
    font-size: 1rem;
  }
  h1{
    font-size: 1.9rem;
  }
  .btn{
    height: auto;
  }
  input{
    height: 35px;
  }
  #form-register {
    margin-top: 5vh;
    padding: 10vh 0 20vh 0;
    width: 90%;
    height: 90%;
  } 
}
</style>