<template>
  <div class="userAccount">
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
                      <button
                          type="reset"
                          id="btnCancelUser"
                          class="btn btn-secondary"
                          @click="isCreateNew = true;isUpdate = false;">
                          Cancel
                      </button>
                  </div>
              </form>
          </div>
          <div class="col-md-9">
              <h2>List User Account</h2>
              <div class="alert alert-danger alert-dismissible fade show" role="alert" v-show="this.isDelete">
                  Do you want delete User Account:
                  <strong>{{ user.username }}</strong> ?
                  <button class="btn btn-success" style="width: 45px; height: 45px;" @click="comfirmDeleteUserAccount(user)">
                      <fa-icon id="ic-yes" icon="check"></fa-icon>
                  </button>
                  <button class="btn btn-danger" style="width: 45px; height: 45px;" @click="isDelete = false">
                      <fa-icon id="ic-close" icon="times"></fa-icon>
                  </button>
              </div>
              <v-app id="inspire">
                  <v-card>
                      <v-card-title>
                          <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
                      </v-card-title>
                      <v-data-table :headers="headers" :items="this.listUser" :search="search">
                          <template v-slot:item="row">
                              <tr>
                                  <td>{{ row.item.username }}</td>
                                  <td>{{ row.item.fullname }}</td>
                                  <td>{{ row.item.email }}</td>
                                  <td>{{ row.item.address }}</td>
                                  <td>{{ row.item.phonenumber }}</td>
                                  <td>
                                      <v-btn class="mx-2" fab dark small color="blue" @click="findUserAccount(row.item.username)">
                                          <v-icon dark>mdi-information</v-icon>
                                      </v-btn>
                                  </td>
                                  <td>
                                      <v-btn class="mx-2" fab dark small color="green" @click="updateUserAccount(row.item.username)">
                                          <v-icon dark>mdi-pencil</v-icon>
                                      </v-btn>
                                  </td>
                                  <td>
                                      <v-btn class="mx-2" fab dark small color="red" @click="deleteUserAccount(row.item.username)">
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
            this.errorValidation.push("Username already exist!");
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
            this.errorValidation.push("Username not exist!");
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