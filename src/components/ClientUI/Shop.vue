<template>
  <div>
    <HeaderHome />
    <div class="breadcrumbs_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="breadcrumb-single">
              <ul id="breadcrumbs">
                <li>
                  <a href="HomePage"><i class="fa fa-home"></i>Home</a>
                </li>
                <li><span>Ι</span></li>
                <li>Shop</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="clothing_product_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <div class="catagory_price_color">
              <div class="catagory_area">
                <h2>Thể loại</h2>
                <ul class="catagory" :class="getAll == true ? 'active' : ''">
                  <li @click="setAll()">
                    <a><i class="fa fa-angle-right"></i>Tất cả</a>
                  </li>
                </ul>
                <ul
                  class="catagory"
                  v-for="category in categories"
                  :class="categoryIdSearch == category.cid ? 'active' : ''"
                  :key="category.id"
                >
                  <li @click="searchWithCategory(category.cid)">
                    <a
                      ><i class="fa fa-angle-right"></i
                      >{{ category.categoryName }}</a
                    >
                  </li>
                </ul>
              </div>
              <div class="priceing_area">
                <h2>Tìm theo giá</h2>
                <div class="info_widget">
                  <div class="price_filter">
                    <div class="price_slider_amount">
                      <vue-range-slider
                        v-model="value"
                        :min="min"
                        :max="max"
                        :formatter="formatter"
                      ></vue-range-slider>
                    </div>
                  </div>
                </div>
              </div>
              <div class="catagory_area"></div>
            </div>
            <div class="popular_tag_area">
              <div class="popular_items">
                <h2>Phổ biến</h2>
                <ul id="single_popular">
                  <li><a href="#">Sách công nghệ</a></li>
                  <li><a href="#">Tiểu thuyết</a></li>
                  <li><a href="#">Chăm sóc gia đình</a></li>
                  <li><a href="#">Tiếng anh</a></li>
                  <li><a href="#">Truyện tranh</a></li>
                  <li><a href="#">Truyện cổ tích</a></li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="popular_tag_area popular_tag_response">
                  <div class="popular_items">
                    <h2>Đề xuất cho bạn</h2>
                    <div class="conpany_product_details">
                      <router-link
                        :to="{
                          path: 'ProductDetail',
                          query: { bid: products[8].bid },
                        }"
                      >
                        <a href="#"
                          ><img
                            :src="products[8].imageList[0]['nameFile']"
                            alt=""
                        /></a>
                        <h4 class="suggets">
                          <a href="#">{{ products[8].titleBook }}</a>
                        </h4>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="popular_tag_area">
                  <div class="popular_items">
                    <h2>Sản phẩm nổi bật</h2>
                  </div>
                </div>
                <div class="clothing_carousel_list">
                  <div
                    class="single_clothing_product"
                    v-for="(product, index) in highlight"
                    :key="product.bid"
                  >
                    <div class="clothing_item" v-if="index < 4">
                      <router-link
                        :to="{
                          path: 'ProductDetail',
                          query: { bid: product.bid },
                        }"
                      >
                        <div class="product_clothing_details">
                          <img :src="product.imageList[0]['nameFile']" alt="" />
                          <h2>
                            <a href="#">{{ product.titleBook }}</a>
                          </h2>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <p>{{ formatPrice(product.price) }}</p>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="catagory_banner" style="background">
                  <img
                    src="../../assets/css/img/banner/category.jpg"
                    class="img-fluid"
                    style="height: 225px"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="my_tabs">
              <ul class="tab_style">
                <li class="active">
                  <a data-toggle="tab"
                    ><span><i class="fa fa-th"></i></span
                  ></a>
                </li>
              </ul>
              <div class="limiter">
                <label>Show</label>
                <select v-model="perPage">
                  <option :value="page" :key="page" v-for="page in pages">
                    {{ page }}
                  </option>
                </select>
                per page
              </div>
              <div class="sort-by">
                <label>Sort By</label>
                <select v-model="valueSort">
                  <option :value="val" :key="val" v-for="val in sortBy">
                    {{ val }}
                  </option>
                </select>
                <a @click="setSort()"
                  ><i
                    :class="[
                      methodSort
                        ? 'fa fa-long-arrow-up'
                        : 'fa fa-long-arrow-down',
                    ]"
                  ></i
                ></a>
              </div>
              <div class="tab-content tab_content_style">
                <Shop-Product
                  :sortBy="valueSort"
                  :methodSort="methodSort"
                  :valuePrice="value"
                  :categoryIdSearch="categoryIdSearch"
                  :perPage="perPage"
                  :getAll="getAll"
                  @cartWasEdited="itemsCart = $event"
                  :itemsCart="itemsCart"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Branch />
    <FooterHome />
  </div>
</template>

<script>
import HeaderHome from "../ClientComponents/HeaderHome.vue";
import FooterHome from "../ClientComponents/FooterHome.vue";
import ShopProduct from "../ClientComponents/ProductComponent/ShopProduct.vue";
import Branch from "../ClientComponents/Branch.vue";
import VueRangeSlider from "vue-range-component";
import "vue-range-component/dist/vue-range-slider.css";
import axios from "axios";
const API_URL = "http://localhost:8088/";

export default {
  data() {
    return {
      value: [0, 400000],
      pages: [9, 12, 24],
      sortBy: ["Position", "Name", "Price"],
      methodSort: true,
      categories: [],
      valueSort: "Position",
      categoryIdSearch: -1,
      perPage: 9,
      getAll: true,
      itemsCart: JSON.parse(window.localStorage.getItem("cart")),
      products: [],
      highlight: []
    };
  },
  methods: {
    setSort() {
      this.methodSort = !this.methodSort;
    },
    searchWithCategory(categoryID) {
      this.categoryIdSearch = categoryID;
      this.getAll = false;
    },
    getgetAllCategories: function () {
      axios.get(API_URL + "category/getAllCategories").then((response) => {
        this.categories = response.data;
      });
    },
    getAllBook: function () {
      axios.get(API_URL + "book/getAllBook").then((response) => {
        this.products = response.data;
      });
    },
        getBookHot: function () {
      axios.get(API_URL + "book/getBestSeller").then((response) => {
        this.highlight = response.data;
      });
    },
    setAll: function () {
      this.getAll = true;
      this.categoryIdSearch = -1;
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
    Branch,
    ShopProduct,
    VueRangeSlider,
  },
  created() {
    this.min = 0;
    this.max = 400000;
    this.formatter = (value) => `${value} VNĐ`;
    if (!isNaN(this.$route.query.cid)) {
      this.categoryIdSearch = this.$route.query.cid;
      this.getAll = false;
    }
  },
  mounted() {
    this.getgetAllCategories();
    this.getAllBook();
    this.getBookHot();
  },
};
</script>

<style scoped src="../../assets/css/bootstrap.min.css"></style>

<style>
.suggets {
  text-align: center;
}
ul.catagory.active a,
ul.catagory.active li {
  color: red;
}
</style>