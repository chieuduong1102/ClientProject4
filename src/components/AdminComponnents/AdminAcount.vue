<template>
  <div class="adminAcount">
      <h1><fa-icon class="icon" icon="user-cog" /> Admin Account</h1>
      <hr />
      <div class="row">
          <div class="col-md-4" v-show="this.isCreateNew">
              <h2>Create New</h2>
              <div class="alert alert-danger" role="alert" v-show="errorSubmit.length"><fa-icon icon="exclamation-circle" /> {{ errorSubmit }}</div>
              <form id="formCreateAdminAccount" @submit.prevent="createAdminAccount()">
                  <div class="form-group">
                      <label for="fullname"><fa-icon icon="address-card" /> Fullname</label>
                      <div class="detail-error-validation" v-show="validationFullname.length">
                          <span><fa-icon icon="exclamation-circle" /></span>
                          <span> {{ validationFullname }} </span>
                      </div>
                      <input type="text" class="form-control" id="fullnameAdmin" name="fullname" v-model="admin.fullname" placeholder="Fullname" />
                  </div>
                  <div class="form-group">
                      <label for="email"><fa-icon icon="envelope" /> Email</label>
                      <div class="detail-error-validation" v-show="validationEmail.length">
                          <span><fa-icon icon="exclamation-circle" /></span>
                          <span> {{ validationEmail }} </span>
                      </div>
                      <input type="email" class="form-control" id="emailAdmin" name="email" v-model="admin.email" placeholder="Email" />
                  </div>
                  <div class="form-group">
                      <label for="userName"><fa-icon icon="user" /> Username</label>
                      <div class="detail-error-validation" v-show="validationUsername.length">
                          <span><fa-icon icon="exclamation-circle" /></span>
                          <span> {{ validationUsername }} </span>
                      </div>
                      <input type="text" class="form-control" id="usernameAdmin" name="username" v-model="admin.username" placeholder="Username" />
                  </div>
                  <div class="form-group">
                      <label for="password"><fa-icon icon="unlock" /> Password</label>
                      <div class="detail-error-validation" v-show="validationPassword.length">
                          <span><fa-icon icon="exclamation-circle" /></span>
                          <span> {{ validationPassword }} </span>
                      </div>
                      <input type="password" class="form-control" id="passwordAdmin" name="password" v-model="admin.password" placeholder="Password" />
                  </div>
                  <div class="form-group">
                      <label for="comfirmPassword"><fa-icon icon="lock" /> Comfirm Password</label>
                      <div class="detail-error-validation" v-show="validationComfirmPassword.length">
                          <span><fa-icon icon="exclamation-circle" /></span>
                          <span> {{ validationComfirmPassword }} </span>
                      </div>
                      <input type="password" class="form-control" id="comfirmPasswordAdmin" name="comfirmPassword" v-model="admin.comfirmPassword" placeholder="Comfirm Password" />
                  </div>
                  <div class="form-group">
                      <label for="phoneNumber"><fa-icon icon="phone-alt" /> Phone Number</label>
                      <div class="detail-error-validation" v-show="validationPhonenumber.length">
                          <span><fa-icon icon="exclamation-circle" /></span>
                          <span> {{ validationPhonenumber }} </span>
                      </div>
                      <input type="text" class="form-control" id="phoneNumberAdmin" name="phoneNumber" v-model="admin.phonenumber" placeholder="Phonenumber" />
                  </div>
                  <br />
                  <div class="form-group text-center">
                      <button type="submit" id="btnSubmitAdmin" class="btn btn-primary">
                          Create
                      </button>
                      <button type="reset" id="btnResetAdmin" class="btn btn-secondary" @click="resetFormAdmin(),resetValidation()">
                          Clear
                      </button>
                  </div>
              </form>
          </div>
          <div class="col-md-4" v-show="this.isUpdate">
              <h2>Update Information</h2>
              <div class="alert alert-danger" role="alert" v-if="errorSubmit.length"><fa-icon icon="exclamation-circle" /> {{ errorSubmit }}</div>
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
                      <button
                          type="reset"
                          id="btnCancelAdmin"
                          class="btn btn-secondary"
                          @click="
                  resetValidation();
                  isCreateNew = true;
                  isUpdate = false;
                "
                      >
                          Cancel
                      </button>
                  </div>
              </form>
          </div>
          <div class="col-md-8">
              <h2>List Admin Account</h2>
              <div class="alert alert-danger alert-dismissible fade show" role="alert" v-show="this.isDelete">
                  Do you want delete Admin Account:
                  <strong>{{ admin.username }}</strong> ?
                  <button class="btn btn-success" style="width: 45px; height: 45px;" @click="comfirmDeleteAdminAccount(admin)">
                      <fa-icon id="ic-yes" icon="check"></fa-icon>
                  </button>
                  <button class="btn btn-danger" style="width: 45px; height: 45px;" @click="isDelete = false">
                      <fa-icon id="ic-close" icon="times"></fa-icon>
                  </button>
              </div>
              <v-app id="inspire">
                  <v-card>
                      <v-data-table :headers="headers" :items="this.listAdmin">
                          <template v-slot:item="row">
                              <tr>
                                  <td>{{ row.item.username }}</td>
                                  <td>{{ row.item.fullname }}</td>
                                  <td>{{ row.item.email }}</td>
                                  <td>{{ row.item.phonenumber }}</td>
                                  <td>
                                      <v-btn class="mx-2" fab dark small color="blue" @click="findAdminAccount(row.item.username)">
                                          <v-icon dark>mdi-information</v-icon>
                                      </v-btn>
                                  </td>
                                  <td>
                                      <v-btn class="mx-2" fab dark small color="green" @click="updateAdminAccount(row.item.username)">
                                          <v-icon dark>mdi-pencil</v-icon>
                                      </v-btn>
                                  </td>
                                  <td>
                                      <v-btn class="mx-2" fab dark small color="red" @click="deleteAdminAccount(row.item.username)">
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
      headers: [
        {
          text: "Username",
          align: "start",
          filterable: false,
          value: "username",
        },
        { text: "Fullname", value: "fullname" },
        { text: "Email", value: "email" },
        { text: "Phone", value: "phonenumber" },
        { text: "Detail" },
        { text: "Update" },
        { text: "Delete" },
      ],
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
      listAdmin: [],
      errorValidation: [],
      errorSubmit: "",
      validationFullname: "",
      validationEmail: "",
      validationUsername: "",
      validationPhonenumber: "",
      validationPassword: "",
      validationComfirmPassword: "",
      isCreateNew: true,
      isUpdate: false,
      isDelete: false,
    };
  },
  mounted() {
    this.getAllAdminAccount();
  },
  methods: {
    createAdminAccount: function () {
      this.resetValidation();
      this.validationForm();
      if (this.errorValidation.length == 0) {
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
              this.errorSubmit = "Username already exist!";
              console.log(data);
            } else if (data.code == 200) {
              this.getAllAdminAccount();
              console.log(data);
            }
          })
          .catch((error) => console.log(error))
          .then(this.resetFormAdmin());
      }
    },
    getAllAdminAccount: function () {
      axios
        .get(API_URL + "admin/getAllAdmin")
        .then((response) => {
          this.listAdmin = response.data;
          //console.log(response.data);
        })
        .catch((error) => console.log(error));
    },
    findAdminAccount: function (username) {
      this.resetValidation();
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
      this.resetValidation();
      axios
        .get(API_URL + "admin/adminInfo?admin=" + username)
        .then((response) => {
          //this.admin = response.data;
          this.admin = response.data;
          this.admin.comfirmPassword = this.admin.password;
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
      //this.resetValidation();
      this.validationForm();
      if (this.errorValidation.length == 0) {
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
              this.errorSubmit.push("Username already exist!");
              console.log(data);
            } else if (data.code == 400) {
              this.isCreateNew = true;
              this.isUpdate = false;
              this.isDelete = false;
              this.getAllAdminAccount();
              console.log(data);
            }
          })
          .catch((error) => console.log(error))
          .then(this.resetFormAdmin());
      }
    },
    deleteAdminAccount: function (username) {
      let sessionLogin = window.localStorage.getItem("sessionLogin");
      this.adminSession.username = sessionLogin;
      this.resetValidation();
      axios
        .get(API_URL + "admin/adminInfo?admin=" + username)
        .then((response) => {
          this.admin = response.data;
          if (this.adminSession.username == this.admin.username) {
            console.log(
              this.adminSession.username + " and " + this.admin.username
            );
            this.errorSubmit = "Cannot delete! This account is activing!";
          } else {
            this.isCreateNew = true;
            this.isUpdate = false;
            this.isDelete = true;
          }
          //console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(this.resetFormAdmin());
    },
    comfirmDeleteAdminAccount: function () {
      this.resetValidation();
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
            this.errorSubmit.push("Username not exist!");
            console.log(data);
          } else if (data.code == 300) {
            this.isCreateNew = true;
            this.isUpdate = false;
            this.isDelete = false;
            this.getAllAdminAccount();
            //console.log(data);
          }
        })
        .catch((error) => console.log(error))
        .then(this.resetFormAdmin());
    },
    validationForm: function () {
      this.errorValidation = [];
      if (this.admin.username == "") {
        this.validationUsername = "Username must not be empty!";
        this.errorValidation.push(this.validationUsername);
      }
      if (this.admin.fullname == "") {
        this.validationFullname = "Fullname must not be empty!";
        this.errorValidation.push(this.validationFullname);
      }
      if (this.admin.email == "") {
        this.validationEmail = "email must not be empty!";
        this.errorValidation.push(this.validationEmail);
      }
      if (this.admin.phonenumber == "") {
        this.validationPhonenumber = "phonenumber must not be empty!";
        this.errorValidation.push(this.validationPhonenumber);
      }
      if (this.admin.password == "") {
        this.validationPassword = "password must not be empty!";
        this.errorValidation.push(this.validationPassword);
      }
      if (this.admin.comfirmPassword == "") {
        this.validationComfirmPassword = "comfirmPassword must not be empty!";
        this.errorValidation.push(this.validationComfirmPassword);
      }
      if (this.admin.comfirmPassword != this.admin.password) {
        this.validationComfirmPassword = "ComfirmPassword incorrect!";
        this.errorValidation.push(this.validationComfirmPassword);
      }
    },
    resetFormAdmin: function () {
      this.resetValidation();
      this.admin.username = "";
      this.admin.fullname = "";
      this.admin.email = "";
      this.admin.phonenumber = "";
      this.admin.password = "";
      this.admin.comfirmPassword = "";
    },
    resetValidation: function () {
      this.errorValidation = [];
      (this.errorSubmit = ""),
        (this.validationFullname = ""),
        (this.validationEmail = ""),
        (this.validationUsername = ""),
        (this.validationPhonenumber = ""),
        (this.validationPassword = ""),
        (this.validationComfirmPassword = "");
    },
  },
};
</script>
<style scoped>
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
.alert-danger {
  color: red;
}
</style>