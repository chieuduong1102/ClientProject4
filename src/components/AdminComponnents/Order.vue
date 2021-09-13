<template>
  <div class="order">
    <h1>Danh sách đơn hàng</h1>
    <hr />
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
          :items="this.orderList"
          :search="search"
        >
          <template v-slot:item="row">
            <tr>
              <td>B2021{{ row.item.oid }}</td>
              <td>{{ row.item.userName }}</td>
              <td>{{ row.item.timeOrder }}</td>
              <td>{{ row.item.deliveryAddress }}</td>
              <td>{{ formatPrice(row.item.totalPrice) }}</td>
              <td>{{ row.item.note }}</td>
              <td>
                <v-btn class="mx-2" fab dark small color="green" @click="findCustomerInformation(row.item.userName)">
                  <v-icon dark>mdi-pencil</v-icon>
                </v-btn>
                <v-btn class="mx-2" fab dark small color="blue" @click="getBookByBid(82)">
                  <v-icon dark>mdi-information</v-icon>
                </v-btn>
              </td>
              <td>
                <v-btn color="blue" v-show="comfirmOrder" dark>
                  Xác nhận
                </v-btn>
                <v-btn color="red" v-show="cancelOrder" dark> Hủy bỏ </v-btn>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-card>
    </v-app>
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
          text: "Mã đơn hàng",
          align: "start",
          filterable: false,
          value: "oid",
        },
        { text: "Người đặt", value: "userName" },
        { text: "Thời gian ĐH", value: "timeOrder" },
        { text: "Địa chỉ GH", value: "deliveryAddress" },
        { text: "Tổng tiền", value: "totalPrice" },
        { text: "Ghi chú", value: "note" },
        { text: "Update" },
        { text: "Comfirm" },
      ],
      orderList: [],
      orderDetail: {
        oid: "",
        user: {
            username : "",
            fullname: "",
            phonenumber: "",
            email : "",
        },
        deliveryAddress: "",
        timeOrder: "",
        amount: "",
        totalPrice: 0,
        book: {
            bid: 0,
            titleBook: "",
            author: "",
            price: 0,
        },
      },
      comfirmOrder: true,
      cancelOrder: false,
    };
  },
  methods: {
    findAllOrders: function () {
      axios
        .get(API_URL + "order/getOrderList")
        .then((response) => {
          this.orderList = response.data;
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getOrderDetailByOid(oid) {
      axios
        .get(API_URL + "order/getOrderDetail?oid="+oid)
        .then((response) => {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getBookByBid(bid){
        axios
        .get(API_URL + "book/bookInfo?bid="+bid)
        .then((response) => {
            this.orderDetail.book.bid =  response.data.bid
            this.orderDetail.book.titleBook = response.data.titleBook,
            this.orderDetail.book.author = response.data.author,
            this.orderDetail.book.price = response.data.price,
            console.log(this.orderDetail.book);
        })
        .catch(function (error) {
          console.log(error);
        }); 
    },
    findCustomerInformation(username){
        axios
        .get(API_URL + "user/userInfo?user="+username)
        .then((response) => {
            this.orderDetail.user.username =  response.data.username
            this.orderDetail.user.fullname =  response.data.fullname
            this.orderDetail.user.email =  response.data.email
            this.orderDetail.user.phonenumber =  response.data.phonenumber
            console.log(this.orderDetail.user);
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
  },
  mounted() {
    this.findAllOrders();
  },
};
</script>
<style scoped>
</style>