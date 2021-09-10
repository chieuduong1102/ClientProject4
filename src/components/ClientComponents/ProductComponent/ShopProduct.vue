<template>
  <div class="row">
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12" v-for="product in products" :key="product.bid">
      <div class="product_list">
        <div class="single_product repomsive_768">
          <ProductDisplay
            :bid="product.bid"
            :titleBook="product.titleBook"
            :price="product.price"
            :imageName="product.imageList[0]['nameFile']"
            :ratings="4.5"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="blog_pagination">
          <ul class="pagination_list">
            <li>
              <a href="#"><i class="fa fa-caret-left"></i></a>
            </li>
            <li><a href="#">1</a></li>
            <li class="active"><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li>
              <a href="#"><i class="fa fa-caret-right"></i></a>
            </li>
          </ul>
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
  props: {
    sortBy: String
  },
  data() {
    return {
      products: [],
    };
  },
  components: {
    ProductDisplay,
  },
  methods: {
    getAllBook: function () {
      axios.get(API_URL + "book/getAllBook").then((response) => {
        this.products = response.data;
      });
    },
  },
  created() {
    this.getAllBook();
  }
};
</script>

<style lang="scss" scoped>
</style>