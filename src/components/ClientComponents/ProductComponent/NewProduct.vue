<template>
  <div>
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12" v-for="product in products" :key="product.bid">
        <div class="product_list">
          <div class="single_product">
            <ProductDisplay :bid="product.bid" :titleBook="product.titleBook" :price="product.price" :imageName=" product.imageList[0]['nameFile']" :ratings="4.5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDisplay from "./ProductDisplay.vue";
import axios from "axios";
const API_URL = "http://localhost:8088/";
export default {
  data() {
    return {
      products: [],
    };
  },
  components: {
    ProductDisplay,
  },
  methods: {
    getNewBooks: function () {
      axios
        .get(API_URL + "book/getNewBooks")
        .then((response) => {
          this.products = response.data;
        });
    },
  },
  created() {
    this.getNewBooks();
  },
};
</script>

<style lang="scss" scoped>
</style>