<template>
  <div class="container detail">
    <div id="content-order-detail">
      <h3><fa-icon icon="file-alt" /> Thông tin đơn hàng</h3>
      <hr />
      <table>
        <tr>
          <td class="td-item">Họ và tên người nhận:</td>
          <td class="td-detail">{{ getOrderDetail.user.fullname }}</td>
        </tr>
        <tr>
          <td class="td-item">Số điện thoại:</td>
          <td class="td-detail">{{ getOrderDetail.user.phonenumber }}</td>
        </tr>
        <tr>
          <td class="td-item">Email:</td>
          <td class="td-detail">{{ getOrderDetail.user.email }}</td>
        </tr>
        <tr>
          <td class="td-item">Thời gian đặt hàng:</td>
          <td class="td-detail">{{ getOrderDetail.timeOrder }}</td>
        </tr>
        <tr>
          <td class="td-item">Địa chỉ giao hàng:</td>
          <td class="td-detail">{{ getOrderDetail.deliveryAddress }}</td>
        </tr>

        <tr>
          <td colspan="2"><b>Chi tiết đơn hàng</b></td>
        </tr>
        <tr v-for="(item, index) in getOrderDetail.books" :key="index">
          <td class="td-item">Sản phẩm:</td>
          <td>
            {{ item.titleBook }} x Số lượng: {{ item.amount }}
            <br />
            Đơn giá: {{ formatPrice(item.price) }}
          </td>
        </tr>
        <tr>
          <td colspan="2"><b>Ghi chú: </b>{{ getOrderDetail.note }}</td>
        </tr>
        <tr>
          <td class="td-item"><h4>Thành tiền:</h4></td>
          <td>
            <h4>{{ formatPrice(getOrderDetail.totalPrice) }}</h4>
          </td>
        </tr>
      </table>
      <br />
      <div v-if="getOrderDetail.status == 0">
        <v-btn @click="comfirmOrder(getOrderDetail.oid)"> Xác nhận </v-btn> |
        <v-btn  @click="cancelOrder(getOrderDetail.oid)"> Hủy bỏ </v-btn>
      </div>
      <!-- <v-btn color="red"> Xác nhận </v-btn> -->
    </div>
    <br /><br />
  </div>
</template>
<script>
import axios from "axios";
const API_URL = "http://localhost:8088/";
import { mapGetters } from "vuex";
// import emailjs from 'emailjs-com';
export default {
  data() {
    return {};
  },
  methods: {
    formatPrice(value) {
      return value.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    },
    comfirmOrder: function (oid) {
      axios
        .put(API_URL + "order/updateStatus?oid=" + oid + "&status=1")
        .then((response) => {
          console.log(response.data);
          if(response.data.code == 400){
            alert('Xác nhận đơn hàng thành công!');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    cancelOrder: function (oid) {
      axios
        .put(API_URL + "order/updateStatus?oid=" + oid + "&status=-1")
        .then((response) => {
          if(response.data.code == 400){
            alert('Hủy bỏ đơn hàng thành công!');
          }
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    
  },
  computed: {
    ...mapGetters(["getOrderDetail"]),
  },
  mounted() {},
};
</script>
<style scoped>
#content-order-detail {
  margin: 2vh 1vw;
}
table {
  width: 100%;
  border: 1px solid black;
}

table tr {
  border: 1px solid black;
}

.td-item {
  width: 40%;
  font-weight: bold;
}

</style>