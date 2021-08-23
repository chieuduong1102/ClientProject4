<template>
  <div class="product_details">
    <a href="product.html" target="main">
      <figure style="width: 250px;height: 300px; margin: 10px auto 10px auto">
        <!-- <img src="../../../assets/css/img/product/pr1.png" alt="" /> -->
        <img :src="nameFile" class="img-fluid" alt="" />
        <!-- <v-app id="inspire" style="height: 300px">
          <v-carousel cycle hide-delimiter-background :show-arrows="false">
            <v-carousel-item>
              <v-sheet height="auto">
                <v-row class="fill-height" align="center" justify="center">
                  <img src="../../../assets/css/img/product/pr1.png" alt="" />
                </v-row>
              </v-sheet>
            </v-carousel-item>
            <v-carousel-item>
              <v-sheet>
                <v-row class="fill-height" align="center" justify="center">
                  <img src="../../../assets/css/img/product/pr2.png" alt="" />
                </v-row>
              </v-sheet>
            </v-carousel-item>
            <v-carousel-item>
              <v-sheet>
                <v-row class="fill-height" align="center" justify="center">
                  <img src="../../../assets/css/img/product/pr3.png" alt="" />
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-app> -->
      </figure>
    </a>
    <h2 class="title-book">{{ titleBook }}</h2>
    <div class="row price-rating">
      <div class="col-md-6">
          <p class="popular_price">$ {{ price }}</p>
      </div>
      <div class="col-md-6 text-center">
          <vue-star-rating text-class="custom-text" :star-size="18" v-model="ratingStar" :read-only="true" ></vue-star-rating>
      </div>
      <div class="product_button">
        <div class="cart_details">
          <a href="cart.html" class="btn btn-warning" style="padding-top: 13px">
            <fa-icon icon="shopping-cart" /> Add to cart</a>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleBook: String,
    price: Number,
    rating: Number,
    imageName: String,
  },
  data() {
    return {
      ratingStar: 3,
      // nameFile: '../../../assets/css/img/product/pr1.png'
      //   nameFile: 'C:/Users/chieu/OneDrive/Desktop/backup/ClientProject4/src/assets/css/img/product/pr2.png'
      nameFile: 'https://thienminhbook.com/wp-content/uploads/2021/05/TrieuPhuThucTinh.jpg'
    };
  },
};
</script>

<style>
  .custom-text {
    display: none;
  }

</style>