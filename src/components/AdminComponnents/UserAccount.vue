<template>
  <div class="userAccount">
    <h1><fa-icon class="icon" icon="user" /> User Account</h1>
    <hr />
    <div class="row">
      <div class="col-md-3" v-show="this.isCreateNew">
        <h2>Create New</h2>
        <div class="alert alert-danger" role="alert" v-if="errorSubmit.length">
          <li v-for="(error, index) in errorSubmit" :key="index">
            {{ error }}
          </li>
        </div>
        <form id="formCreateUserAccount" @submit.prevent="createUserAccount()">
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
            />
          </div>
          <br />
          <div class="form-group text-center">
            <button type="submit" id="btnSubmitUser" class="btn btn-primary">
              Create
            </button>
            <button
              type="reset"
              id="btnResetUser"
              class="btn btn-secondary"
              @click="resetFormUser();resetValidation()"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
      <div class="col-md-3" v-show="this.isUpdate">
        <h2>Update Information</h2>
        <div class="alert alert-danger" role="alert" v-if="errorSubmit.length">
          <li v-for="(error, index) in errorSubmit" :key="index">
            {{ error }}
          </li>
        </div>
        <form
          id="formUpdateUserAccount"
          @submit.prevent="comfirmUpdateUserAccount()"
        >
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
              readonly
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
            />
          </div>
          <br />
          <div class="form-group text-center">
            <button type="submit" id="btnUpdateUser" class="btn btn-success">
              Update
            </button>
            <button
              type="reset"
              id="btnCancelUser"
              class="btn btn-secondary"
              @click="
                isCreateNew = true;
                isUpdate = false;
                resetValidation();
              "
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div class="col-md-9">
        <h2>List User Account</h2>
        <div
          class="alert alert-danger alert-dismissible fade show"
          role="alert"
          v-show="this.isDelete"
        >
          Do you want delete User Account:
          <strong>{{ user.username }}</strong> ?
          <button
            class="btn btn-success"
            style="width: 45px; height: 45px"
            @click="comfirmDeleteUserAccount(user)"
          >
            <fa-icon id="ic-yes" icon="check"></fa-icon>
          </button>
          <button
            class="btn btn-danger"
            style="width: 45px; height: 45px"
            @click="isDelete = false"
          >
            <fa-icon id="ic-close" icon="times"></fa-icon>
          </button>
        </div>
        <v-app id="inspire">
          <v-card>
            <v-card-title>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="this.listUser"
              :search="search"
            >
              <template v-slot:item="row">
                <tr>
                  <td>{{ row.item.username }}</td>
                  <td>{{ row.item.fullname }}</td>
                  <td>{{ row.item.email }}</td>
                  <td>{{ row.item.address }}</td>
                  <td>{{ row.item.phonenumber }}</td>
                  <td>
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      small
                      color="blue"
                      @click="findUserAccount(row.item.username)"
                    >
                      <v-icon dark>mdi-information</v-icon>
                    </v-btn>
                  </td>
                  <td>
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      small
                      color="green"
                      @click="updateUserAccount(row.item.username)"
                    >
                      <v-icon dark>mdi-pencil</v-icon>
                    </v-btn>
                  </td>
                  <td>
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      small
                      color="red"
                      @click="deleteUserAccount(row.item.username)"
                    >
                      <v-icon dark>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </v-card>
        </v-app>
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
      search: "",
      headers: [
        {
          text: "Username",
          align: "start",
          filterable: false,
          value: "username",
        },
        { text: "Fullname", value: "fullname" },
        { text: "Email", value: "email" },
        { text: "Address", value: "address" },
        { text: "Phone", value: "phonenumber" },
        { text: "Detail" },
        { text: "Update" },
        { text: "Delete" },
      ],
      user: {
        username: "",
        fullname: "",
        email: "",
        phonenumber: "",
        address: "",
        password: "",
      },
      listUser: [],
      listUserRS: [],
      errorValidation: [],
      errorSubmit: "",
      validationFullname: "",
      validationEmail: "",
      validationUsername: "",
      validationPhonenumber: "",
      validationAddress: "",
      validationPassword: "",
      validationComfirmPassword: "",
      valueSearch: "",
      isCreateNew: true,
      isUpdate: false,
      isDelete: false,
    };
  },
  mounted() {
    this.getAllUserAccount();
  },
  methods: {
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
      this.resetValidation();
      this.validationForm();
      if (this.errorValidation == 0) {
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
          })
          .then(
            (this.user.username = ""),
            (this.user.fullname = ""),
            (this.user.email = ""),
            (this.user.address = ""),
            (this.user.phonenumber = ""),
            (this.user.password = ""),
            (this.user.comfirmPassword = "")
          )
          .catch((error) => console.log(error));
      }
    },
    getAllUserAccount: function () {
      axios
        .get(API_URL + "user/getAllUser")
        .then((response) => {
          this.listUser = response.data;
          //console.log(response.data);
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
      this.errorValidation = [];
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
            this.errorSubmit.push("Username already exist!");
            console.log(data);
          } else if (data.code == 400) {
            this.isCreateNew = true;
            this.isUpdate = false;
            this.isDelete = false;
            this.getAllUserAccount();
            console.log(data);
          }
        })
        .then(
          (this.user.username = ""),
          (this.user.fullname = ""),
          (this.user.email = ""),
          (this.user.address = ""),
          (this.user.phonenumber = ""),
          (this.user.password = ""),
          (this.user.comfirmPassword = "")
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
      this.errorValidation = [];
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
            this.errorSubmit.push("Username not exist!");
            console.log(data);
          } else if (data.code == 300) {
            this.isCreateNew = true;
            this.isUpdate = false;
            this.isDelete = false;
            this.getAllUserAccount();
            //console.log(data);
          }
        })
        .then(
          (this.user.username = ""),
          (this.user.fullname = ""),
          (this.user.email = ""),
          (this.user.address = ""),
          (this.user.phonenumber = ""),
          (this.user.password = ""),
          (this.user.comfirmPassword = "")
        )
        .catch((error) => console.log(error));
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
};
</script>
<style scoped>
.btn {
  border-radius: 23px;
  width: 100px;
  height: 46px;
  font-size: 1.1rem;
  margin: 0 10px 0 10px;
}

#formCreateUserAccount {
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

#valueSearch {
  border: none;
  border-bottom: 1px solid black;
  width: 20vw;
  padding-left: 20px;
}
#valueSearch:focus {
  outline: none;
  border-bottom: 2px solid #74b9ff;
}
#searchUserIcon {
  margin-right: 1vw;
  margin-left: -1.8vw;
}
</style>