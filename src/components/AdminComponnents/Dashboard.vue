<template>
  <div class="dashboard">
    <h1>Thống kê</h1>
    <hr />
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="row content">
            <div class="col-md-12">
              <fa-icon icon="user-cog" style="font-size: 6rem" />
              <h4>Admin</h4>
            </div>
            <div class="col-md-12"><div class="quantity-item">{{listAdmin.length}}</div></div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="row content">
            <div class="col-md-12">
              <fa-icon icon="user" style="font-size: 6rem" />
              <h4>User</h4>
            </div>
            <div class="col-md-12"><div class="quantity-item">{{listUser.length}}</div></div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="rowcontent">
            <div class="col-md-12">
              <fa-icon icon="book-open" style="font-size: 6rem" />
              <h4>Product</h4>
            </div>
            <div class="col-md-12"><div class="quantity-item">{{listProduct.length}}</div></div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="rowcontent">
            <div class="col-md-12">
              <fa-icon icon="tasks" style="font-size: 6rem" />
              <h4>Order</h4>
            </div>
            <div class="col-md-12"><div class="quantity-item">{{listOrder.length}}</div></div>
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
      listAdmin: {},
      listUser: {},
      listProduct: {},
      listOrder: {},
    };
  },
  methods: {
    getAllAdmin() {
      axios
        .get(API_URL + "admin/getAllAdmin")
        .then((response) => {
          this.listAdmin = response.data;
        })
        .catch((error) => console.log(error));
    },
    getAllUser(){
       axios
        .get(API_URL + "user/getAllUser")
        .then((response) => {
          this.listUser = response.data;
        })
        .catch((error) => console.log(error));  
    },
    getAllProduct(){
       axios
        .get(API_URL + "book/getAllBook")
        .then((response) => {
          this.listProduct = response.data;
        })
        .catch((error) => console.log(error));  
    },
    getAllOrder(){
       axios
        .get(API_URL + "order/getOrderList")
        .then((response) => {
          this.listOrder = response.data;
        })
        .catch((error) => console.log(error));  
    }
  },
  mounted() {
      this.getAllAdmin();
      this.getAllUser();
      this.getAllProduct();
      this.getAllOrder();
  },
};
</script>
<style scoped>
.col-md-3 {
  text-align: center;
  height: 60vh;
  padding-top: 20vh;
}

.col-md-3 > div {
  margin: auto;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
}

.col-md-3:nth-child(1) > div {
  width: 200px;
  height: 200px;
  background-image: linear-gradient(120deg, #fda1a1 0%, #fbc2c2 100%);
  margin: left;
  border-radius: 150px;
  cursor: pointer;
}
.col-md-3:nth-child(2) > div {
  width: 200px;
  height: 200px;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  margin: left;
  border-radius: 150px;
  cursor: pointer;
}
.col-md-3:nth-child(3) > div {
  width: 200px;
  height: 200px;
  background-image: linear-gradient(120deg, #f7fda1 0%, #f0fbc2 100%);
  margin: left;
  border-radius: 150px;
  cursor: pointer;
}
.col-md-3:nth-child(4) > div {
  width: 200px;
  height: 200px;
  background-image: linear-gradient(120deg, #a1fdb8 0%, #c2fbd5 100%);
  margin: left;
  border-radius: 150px;
  cursor: pointer;
}
.quantity-item {
  width: 50px;
  height: 50px;
  margin: auto;
  font-size: 2rem;
  border: 1px white solid;
  border-radius: 25px;
}

.col-md-3:nth-child(1),
.col-md-3:nth-child(2),
.col-md-3:nth-child(3) {
  border-right: 1px solid rgb(231, 231, 231);
}

.quantity-item {
  margin-top: -30px;
}
</style>