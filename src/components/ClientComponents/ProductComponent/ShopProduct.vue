<template>
  <div class="row">
    <div
      class="col-lg-4 col-md-4 col-sm-4 col-xs-12"
      v-for="product in getItems"
      :key="product.bid"
    >
      <div class="product_list">
        <div class="single_product repomsive_768">
          <ProductDisplay
            :bid="product.bid"
            :titleBook="product.titleBook"
            :price="product.price"
            :cat="product.bookcategoryList[0].cid.categoryName"
            :imageName="product.imageList[0]['nameFile']"
            :ratings="4.5"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="blog_pagination" v-if="getItems.length > 0">
          <ul class="pagination_list">
            <paginate
              :page-count="getPageCount"
              :page-range="3"
              :margin-pages="2"
              :click-handler="clickCallback"
              :prev-text="this.prev"
              :next-text="this.next"
            >
            </paginate>
          </ul>
        </div>
        <div class="emptyProduct" v-else>
          <div class="col-lg-12">
            <div class="hastech-404-area-list">
              <h2>Comming soon !!!</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDisplay from "./ProductDisplay.vue";
import Vue from "vue";
import Paginate from "vuejs-paginate";
Vue.component("paginate", Paginate);
import axios from "axios";
const API_URL = "http://localhost:8088/";

export default {
  props: {
    sortBy: String,
    methodSort: Boolean,
    valuePrice: Array,
    categoryIdSearch: Number,
    perPage: Number,
  },
  data() {
    return {
      products: [],
      currentPage: 1,
      next: "<i class='fa fa-caret-right'></i>",
      prev: "<i class='fa fa-caret-left'></i>",
    };
  },
  computed: {
    getItems: function () {
      let current = this.currentPage * this.perPage;
      let start = current - this.perPage;
      return this.products.slice(start, current);
    },
    getPageCount: function () {
      return Math.ceil(this.products.length / this.perPage);
    },
  },
  components: {
    ProductDisplay,
  },
  methods: {
    clickCallback: function (pageNum) {
      this.currentPage = Number(pageNum);
    },
    getAllBook: function () {
      axios.get(API_URL + "book/getAllBook").then((response) => {
        this.products = response.data;
        console.log(999996);
      });
    },
    getProductWithPrice: function () {
      axios
        .get(
          API_URL +
            "book/getAllBookByPrice?price=" +
            this.valuePrice[0] +
            "to" +
            this.valuePrice[1]
        )
        .then((response) => {
          this.products = response.data;
          console.log(999997);
        });
    },
    sortByName: function (methodSort) {
      if (methodSort) {
        return this.products.sort((a, b) =>
          a.titleBook > b.titleBook ? 1 : -1
        );
      } else {
        return this.products.sort((a, b) =>
          a.titleBook > b.titleBook ? -1 : 1
        );
      }
    },
    sortByPrice: function (methodSort) {
      if (methodSort) {
        return this.products.sort((a, b) => (a.price > b.price ? 1 : -1));
      } else {
        return this.products.sort((a, b) => (a.price > b.price ? -1 : 1));
      }
    },
    sortByPosition: function (methodSort) {
      if (methodSort) {
        return this.products.sort((a, b) => (a.bid > b.price ? 1 : -1));
      } else {
        return this.products.sort((a, b) => (a.bid > b.price ? -1 : 1));
      }
    },
    searchWithCategoryId: function (cid) {
      axios
        .get(API_URL + "book/getAllBookByCategory?cid=" + cid)
        .then((response) => {
          this.products = response.data;
          console.log(999998);
        });
    },
  },
  mounted() {
    if (!isNaN(this.$route.query.cid)) {
      // this.categoryIdSearch = this.$route.query.cid;
      console.log(15, this.$route.query.cid);
      this.searchWithCategoryId(this.$route.query.cid);
    }
  },
  watch: {
    sortBy: function () {
      if (this.sortBy === "Name") {
        this.sortByName(this.methodSort);
      } else if (this.sortBy === "Price") {
        this.sortByPrice(this.methodSort);
      } else if (this.sortBy === "Position") {
        this.sortByPosition(this.methodSort);
      }
    },
    methodSort: function () {
      if (this.sortBy === "Name") {
        this.sortByName(this.methodSort);
      } else if (this.sortBy === "Price") {
        this.sortByPrice(this.methodSort);
      } else if (this.sortBy === "Position") {
        this.sortByPosition(this.methodSort);
      }
    },
    valuePrice: function () {
      this.getProductWithPrice();
    },
    categoryIdSearch: function () {
      this.$router.push(this.$route.path);
      console.log(this.categoryIdSearch);
      if (this.categoryIdSearch != -1) {
        this.searchWithCategoryId(this.categoryIdSearch);
      }
    },
    perPage: function () {
      this.currentPage = 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.emptyProduct {
  text-align: center;
}
</style>