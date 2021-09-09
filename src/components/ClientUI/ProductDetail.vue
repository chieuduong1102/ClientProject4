<template>
  <div>
    <HeaderHome />
    <div class="breadcrumbs_area" style="width: 80% !important; margin: auto">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="breadcrumb-single breadcrumb_top">
              <ul id="breadcrumbs">
                <li>
                  <a href="HomePage"><i class="fa fa-home"></i>Home</a>
                </li>
                <li><span>I</span></li>
                <li>PRODUCT DETAIL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End breadcrumbs area -->
    <!-- Start preview Product details area -->
    <div
      class="blog_single_view_area"
      style="width: 80% !important; margin: auto"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="my_tabs">
              <div class="tab-content tab_content_style">
                <div class="tab-pane in active">
                  <div class="blog_tabs" style="padding-left: 110px">
                    <a
                      class="fancybox"
                      href="#"
                      data-fancybox-group="gallery"
                      title="Lorem ipsum dolor sit amet"
                    >
                      <transition name="fade-in" mode="out-in">
                        <img
                          :src="imgShow"
                          :key="imgShow"
                          style="width: 330px"
                          class="img-fluid"
                          alt=""
                        />
                      </transition>
                    </a>
                  </div>
                </div>
              </div>
              <div class="blog_view_list">
                <ul class="tab_style tab_bottom">
                  <li
                    class="active"
                    v-for="(image, index) in bookDetail.imageList"
                    :key="image.nameFile"
                  >
                    <div class="blog_single_carousel">
                      <a data-toggle="tab" :href="'#tab' + index"
                        ><img
                          :src="image.nameFile"
                          @click="setImgShow(image.nameFile)"
                          alt=""
                      /></a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="blog_product_details">
              <h2 class="blog_heading"><a href="">{{ bookDetail.titleBook }}</a></h2>
              <div class="product_rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
              </div>
              <div class="product_rating">
                <span>I</span>
                <a href="#"> Thêm phản hồi</a>
              </div>
              <div class="pricing_rate">
                <p class="stack">
                  Trạng thái:<span class="in-stock"> Còn hàng</span>
                </p>
                <div class="row">
                  <div class="col-md-6">
                    Tác giả:<b> {{ bookDetail.author }}</b>
                  </div>
                  <div class="col-md-6">
                    Năm xuất bản:<b> {{ bookDetail.yearPublish }}</b>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    Nhà xuất bản:<b> {{ bookDetail.publishingCompany }}</b>
                  </div>
                  <div class="col-md-6">Tái bản lần thứ:<b> 5 (2021)</b></div>
                </div>
                <br />
                <p class="rating_dollor rating_margin">
                  <span class="rating_value_two"
                    >${{ formatPrice(bookDetail.price) }}</span
                  >
                </p>
                <p class="blog_texts">
                  {{ bookDetail.description }}
                </p>
              </div>
            </div>
            <div class="product_options_area">
              <div class="cart_blog_item">
                <p class="rating_dollor rating_margin">
                  <span class="rating_value_two"
                    >${{ formatPrice(bookDetail.price) }}</span
                  >
                </p>
                <div class="add-to-cart">
                  <input type="text" title="Qty" value="1" class="qty" />
                  <button type="button" title="Add to Cart" class="cart_button">
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Branch />
    <br />
    <FooterHome />
  </div>
</template>

<script>
import HeaderHome from "../ClientComponents/HeaderHome.vue";
import FooterHome from "../ClientComponents/FooterHome.vue";
import Branch from "../ClientComponents/Branch.vue";
import axios from "axios";
const API_URL = "http://localhost:8088/";

export default {
  data() {
    return {
      bookDetail: [],
      imgShow: "",
      bid: this.$route.query.bid,
    };
  },
  methods: {
    setImgShow(imgName) {
      this.imgShow = imgName;
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    checkBid() {
      if (this.bid === "" || isNaN(this.bid)) {
        this.$router.push("404");
      }
    },
    getBookDetail: function () {
      axios.get(API_URL + "book/bookInfo?bid=" + this.bid).then((response) => {
        this.bookDetail = response.data;
        this.imgShow = this.bookDetail["imageList"][0]["nameFile"];
        console.log(response.data);
      });
    },
  },
  components: {
    HeaderHome,
    FooterHome,
    Branch,
  },
  mounted() {
    this.getBookDetail();
    this.checkBid();

    //Display in top page
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  },
};
</script>

<style scoped>
.fade-in-enter-active {
  transition: all 0.5s ease;
}

.fade-in-leave-active {
  transition: all 0.5s ease;
}

.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
}
.product_rating {
  font-size: 20px !important;
}
</style>