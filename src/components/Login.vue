<template>
  <div class="login">
      <div class="container">
          <div class="row">
              <div class="col-md-6" id="div-left">
                  <div style="height: 25vh;"></div>
                  <img src="../assets/full-logo.png" class="img-fluid" alt="logo" />
                  <h1 class="text-center">MANAGEMENT</h1>
              </div>
              <div class="col-md-6">
                  <div id="form-login">
                      <h1 class="text-center">LOGIN</h1>
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
                      <form @submit.prevent="login()">
                          <div class="form-group">
                              <label for="userName"><fa-icon icon="user" /> Username</label>
                              <input type="text" class="form-control" id="username" name="username" v-model="admin.username" placeholder="Enter username" required />
                          </div>
                          <div class="form-group">
                              <label for="password"><fa-icon icon="key" /> Password</label>
                              <input type="password" class="form-control" id="password" name="password" v-model="admin.password" placeholder="Password" required />
                          </div>
                          <div class="form-check">
                              <input type="checkbox" class="form-check-input" id="rememberMeCheckBox" />
                              <label class="form-check-label" for="rememberMeCheckBox">Remember me</label>
                          </div>
                          <div class="form-group text-center">
                              <button type="submit" id="btnSubmit" class="btn btn-primary">
                                  <span class="spinner-border" style="height: 20px; width: 20px;" v-if="loading"></span>
                                  Login
                              </button>
                          </div>
                          <div class="form-group text-center">
                              Don't have admin's account?
                              <router-link to="Register"><span> Register!</span></router-link>
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
      },
      listAdmin: [],
      notifyMessageLogin: null,
      errorValidation: [],
      loading: false,
    };
  },
  methods: {
    login: function () {
      this.errorValidation = [];
      this.loading = true;

      //if (this.errorValidation.length == 0) {
        axios
          .post(API_URL + "checkAdmin", {
            username: this.admin.username,
            password: this.admin.password,
          })
          .then((response) => {
            let resBody = response.data;
            if (resBody.code == 101) {
              this.errorValidation.push(resBody.msg);
              this.loading = false;
              console.log(resBody);
            } else if (resBody.code == 100) {
              this.errorValidation = [];
              window.localStorage.setItem("sessionLogin", this.admin.username);
              this.$router.push({ name: "Admin" });
              this.loading = true;
              console.log(resBody);
            }
          })
          .catch((error) => console.log(error));
      //}
    },
  },
  mounted() {

  },
};
</script>

<style scoped>
.login {
  background-color: #f1f2f6;
  height: 100vh;
}

.form-group,
.form-check {
  width: 60%;
  margin: 0 auto 20px auto;
}
#btnSubmit {
  width: 180px;
}

.container {
  height: 100vh;
}

h1 {
  font-size: 2.5rem;
}

#form-login {
  margin-top: 5vh;
  padding: 20vh 0 20vh 0;
  width: 90%;
  height: 90vh;
  background-color: white;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 46px -20px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 46px -20px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 46px -20px rgba(0, 0, 0, 0.75);
}
.btn {
  border-radius: 23px;
  width: 150px;
  height: 46px;
  font-size: 1.1rem;
}

#msgErrorValidation {
  color: red;
  margin-left: 100px;
}
</style>