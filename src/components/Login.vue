<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-6" id="div-left">
          <div style="height: 25vh;"></div>
          <img src="../assets/logobs.png" class="img-fluid" alt="logo">
          <h1 class="text-center">MANAGEMENT</h1>
        </div>
        <div class="col-md-6">
          <div style="height: 25vh;"></div>
          <h1 class="text-center">LOGIN</h1>
            <p v-if="errorValidation.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="(error,index) in errorValidation" :key="index">{{ error }}</li>
            </ul>
          </p>
          <form @submit.prevent="login()">
            <div class="form-group">
              <label for="userName"><fa-icon icon="user" />  Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                name="username"
                v-model="user.username"
                placeholder="Enter username"
              />
            </div>
            <div class="form-group">
              <label for="password"><fa-icon icon="key" /> Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                v-model="user.password"
                placeholder="Password"
              />
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="rememberMeCheckBox"
              />
              <label class="form-check-label" for="rememberMeCheckBox" @click="rememberMe()"
                >Remember me</label
              >
            </div>
            <div class="form-group text-center">
              <button type="submit" id="btnSubmit" class="btn btn-primary">
                <span class="spinner-border" style="height: 20px; width: 20px;" v-if="loading"></span>  Login
              </button>
            </div>
            <div class="form-group text-center">
              You don't have admin account? <router-link to="Register" ><span @click="logout()"> Register!</span></router-link>
            </div>
          </form>
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
      user: {
        username: "",
        password: "",
      },
      listAdmin: [],
      notifyMessageLogin: null,
      errorValidation: [],
      errorsSys: {},
      loading: false,
      remember: false,
    };
  },
  methods: {
    login: function () {
      this.loading = true;
      axios
        .post(API_URL + "checkAdmin", {
          username: this.user.username,
          password: this.user.password,
        })
        .then((response) => {
          if (response.status === 200) {
            let resBody = response.data;
            if (resBody.code == 101) {
              this.errorValidation.push(resBody.msg);
              this.loading = false;
              console.log(resBody);
            } else if (resBody.code == 100) {
              window.localStorage.setItem("sessionLogin", this.user.username);

              this.$router.push({ name: "Admin" });
              this.loading = true;
              console.log(resBody);
            }
          }
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    axios
      .get(API_URL + "getAllAdmin")
      .then((response) => (this.listAdmin = response))
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
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

h1{
  font-size: 3rem;
}
</style>