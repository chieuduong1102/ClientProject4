<template>
  <div>
    <HeaderHome />
    <div class="breadcrumbs_area" style="width: 80% !important; margin: auto;">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="breadcrumb-single breadcrumb_top">
              <ul id="breadcrumbs">
                <li>
                  <i class="fa fa-home"></i
                  ><router-link to="Home"><span> Home</span></router-link>
                </li>
                <li><span>I</span></li>
                <li>LOREM IPSUM DOLOR</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End breadcrumbs area -->
    <!-- Start preview Product details area -->
    <div class="blog_single_view_area" style="width: 80% !important; margin: auto;">
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
                        <img :src="displayImg()" :key="displayImg()" style="width: 330px;" class="img-fluid" alt="" />
                      </transition>
                    </a>
                  </div>
                </div>
              </div>
              <div class="blog_view_list">
                <ul class="tab_style tab_bottom">
                  <li class="active">
                    <div class="blog_single_carousel">
                      <a data-toggle="tab" href="#tab1"
                        ><img
                          src="../../assets/css/img/product/pr6.png"
                          @click="setImgShow('pr6.png')"
                          alt=""
                      /></a>
                    </div>
                  </li>
                  <li>
                    <div class="blog_single_carousel">
                      <a data-toggle="tab" href="#tab2"
                        ><img
                          src="../../assets/css/img/product/pr7.png"
                          @click="setImgShow('pr7.png')"
                          alt=""
                      /></a>
                    </div>
                  </li>
                  <li>
                    <div class="blog_single_carousel">
                      <a data-toggle="tab" href="#tab3"
                        ><img
                          src="../../assets/css/img/product/pr8.png"
                          @click="setImgShow('pr8.png')"
                          alt=""
                      /></a>
                    </div>
                  </li>
                  <li>
                    <div class="blog_single_carousel">
                      <a data-toggle="tab" href="#tab4"
                        ><img
                          src="../../assets/css/img/product/pr9.png"
                          @click="setImgShow('pr9.png')"
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
              <h2 class="blog_heading"><a href="">Lorem ipsum dolor</a></h2>
              <div class="product_rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
              </div>
              <div class="product_rating">
                <span>I</span>
                <a href="#"> Add Your Review</a>
              </div>
              <div class="pricing_rate">
                <p class="stack">
                  Availability:<span class="in-stock"> In stock</span>
                </p>
                <div class="row">
                  <div class="col-md-6">Tác giả:<b> Ngô Quang Dũng</b></div>
                  <div class="col-md-6">Năm xuất bản:<b> 2020</b></div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    Nhà xuất bản:<b> Ngô Quang Dũng</b>
                  </div>
                  <div class="col-md-6">Tái bản lần thứ:<b> 5 (2021)</b></div>
                </div>
                <br />
                <p class="rating_dollor rating_margin">
                  <span class="rating_value_two">$15.00</span>
                </p>
                <p class="blog_texts">
                  Nunc facilisis sagittis ullamcorper. Proin lectus ipsum,
                  gravida et mattis vulputate, tristique ut lectus. Sed et lorem
                  nunc. Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Aenean eleifend laoreet
                  congue. Vivamus adipiscing nisl ut dolor dignissim semper.
                  Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu
                  ad litora torquent per conubia nostra, per inceptos himenaeos.
                  Integer enim purus, posuere at ultricies eu, placerat a felis.
                  Suspendisse aliquet urna pretium eros convallis interdum.
                  Quisque in arcu id dui vulputate mollis eget non arcu. Aenean
                  et nulla purus. Mauris vel tellus non nunc mattis lobortis.
                </p>
              </div>
            </div>
            <div class="product_options_area">
              <div class="cart_blog_item">
                <p class="rating_dollor rating_margin">
                  <span class="rating_value_one dollor_size">$170.00</span>
                  <span class="rating_value_two">$12.00</span>
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
    <br>
    <FooterHome />
  </div>
</template>

<script>
import HeaderHome from "../ClientComponents/HeaderHome.vue";
import FooterHome from "../ClientComponents/FooterHome.vue";
import Branch from "../ClientComponents/Branch.vue";

export default {
  data() {
    return {
      imgShow: "pr6.png",
    };
  },
  methods: {
    displayImg() {
      //return require("@/assets/css/img/product/" + this.imgShow);
    },
    setImgShow(imgName) {
      this.imgShow = imgName;
    },
  },
  components: {
    HeaderHome,
    FooterHome,
    Branch,
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