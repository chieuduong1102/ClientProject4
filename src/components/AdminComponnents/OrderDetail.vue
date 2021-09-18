<template>
  <div class="container detail">
    <div id="content-order-detail">
      <p>{{ getOrderDetail }}</p>
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
          <td class="td-item">Họ và tên người nhận:</td>
          <td class="td-detail">{{ getOrderDetail.user.fullname }}</td>
        </tr>
        <tr>
          <td class="td-item">Họ và tên người nhận:</td>
          <td class="td-detail">{{ getOrderDetail.user.fullname }}</td>
        </tr>
        <tr>
          <td class="td-item">Họ và tên người nhận:</td>
          <td class="td-detail">{{ getOrderDetail.user.fullname }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
// const API_URL = "http://localhost:8088/";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {},
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

table tr td {
  border: 1px solid black;
}

.td-item {
  width: 40%;
  font-weight: bold;
}
.td-detail {
}
</style>