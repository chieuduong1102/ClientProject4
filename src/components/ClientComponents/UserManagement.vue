<template>
  <div class="user-management">
    <HeaderHome />
    <div class="container body-content">
      <div class="row" style="margin: auto">
        <div class="col-md-3">
          <div class="text-center">
            <img
              src="https://sothis.es/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
              class="img-fluid"
              style="width: 150px; border-radius: 100px"
              alt=""
            />
            <h5>{{ user.fullname }}</h5>
            <p>{{ user.username }}</p>
          </div>
          <div
            class="col-12 menu-item"
            @click="
              showAccountDetail = true;
              showOrderDetail = false;
            "
          >
            <fa-icon icon="caret-right" /> Tài khoản của tôi
          </div>
          <div
            class="col-12 menu-item"
            @click="
              showAccountDetail = false;
              showOrderDetail = true;
            "
          >
            <fa-icon icon="caret-right" /> Đơn hàng của tôi
          </div>
        </div>
        <div class="col-md-9" v-if="showAccountDetail">
          <form
            id="formUpdateUserAccount"
            @submit.prevent="comfirmUpdateUserAccount()"
          >
            <h3>Hồ sơ của tôi</h3>
            <span>Quản lý thông tin hồ sơ để bảo mật an toàn</span>
            <br /><br />
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
              <button type="submit" id="btnUpdateUser" class="btn btn-success">
                Lưu
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-9" id="list-order-of-user" v-if="showOrderDetail">
          <h3>Đơn hàng của tôi</h3>
          <br /><br />
          <table>
            <tr>
              <th>Mã đơn</th>
              <th>Thời gian đặt hàng</th>
              <th>Địa chỉ GH</th>
              <th>Thành tiền</th>
              <th>Trạng thái ĐH</th>
            </tr>
            <tr v-for="(item, index) in listOrder" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.timeOrder }}</td>
              <td>{{ item.deliveryAddress }}</td>
              <td>{{ formatPrice(item.totalPrice) }}</td>
              <td>{{ formatStatus(item.status) }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <FooterHome />
  </div>
</template>
<script>
import HeaderHome from "../ClientComponents/HeaderHome.vue";
import FooterHome from "../ClientComponents/FooterHome.vue";
import axios from "axios";
const API_URL = "http://localhost:8088/";
export default {
  components: {
    HeaderHome,
    FooterHome,
  },
  data() {
    return {
      username: "",
      user: {
        username: "",
        fullname: "",
        email: "",
        phonenumber: "",
        address: "",
        password: "",
      },
      errorValidation: [],
      errorSubmit: "",
      validationFullname: "",
      validationEmail: "",
      validationUsername: "",
      validationPhonenumber: "",
      validationAddress: "",
      validationPassword: "",
      validationComfirmPassword: "",
      showAccountDetail: true,
      showOrderDetail: false,
      listOrder: [],
    };
  },
  mounted() {
    this.username = localStorage.getItem("sessionLoginClient");
    this.findUserAccount(this.username);
    this.findAllOrderOfUser(this.username);
  },
  methods: {
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
    comfirmUpdateUserAccount: function () {
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
            console.log(data);
          } else if (data.code == 400) {
            alert(data.msg);
            console.log(data);
          }
        })
        .catch((error) => console.log(error));
    },
    findAllOrderOfUser: function (username) {
      this.errorValidation = [];
      this.isCreateNew = true;
      this.isUpdate = false;
      this.isDelete = false;
      axios
        .get(API_URL + "order/getOrderByUserName?username=" + username)
        .then((response) => {
          //this.admin = response.data;
          this.listOrder = response.data;
          //console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    formatPrice(value) {
      return value.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    },
    formatStatus(x) {
      switch (x) {
        case -1:
          return "Đã hủy";
        case 0:
          return "Chờ xử lí";
        case 1:
          return "Đã xác nhận";
      }
    },
  },
};
</script>
<style scoped>
.body-content {
}
.menu-item {
  height: auto;
  padding: 17px 15px 17px 15px;
  cursor: pointer;
  font-size: 0.8rem;
  text-align: left;
  background: linear-gradient(to left, rgb(255, 255, 255) 50%, #eb4d4b 50%)
    right;
  background-size: 200%;
  transition: 0.2s ease-out;
  color: black;
  text-align: center;
  font-size: 1rem;
}
.menu-item:hover {
  color: white;
  background-position: left;
}

#formUpdateUserAccount {
  margin: 0 5vw 0 5vw;
}

#list-order-of-user {
  padding: 0 5vw 0 5vw;
}
table {
  width: 100%;
}
tr td{
  padding: 5px;
}
</style>