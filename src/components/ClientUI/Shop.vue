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
                  <a href="Home"><i class="fa fa-home"></i>Home</a>
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
                <h2>CATEGORY</h2>
                <ul class="catagory">
                  <li>
                    <a href="#"><i class="fa fa-angle-right"></i>Carnation</a>
                    <span>(4)</span>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-angle-right"></i>Yellow Rose</a
                    ><span>(6)</span>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-angle-right"></i>Gladiolus</a
                    ><span>(8)</span>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-angle-right"></i>Magnolia</a
                    ><span>(10)</span>
                  </li>
                </ul>
              </div>
              <div class="priceing_area">
                <h2>Price</h2>
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
                <h2>POPULAR TAGS</h2>
                <ul id="single_popular">
                  <li><a href="#">Carnation</a></li>
                  <li><a href="#">Yellow Rose</a></li>
                  <li><a href="#">Orchids</a></li>
                  <li><a href="#">Gladiolus</a></li>
                  <li><a href="#">Sunflower</a></li>
                  <li><a href="#">Magnolia</a></li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="popular_tag_area popular_tag_response">
                  <div class="popular_items">
                    <h2>Suggets For You</h2>
                    <div class="conpany_product_details">
                      <a href="ProductDetail"
                        ><img
                          src="../../assets/css/img/banner/banner_left.jpg"
                          alt=""
                      /></a>
                        <h4 class="suggets"><a href="ProductDetail">Beauty Calla Lily Bouquety</a></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="popular_tag_area">
                  <div class="popular_items">
                    <h2>Highlights</h2>
                  </div>
                </div>
                <div class="clothing_carousel_list">
                  <div class="single_clothing_product">
                    <div class="clothing_item">
                      <img src="../../assets/css/img/product/pr1.png" alt="" />
                      <div class="product_clothing_details">
                        <h2><a href="#">Beauty Calla Lily Bouquety</a></h2>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <p>$13.00</p>
                      </div>
                    </div>
                    <div class="clothing_item">
                      <img src="../../assets/css/img/product/pr6.png" alt="" />
                      <div class="product_clothing_details">
                        <h2><a href="#">Special Bouquet</a></h2>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <p>$12.00</p>
                      </div>
                    </div>
                    <div class="clothing_item">
                      <img src="../../assets/css/img/product/pr8.png" alt="" />
                      <div class="product_clothing_details">
                        <h2><a href="#">Breathtaking Beauty Bouquet</a></h2>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <p>$123.00</p>
                      </div>
                    </div>
                    <div class="clothing_item">
                      <img src="../../assets/css/img/product/pr8.png" alt="" />
                      <div class="product_clothing_details">
                        <h2><a href="#">Breathtaking Beauty Bouquet</a></h2>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <p>$123.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="catagory_banner">
                  <img src="../../assets/css/img/banner/category.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="my_tabs">
              <ul class="tab_style">
                <li class="active">
                  <a data-toggle="tab" href="#tab1"
                    ><span><i class="fa fa-th"></i></span
                  ></a>
                </li>
                <li>
                  <a data-toggle="tab" href="#tab2"
                    ><span><i class="fa fa-th-list"></i></span
                  ></a>
                </li>
              </ul>
              <div class="limiter">
                <label>Show</label>
                <select>
                  <option :value="page" :key="page" v-for="page in pages">
                    {{ page }}
                  </option>
                </select>
                per page
              </div>
              <div class="sort-by">
                <label>Sort By</label>
                <select>
                  <option :value="val" :key="val" v-for="val in sortBy">
                    {{ val }}
                  </option>
                </select>
                <a href="#" @click="setSort()"
                  ><i :class="[ methodSort ? 'fa fa-long-arrow-up' : 'fa fa-long-arrow-down']"></i
                ></a>
              </div>
              <div class="tab-content tab_content_style">
                <Shop-Product />
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

export default {
  data() {
    return {
      value: [0, 250],
      pages: [9, 12, 24],
      sortBy: ["Position", "Name", "Price"],
      methodSort: true,
    };
  },
  methods: {
    setSort() {
      this.methodSort = !this.methodSort;
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
    this.max = 250;
    this.formatter = (value) => `$ ${value}`;
  },
};
</script>

<style scoped src="../../assets/css/bootstrap.min.css"></style>

<style>
.suggets{
	text-align: center;
}
</style>