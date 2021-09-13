<template>
  <router-link :to="{ path: 'ProductDetail', query: { bid: bid } }">
    <div class="product_details">
      <figure style="width: 250px; height: 320px; margin: 10px auto 10px auto">
        <img :src="imageName" class="img-fluid img-product" alt="" />
      </figure>
      <p class="title-book" style="padding: 0 15px 0 15px">{{ titleBook }}</p>
      <div class="row price-rating">
        <div class="col-6">
          <p class="popular_price">{{ formatPrice(price) }} VNĐ</p>
        </div>
        <div class="col-6 text-center">
          <vue-star-rating
            text-class="custom-text"
            :star-size="18"
            v-model="rating"
            :read-only="true"
          ></vue-star-rating>
          <p class="popular_cat">{{ cat }}</p>
        </div>
        <div class="product_button">
          <div class="cart_details">
            <a
              href="cart.html"
              class="btn btn-warning"
              style="padding-top: 13px"
            >
              <fa-icon icon="shopping-cart" /> Thêm vào giỏ</a
            >
            <br />
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    bid: Number,
    titleBook: String,
    price: Number,
    cat: String,
    rating: Number,
    imageName: String,
  },
  data() {
    return {
      ratingStar: 3,
    };
  },
  methods: {
    formatPrice(value) {
      return value.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    },
  }
};
</script>

<style>
.custom-text {
  display: none;
}

.product_details {
  text-align: center;
  border-radius: 10px;
  margin: 0px 5px 5px 5px !important;
  height: 450px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);
}

.product_details {
  color: #898989;
  font-size: 14px;
  font-weight: 500;
  margin-right: 10px;
}

.product_details {
  color: #ff343b;
  font-size: 16px;
  font-weight: 600;
}
.img-product {
  margin-top: 3px;
  border-radius: 10px;
}
.title-book {
  color: black;
  font-weight: bolder;
  font-size: 1rem !important;
}
.popular_cat {
  color: #000;
  font-size: 0.8rem;
  font-weight: normal;
  text-align: left;
}
</style>