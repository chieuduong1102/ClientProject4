<template>
  <div class="register">
    <div class="notify" v-if="isNotify">
      <table class="notifyContent">
        <fa-icon
          id="ic-close"
          icon="times"
          @click="closeNotifyAlert()"
        ></fa-icon>
        <tr>
          <td>
            <div class="text-center">
              <div id="icon">
                <fa-icon icon="check"></fa-icon>
              </div>
              <h1>Register Success</h1>
              <hr style="width: 50%; margin: auto" />
              <br />
              <router-link to="LoginClient">
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
          <div style="height: 25vh"></div>
          <h1 class="text-center">WELCOME</h1>
          <img src="../../assets/full-logo.png" class="img-fluid" alt="logo" />
        </div>
        <div class="col-md-6" id="div-right">
          <div id="form-register">
            <h1 class="text-center">REGISTER</h1>
            <div
              class="alert alert-danger"
              role="alert"
              v-if="errorSubmit.length"
              style="width: 60%; margin: auto;"
            >
                <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ errorSubmit }} </span>
            </div>
            <br />
            <form @submit.prevent="register()">
              <div class="form-group">
                <div
                  class="detail-error-validation"
                  v-show="validationFullname.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationFullname }} </span>
                </div>
                <label for="fullname"
                  ><fa-icon icon="address-card" /> Fullname</label
                >
                <input
                  type="text"
                  class="form-control"
                  name="fullname"
                  v-model="user.fullname"
                  placeholder="Fullname"
                  @keydown="validationFullname=''"
                />
              </div>
              <div class="form-group">
                <label for="email"><fa-icon icon="envelope" /> Email</label>
                <div
                  class="detail-error-validation"
                  v-show="validationEmail.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationEmail }} </span>
                </div>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  v-model="user.email"
                  placeholder="Email"
                  @keydown="validationEmail=''"
                />
              </div>
              <div class="form-group">
                <label for="userName"><fa-icon icon="user" /> Username</label>
                <div
                  class="detail-error-validation"
                  v-show="validationUsername.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationUsername }} </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  name="username"
                  v-model="user.username"
                  placeholder="Username"
                  @keydown="validationUsername=''"
                />
              </div>
              <div class="form-group">
                <label for="password"><fa-icon icon="unlock" /> Password</label>
                <div
                  class="detail-error-validation"
                  v-show="validationPassword.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationPassword }} </span>
                </div>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  v-model="user.password"
                  placeholder="Password"
                   @keydown="validationPassword=''"
                />
              </div>
              <div class="form-group">
                <label for="comfirmPassword"
                  ><fa-icon icon="lock" /> Comfirm Password</label
                >
                <div
                  class="detail-error-validation"
                  v-show="validationComfirmPassword.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationComfirmPassword }} </span>
                </div>
                <input
                  type="password"
                  class="form-control"
                  name="comfirmPassword"
                  v-model="user.comfirmPassword"
                  placeholder="Comfirm Password"
                  @keydown="validationComfirmPassword=''"
                />
              </div>
              <div class="form-group">
                <label for="address"
                  ><fa-icon icon="map-marker-alt" /> Address</label
                >
                <div
                  class="detail-error-validation"
                  v-show="validationAddress.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationAddress }} </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  name="address"
                  v-model="user.address"
                  placeholder="Address"
                  @keydown="validationAddress=''"
                />
              </div>
              <div class="form-group">
                <label for="phoneNumber"
                  ><fa-icon icon="phone-alt" /> Phone Number</label
                >
                <div
                  class="detail-error-validation"
                  v-show="validationPhonenumber.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationPhonenumber }} </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  name="phoneNumber"
                  v-model="user.phonenumber"
                  placeholder="Phonenumber"
                  @keydown="validationPhonenumber=''"
                />
              </div>
              <br />
              <div class="form-group text-center">
                <button type="submit" id="btnSubmit" class="btn btn-primary">
                  Register
                </button>
              </div>
              <div class="form-group text-center">
                Already have an user's account?
                <router-link to="LoginClient"><span> Login!</span></router-link>
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
const API_URL = "http://localhost:8088/user/";
export default {
  data() {
    return {
      user: {
        username: "",
        fullname: "",
        email: "",
        phonenumber: "",
        address: "",
        password: "",
      },
      loading: false,
      isNotify: false,
      isSuccess: false,
      errorValidation: [],
      errorSubmit: "",
      validationFullname: "",
      validationEmail: "",
      validationUsername: "",
      validationPhonenumber: "",
      validationAddress: "",
      validationPassword: "",
      validationComfirmPassword: "",
    };
  },
  methods: {
    register: function () {
      this.validationForm();
      if (this.errorValidation == 0) {
        axios
          .post(API_URL + "create", {
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
              this.errorSubmit = "Username already exist!";
              console.log(data);
            } else if (data.code == 200) {
              this.isSuccess = true;
              this.isNotify = true;
              this.resetValidation();
              
            }
          })
          .catch((error) => console.log(error));
      }
    },
    closeNotifyAlert: function () {
      this.isNotify = false;
    },
    resetValidation: function () {
      this.errorValidation = [];
      (this.errorSubmit = ""),
        (this.validationFullname = ""),
        (this.validationEmail = ""),
        (this.validationUsername = ""),
        (this.validationPhonenumber = ""),
        (this.validationAddress = ""),
        (this.validationPassword = ""),
        (this.validationComfirmPassword = "");
    },
    validationForm: function () {
      this.errorValidation = [];
      if (this.user.username == "") {
        this.validationUsername = "Username must not be empty!";
        this.errorValidation.push(this.validationUsername);
      }
      if (this.user.fullname == "") {
        this.validationFullname = "Fullname must not be empty!";
        this.errorValidation.push(this.validationFullname);
      }
      if (this.user.email == "") {
        this.validationEmail = "email must not be empty!";
        this.errorValidation.push(this.validationEmail);
      }
      if (this.user.phonenumber == "") {
        this.validationPhonenumber = "phonenumber must not be empty!";
        this.errorValidation.push(this.validationPhonenumber);
      }
      if (this.user.password == "") {
        this.validationPassword = "password must not be empty!";
        this.errorValidation.push(this.validationPassword);
      }
      if (this.user.comfirmPassword == "") {
        this.validationComfirmPassword = "comfirmPassword must not be empty!";
        this.errorValidation.push(this.validationComfirmPassword);
      }
      if (this.user.comfirmPassword != this.user.password) {
        this.validationComfirmPassword = "ComfirmPassword incorrect!";
        this.errorValidation.push(this.validationComfirmPassword);
      }
      if (this.user.address == "") {
        this.validationAddress = "address must not be empty!";
        this.errorValidation.push(this.validationAddress);
      }
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
  padding: 5vh 0 1vh 0;
  width: 90%;
  height: auto;
  background-color: white;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 46px -20px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 46px -20px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 46px -20px rgba(0, 0, 0, 0.75);
}

form{
    width: 100%;
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
  width: 70px;
  height: 70px;
  border: 4px solid #ffff;
  border-radius: 50px;
  font-size: 2.5rem;
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
    display: block !important;
  }
  h1 {
    font-size: 1.9rem;
  }
  .btn {
    height: auto;
  }
  input {
    height: 35px;
  }
  #form-register {
    margin-top: 5vh;
    padding: 10vh 0 20vh 0;
    width: 90%;
    height: auto;
  }
}
</style>