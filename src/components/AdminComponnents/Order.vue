<template>
  <div class="order">
    <h1><fa-icon icon="tasks"/> Danh sách đơn hàng</h1>
    <hr />
    <div class="div-order-detail" v-show="isShowDetail">
      <div class="order-detail">
        <fa-icon
          icon="times"
          id="icon-close"
          @click="closePopupDetail()"
        ></fa-icon>
        <br />
        <OrderDetail />
      </div>
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
              <td>{{ formatStatus(row.item.status) }}</td>
              <td>
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  small
                  color="blue"
                  @click="showDetail(row.item.oid)"
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
                <v-btn
                  color="green"
                  v-show="row.item.status==0 ? btnComfirmOrder = true : btnComfirmOrder = false"
                  dark
                  style="width: 75px; font-size: 0.7rem; margin-left: 3px"
                  @click="showDetail(row.item.oid)"
                >
                  Xác nhận
                </v-btn>
                <v-btn disabled elevation="2" 
                v-show="row.item.status==1? btnComfirmedOrder = true : btnComfirmedOrder = false"
                style="font-size: 0.7rem; margin-left: 3px">Đã xác nhận</v-btn>
                <v-btn
                  color="red"
                  v-show="row.item.status==0? btnCancelOrder = true : btnCancelOrder = false"
                  dark
                  style="width: 75px; font-size: 0.7rem; margin-left: 3px"
                  @click="showDetail(row.item.oid)"
                >
                  Hủy bỏ
                </v-btn>
                <v-btn disabled elevation="2"
                v-show="row.item.status==-1? btnCanceledOrder = true : btnCanceledOrder = false"
                style="font-size: 0.7rem; margin-left: 3px">Đã hủy bỏ</v-btn>
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
import { mapActions } from "vuex";

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
        { text: "Trạng thái", value: "status" },
        { text: "Chi tiết" },
        { text: "Cập nhật" },
        { text: "Xác nhận" },
      ],
      orderList: [],
      order: {},
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
        note: "",
        totalPrice: 0,
        status: 0,
        books: [],
      },
      book: {},
      btnComfirmOrder: true,
      btnComfirmedOrder: true,
      btnCancelOrder: true,
      btnCanceledOrder: true,
      isShowDetail: false,
    };
  },
  methods: {
    findAllOrders: function () {
      axios
        .get(API_URL + "order/getOrderList")
        .then((response) => {
          this.orderList = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getOrderByOid: function (oid) {
      axios
        .get(API_URL + "order/getOrder?oid=" + oid)
        .then((response) => {
          this.order = response.data;
          this.orderDetail.oid = oid;
          this.orderDetail.user.username = this.order.userName;
          this.orderDetail.timeOrder = this.order.timeOrder;
          this.orderDetail.deliveryAddress = this.order.deliveryAddress;
          this.orderDetail.totalPrice = this.order.totalPrice;
          this.orderDetail.note = this.order.note;
          this.orderDetail.status = this.order.status;
          this.getOrderDetailByOid(this.orderDetail);
          this.findCustomerInformation(this.orderDetail);
          //console.log(this.order);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    showDetail: function (oid) {
      this.isShowDetail = true;
      this.getOrderByOid(oid);
      this.changeOrderDetail(this.orderDetail);
    },
    ...mapActions(["changeOrderDetail"]),
    getOrderDetailByOid(orderDetail) {
      axios
        .get(API_URL + "order/getOrderDetail?oid=" + orderDetail.oid)
        .then((response) => {
          for (let index = 0; index < response.data.length; index++) {
            let book = {
              titleBook: "",
              author: "",
              price: 0,
              amount: 0,
            };
            book.amount = response.data[index].amount;
            orderDetail.books.push(book);
            this.getBookByBid(response.data[index].bid, book);
          }
          //console.log(response.data);
        })
        // .then( this.findCustomerInformation())
        .catch(function (error) {
          console.log(error);
        });
    },
    getBookByBid(bid, book) {
      axios
        .get(API_URL + "book/bookInfo?bid=" + bid)
        .then((response) => {
          book.titleBook = response.data.titleBook;
          book.author = response.data.author;
          book.price = response.data.price;
          //console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    findCustomerInformation(orderDetail) {
      axios
        .get(API_URL + "user/userInfo?user=" + orderDetail.user.username)
        .then((response) => {
          (orderDetail.user.fullname = response.data.fullname),
            (orderDetail.user.phonenumber = response.data.phonenumber),
            (orderDetail.user.email = response.data.email);
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
    closePopupDetail() {
      this.findAllOrders();
      this.orderDetail = {
        oid: "",
        user: {
          username: "",
          fullname: "",
          phonenumber: "",
          email: "",
        },
        deliveryAddress: "",
        timeOrder: "",
        note: "",
        totalPrice: 0,
        status: 0,
        books: [],
      };
      this.isShowDetail = false;
    },
  },
  mounted() {
    this.findAllOrders();
  },
};
</script>
<style scoped>
.order-detail {
  width: 600px;
  height: auto;
  background-color: white;
  position: absolute;
  margin: 5px 20%;
}
.div-order-detail {
  width: 100vw;
  height: 130vh;
  background-color: rgba(0, 0, 0, 0.376);
  position: absolute;
  top: 10vh;
  left: 0;
  z-index: 10;
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