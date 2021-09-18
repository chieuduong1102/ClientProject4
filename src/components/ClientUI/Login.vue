<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-6" id="div-left">
          <div style="height: 25vh;"></div>
          <img src="../../assets/full-logo.png" class="img-fluid" alt="logo" />
        </div>
        <div class="col-md-6">
          <div id="form-login">
            <h1 class="text-center">LOGIN</h1>
            <br />
            <div class="alert alert-danger" role="alert" v-show="errorSubmit.length" style="width: 60%; margin: auto;">
              <fa-icon icon="exclamation-circle" /> {{ errorSubmit }}
              <br />
            </div>
            <br />
            <form @submit.prevent="login()">
              <div class="form-group">
                <label for="userName"><fa-icon icon="user" /> Username</label>
                <div class="detail-error-validation" v-show="validationUsername.length">
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationUsername }} </span>
                </div>
                <input type="text" class="form-control" id="username" name="username" v-model="client.username" @keydown="validationUsername=''" placeholder="Enter username" />
              </div>
              <div class="form-group">
                <label for="password"><fa-icon icon="key" /> Password</label>
                <div class="detail-error-validation" v-show="validationPassword.length">
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationPassword }} </span>
                </div>
                <input type="password" class="form-control" id="password" name="password" v-model="client.password" @keydown="validationUsername=''" placeholder="Password" />
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="rememberMeCheckBox" v-model="rememberMe" @click="rememberLogin()" style="cursor: pointer;" />
                <label class="form-check-label" for="rememberMeCheckBox">Remember me</label>
              </div>
              <div class="form-group text-center">
                <button type="submit" id="btnSubmit" class="btn btn-primary">
                  <span class="spinner-border" style="height: 20px; width: 20px;" v-if="loading"></span>
                  Login
                </button>
              </div>
              <div class="form-group text-center">
                Don't have client's account?
                <router-link to="RegisterClient"><span> Register!</span></router-link>
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
const API_URL = "http://localhost:8088/";
export default {
  data() {
    return {
      client: {
        username: "",
        password: "",
      },
      listClient: [],
      rememberMe: "",
      isRememberMe: false,
      errorValidation: [],
      errorSubmit: "",
      validationUsername: "",
      validationPassword: "",
      loading: false,
    };
  },
  methods: {
    login: function () {
      this.errorValidation = [];
      this.loading = true;
      this.validationForm();
      if (this.errorValidation.length == 0) {
        axios
          .post(API_URL + "user/checkUser", {
            username: this.client.username,
            password: this.client.password,
          })
          .then((response) => {
            let resBody = response.data;
            if (resBody.code == 101) {
              this.errorSubmit = resBody.msg;
              this.errorValidation.push(this.errorSubmit);
              this.loading = false;
              console.log(resBody);
            } else if (resBody.code == 100) {
              // this.errorValidation = [];
              this.resetValidation();
              window.localStorage.setItem("sessionLoginClient", this.client.username);
              window.localStorage.setItem("sessionLoginRememberClient", this.client.username);
              this.$router.push({ name: "Shop" });
              this.loading = true;
              console.log(resBody);
            }
          })
          .catch((error) => console.log(error));
      }
    },
    validationForm: function () {
      this.errorValidation = [];
      if (this.client.username == "") {
        this.validationUsername = "Username must not be empty!";
        this.errorValidation.push(this.validationUsername);
      }
      if (this.client.password == "") {
        this.validationPassword = "password must not be empty!";
        this.errorValidation.push(this.validationPassword);
      }
    },
    resetValidation: function () {
      this.errorValidation = [];
      this.validationUsername = "";
      this.validationPassword = "";
    },
    rememberLogin : function(){
      this.isRememberMe = !this.isRememberMe;
      console.log(this.isRememberMe);
      if(this.isRememberMe == true){
        console.log(localStorage.get("sessionLoginRememberClient"));
      } else {
        localStorage.clear("sessionLoginRememberClient");
        console.log(localStorage.get("sessionLoginRememberClient"));
      }
    }
  },
  mounted() {
    if(localStorage.getItem("sessionLoginRememberClient") != null){
      this.rememberMe="remember"
      this.isRememberMe = true;
      axios
      .get(API_URL + "user/userInfo?user=" + localStorage.getItem("sessionLoginRememberClient"))
      .then((response) => {
        this.client.username = response.data.username;
      })
      .catch(function (error) {
        console.log(error);
      });
        
    } else {
      this.isRememberMe = false;
    }
    console.log(this.isRememberMe);
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
  margin: auto auto 20px auto;
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

label {
  font-weight: bold;
}
</style>