<template>
  <div>
    <HeaderHome />
    <div class="breadcrumbs-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="breadcrumb-single blog_top_area">
              <ul id="breadcrumbs">
                <li>
                  <a href="HomePage"><i class="fa fa-home"></i>Home</a>
                </li>
                <li><span>Ι</span></li>
                <li>Shopping Cart</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="itemsCart == null || itemsCart.length == 0">
      <div class="hastech-404-content" style="text-align: center">
        <h2>Cart is empty !!!</h2>
      </div>
    </div>
    <div
      v-if="itemsCart != null && itemsCart.length != 0"
      class="shopping_cart_area"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="shopping-cart-table">
              <table class="cart_items">
                <tr>
                  <th>Xoá</th>
                  <th>Ảnh mô tả</th>
                  <th>Tên sản phẩm</th>
                  <th>Đơn giá</th>
                  <th>Số lượng</th>
                  <th>Thành tiền</th>
                </tr>
                <tr v-for="item in itemsCart" :key="item.bid">
                  <td>
                    <img
                      class="img-fluid img-product"
                      src="../../assets/css/img/arrow/btn_trash.gif"
                      @click="removeItem(item.bid)"
                    />
                  </td>
                  <td>
                    <router-link
                      :to="{ path: 'ProductDetail', query: { bid: item.bid } }"
                      ><img
                        class="img-fluid img-product"
                        :src="item.image"
                        alt=""
                    /></router-link>
                  </td>
                  <td>
                    <router-link
                      :to="{ path: 'ProductDetail', query: { bid: item.bid } }"
                      >{{ item.title }}</router-link
                    >
                  </td>
                  <td>{{ formatPrice(item.price) }}</td>
                  <td>
                    <input
                      type="number"
                      @change="changeQuantity(item.bid, $event.target.value)"
                      :value="item.quantity"
                      title="Qty"
                      min="1"
                      class="input-text qty"
                    />
                  </td>
                  <td>{{ formatPrice(item.price * item.quantity) }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="itemsCart != null && itemsCart.length != 0"
      class="row button_cart"
    >
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12"></div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="shopping_button">
          <a href="Shop">
            <button type="button" title="shop">Tiếp tục mua sắm</button>
          </a>
        </div>
        <div class="shopping_button">
          <button @click="clearCart()" type="button" title="shop">
            Xoá toàn bộ
          </button>
        </div>
      </div>
    </div>
    <!--End Shopping Cart top area -->
    <!--Start Estimate Shipping,Discount,Total checkout area -->
    <div
      v-if="itemsCart != null && itemsCart.length != 0"
      class="cart-collaterals-item"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="shopping_details_des">
              <h2>Địa điểm giao hàng</h2>
              <h3>Vui lòng nhập địa chỉ giao hàng của bạn.</h3>
              <div class="shopping_form">
                <h4>Địa chỉ<span>*</span></h4>
                <input
                  v-model="deliveryAddress"
                  class="input-text validate-postcode"
                  type="text"
                  value=""
                />
                <div style="color: red" v-if="deliveryAddress == ''">
                  {{ errorAddress }}<br />
                </div>
                <br />
                <h4>Ghi chú</h4>
                <input
                  v-model="note"
                  class="input-text validate-postcode"
                  type="text"
                  name="note"
                  value=""
                />
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="total_price">
              <table class="total_rate">
                <tr>
                  <th>Tổng đơn hàng</th>
                  <th>{{ formatPrice(totalOrder()) }}</th>
                </tr>
              </table>
            </div>
            <div class="check_out_simble review_button">
              <button
                type="submit"
                title="Submit Review"
                class="button"
                @click="createOrder()"
              >
                Thanh toán
              </button>
            </div>
          </div>
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
  data() {
    return {
      itemsCart: JSON.parse(window.localStorage.getItem("cart")),
      userName: window.localStorage.getItem("sessionLoginClient"),
      deliveryAddress: "",
      note: "",
      errorAddress: "",
    };
  },
  methods: {
    removeItem(bid) {
      this.$store.commit("removeItem", bid);
      this.itemsCart = JSON.parse(window.localStorage.getItem("cart"));
    },
    clearCart() {
      this.$store.commit("clearCart");
      this.itemsCart = JSON.parse(window.localStorage.getItem("cart"));
    },
    changeQuantity(bid, quantity) {
      this.$store.commit("changeQuantity", { bid, quantity });
      this.itemsCart = JSON.parse(window.localStorage.getItem("cart"));
    },
    totalOrder() {
      let totalItem = 0;
      for (let i = 0; i < this.itemsCart.length; i++) {
        totalItem += this.itemsCart[i]["quantity"] * this.itemsCart[i]["price"];
      }
      return totalItem;
    },
    createOrder() {
      if (this.deliveryAddress == "") {
        this.errorAddress = "Xin hãy nhập địa chỉ giao hàng";
        return false;
      }

      let result = null;
      let today = new Date();
      let date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

      let newOrder = {
        timeOrder: date,
        userName: this.userName,
        deliveryAddress: this.deliveryAddress,
        totalPrice: parseInt(this.totalOrder()),
        note: this.note,
        status: 0,
      };
      let cart = this.itemsCart;

      axios
        .post(API_URL + "order/create", JSON.stringify(newOrder), {
          headers: {
            "content-type": "application/json",
          },
        })
        .then((response) => {
          for (let i = 0; i < cart.length; i++) {
            let item = {
              bid: cart[i]["bid"],
              oid: response.data,
              amount: cart[i]["price"],
            };

            axios
              .post(API_URL + "order/orderdetail", JSON.stringify(item), {
                headers: {
                  "content-type": "application/json",
                },
              })
              .then((response) => {
                result = response.data;
              });
          }
        });
        this.clearCart();

      return result;
    },
    formatPrice(value) {
      return value.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    },
  },
  components: {
    HeaderHome,
    FooterHome,
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 20px;
}
.shopping_cart_area {
  margin-top: 0px;
}
.button_cart {
  margin-top: 20px;
  text-align: center;
}
.hastech-404-content h2 {
  letter-spacing: 0px !important;
}
img {
  cursor: pointer;
}
</style>