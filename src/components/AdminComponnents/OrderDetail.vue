<template>
  <div class="container detail">
    <h1>{{ orderId }}</h1>
    <h1>{{ userName }}</h1>
    <h2></h2>
    <p>{{ orderDetail }}</p>
  </div>
</template>
<script>
// import axios from "axios";
// const API_URL = "http://localhost:8088/";
export default {
  props: {
    orderId: Number,
    userName: String,
  },
  data() {
    return {
      orderList: [],
      orderDetail: {
        oid: "",
        user: {
          username: "",
          fullname: "",
          phonenumber: "",
          email: "",
        },
        deliveryAddress: "",
        timeOrder: "",
        amount: "",
        totalPrice: 0,
        books: [],
      },
    };
  },
  methods: {
    
  },
  mounted() {
    // this.getOrderDetailByOid();
    //   this.getBookByBid();
    //   this.findCustomerInformation();
  },
};
</script>
<style scoped>
</style>