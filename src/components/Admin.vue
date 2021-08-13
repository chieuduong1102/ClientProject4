<template>
  <div class="admin">
    <div class="container">
      <div class="row">
        <div class="col-md-12 d-flex justify-content-end">
          Hi, <sppan id="adminName" v-model="admin">{{admin.fullname}}</sppan>
          <router-link to="Login" ><fa-icon icon="sign-out-alt" /><span @click="logout()"> Logout </span></router-link>
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
      admin:{
        "username" : "",
        "fullname" : "",
        "email" : "",
        "phoneNumber" : ""
      }
    };
  },
  mounted() {
    this.checkIsLogin();
  },
  methods: {
    checkIsLogin: function () {
      let sessionLogin = window.localStorage.getItem("sessionLogin");
        if (sessionLogin == null) {
            this.$router.push({ name: "Login" });
        }
      axios
        .get(API_URL + "adminInfo?user=" + sessionLogin)
        .then((response) => {
            if (sessionLogin == null || sessionLogin != response.data.username) {
                this.$router.push({ name: "Login" });
            } else {
              this.admin = response.data;
            }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    logout: function () {
      window.localStorage.removeItem("sessionLogin");
    },
  },
};
</script>
<style>
#adminName{
  font-weight: bold;
  color: #d63031;
  margin-right: 10px;
}
</style>