<template>
  <div>
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12"  v-for="product in products" :key="product.bid">
        <div class="product_list">
          <div class="single_product">
            <ProductDisplay :bid="product.bid" :titleBook="product.titleBook" :price="product.price" :imageName=" product.imageList[0]['nameFile']" :ratings="4.5" />
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">   
        <a href="/Shop">
          <div class="view-more">
            <a class="a-view-more" href="/Shop">Xem thêm... </a>
          </div>
        </a>
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
    getBookHot: function () {
      axios.get(API_URL + "book/getBookHot").then((response) => {
        this.products = response.data;
      });
    },
  },
  mounted() {
    this.getBookHot();
  },
};
</script>

<style lang="scss" scoped>



.view-more{
  margin: 200px auto;
}
.a-view-more{
  font-size: 1rem;
  color: #000;
  text-decoration: underline;
}

.a-view-more:hover{
  color: rgb(255, 0, 0);
}
</style>