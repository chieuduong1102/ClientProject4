<template>
  <div class="container detail">
    <h1>{{ orderId }}</h1>
    <h1>{{ userName }}</h1>
    <h2></h2>
    <p>{{ orderDetail }}</p>
  </div>
</template>
<script>
import axios from "axios";
const API_URL = "http://localhost:8088/";
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
    getOrderDetailByOid() {
      axios
        .get(API_URL + "order/getOrderDetail?oid=" + this.$props.orderId)
        .then((response) => {
            this.orderDetail.oid = this.$props.orderId;
            this.findCustomerInformation();
            let list = response.data;
            for (let index = 0; index < list.length; index++) {
                this.getBookByBid(list[index].bid);
            }
           console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getBookByBid(bid) {
      axios
        .get(API_URL + "book/bookInfo?bid=" + bid)
        .then((response) => {
          let book = {
            bid: 0,
            titleBook: "",
            author: "",
            price: 0,
          };
          book.bid = response.data.bid;
          book.titleBook = response.data.titleBook;
          book.author = response.data.author;
          book.price = response.data.price;
          this.orderDetail.books.push(book);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    findCustomerInformation() {
      axios
        .get(API_URL + "user/userInfo?user=" + this.$props.userName)
        .then((response) => {
          this.orderDetail.user.username = response.data.username;
          this.orderDetail.user.fullname = response.data.fullname;
          this.orderDetail.user.email = response.data.email;
          this.orderDetail.user.phonenumber = response.data.phonenumber;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
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