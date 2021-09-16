<template>
  <div class="order">
    <h1>Danh sách đơn hàng</h1>
    <hr />
    <h1>{{ orderDetail }}</h1>
    <div class="order-detail" v-show="isShowDetail">
      <fa-icon
        icon="times"
        id="icon-close"
        @click="isShowDetail = false"
      ></fa-icon>
      <br />
      <OrderDetail
        :orderId="orderDetail.oid"
        :userName="orderDetail.username"
      />
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
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  small
                  color="blue"
                  @click="showDetail(row.item.oid, row.item.userName)"
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
                  @click="getBookByBid(row.item.oid)"
                >
                  <v-icon dark>mdi-pencil</v-icon>
                </v-btn>
              </td>
              <td>
                <v-btn color="red" v-show="comfirmOrder" dark> Xác nhận </v-btn>
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
import OrderDetail from "./OrderDetail.vue";

export default {
  components: {
    OrderDetail,
  },
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
        { text: "Chi tiết" },
        { text: "Cập nhật" },
        { text: "Xác nhận" },
      ],
      orderList: [],
      orderDetail: {
        oid: 0,
        fullname: "",
        books: [],
        address: "",
        totalPrice: "",
      },
      book: {
        titleBook: "",
        amount: 0,
        price: 0,
      },
      comfirmOrder: true,
      cancelOrder: false,
      isShowDetail: false,
    };
  },
  methods: {
    findAllOrders: function () {
      axios
        .get(API_URL + "order/getOrderList")
        .then((response) => {
          this.orderList = response.data;
          this.getOrderDetailByOid(response.data[1].oid);
          this.findCustomerInformation(response.data[1].userName);
          this.orderDetail.address = response.data[1].deliveryAddress;
          this.orderDetail.totalPrice = response.data[1].totalPrice;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    showDetail: function (oid, userName) {
      this.isShowDetail = true;
      this.orderDetail.oid = oid;
      this.orderDetail.username = userName;
    },
    formatPrice(value) {
      return value.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    },
    getOrderDetailByOid(oid) {
      axios
        .get(API_URL + "order/getOrderDetail?oid=" + oid)
        .then((response) => {
          this.orderDetail.oid = oid;
          let list = response.data;
          for (let index = 0; index < list.length; index++) {
            this.getBookByBid(list[index].bid);
            //this.orderList.books[index].amount = list[index].amount;
          }
          console.log(response.data);
        })
        // .then( this.findCustomerInformation())
        .catch(function (error) {
          console.log(error);
        });
    },
    getBookByBid(bid) {
      axios
        .get(API_URL + "book/bookInfo?bid=" + bid)
        .then((response) => {
          let book = {
            amount: 0,
            titleBook : "",
            price: 0,
          }
          book.titleBook = response.data.titleBook;
          book.price = response.data.price;
          this.orderDetail.books.push(book);
          console.log(response.data.titleBook);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    findCustomerInformation(username) {
      axios
        .get(API_URL + "user/userInfo?user=" + username)
        .then((response) => {
          this.orderDetail.fullname = response.data.fullname;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    this.findAllOrders();
  },
};
</script>
<style scoped>
.order-detail {
  width: 82vw;
  height: 60vh;
  background-color: white;
  position: absolute;
  z-index: 10;
  -webkit-box-shadow: 0px 0px 5px 200px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 5px 200px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 5px 200px rgba(0, 0, 0, 0.5);
}

#icon-close {
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  right: 0;
  margin: 5px 10px;
}
#icon-close:hover {
  color: red;
}
</style>