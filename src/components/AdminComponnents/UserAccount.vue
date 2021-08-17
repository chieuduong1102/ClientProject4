<template>
  <div class="userAccount">
    <h1><fa-icon class="icon" icon="user" /> User Account</h1>
    <hr />
    <div class="row">
      <div class="col-md-3" v-show="this.isCreateNew">
        <h2>Create New</h2>
        <div
          class="alert alert-danger"
          role="alert"
          v-if="errorValidation.length"
        >
          <li v-for="(error, index) in errorValidation" :key="index">
            {{ error }}
          </li>
        </div>
        <form id="formCreateUserAccount" @submit.prevent="createUserAccount()">
          <div class="form-group">
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
              @click="resetFormUser()"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
      <div class="col-md-3" v-show="this.isUpdate">
        <h2>Update Information</h2>
        <div
          class="alert alert-danger"
          role="alert"
          v-if="errorValidation.length"
        >
          <li v-for="(error, index) in errorValidation" :key="index">
            {{ error }}
          </li>
        </div>
        <form
          id="formUpdateUserAccount"
          @submit.prevent="comfirmUpdateUserAccount()"
        >
          <div class="form-group">
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
            <input
              type="text"
              class="form-control"
              name="address"
              v-model="user.address"
              placeholder="Phonenumber"
            />
          </div>
          <div class="form-group">
            <label for="phoneNumber"
              ><fa-icon icon="phone-alt" /> Phone Number</label
            >
            <input
              type="text"
              class="form-control"
              name="phonenumber"
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
              "
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div class="col-md-9">
        <h2>List User Account</h2>
        <div class="d-flex justify-content-end">
          <input
            type="text"
            id="valueSearch"
            placeholder="Search"
            v-model="valueSearch"
            v-on:keyup.13="searchUserAccount(valueSearch)"
          /><fa-icon id="searchUserIcon" icon="search" />
        </div>
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
              <td>
                <button
                  class="btn btn-primary"
                  style="width: 40px; height: 40px"
                  @click="findUserAccount(item.username)"
                >
                  <fa-icon icon="info" />
                </button>
              </td>
              <td>
                <button
                  class="btn btn-success"
                  style="width: 40px; height: 40px"
                  @click="updateUserAccount(item.username)"
                >
                  <fa-icon icon="user-edit" />
                </button>
              </td>
              <td>
                <button
                  class="btn btn-danger"
                  style="width: 40px; height: 40px"
                  @click="deleteUserAccount(item.username)"
                >
                  <fa-icon icon="trash" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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
      user: {
        username: "",
        fullname: "",
        email: "",
        phonenumber: "",
        address: "",
        password: "",
      },
      listUser: [],
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