<template>
  <div class="feature_area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="feature_text">
            <h4>Sản phẩm nổi bật</h4>
          </div>
        </div>
      </div>
      <ul class="nav nav-tabs nav-justified">
        <li class="nav-item">
          <a
            class="nav-link"
            @click.prevent="setActive('New')"
            :class="{ active: isActive('New') }"
            href="#new"
            >Sách mới</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            @click.prevent="setActive('Hot')"
            :class="{ active: isActive('Hot') }"
            href="#hot"
            >Sách bán chạy</a
          >
        </li>
        <li class="nav-item"></li>
      </ul>
      <div class="tab-content py-3" id="myTabContent">
        <div
          class="tab-pane"
          :class="{ 'active show': isActive('New') }"
          id="new"
        >
          <NewProduct />
        </div>
        <div
          class="tab-pane"
          :class="{ 'active show': isActive('Hot') }"
          id="hot"
        >
          <HotProduct />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="more_feature_area">
            <h2><a href="Shop">Xem thêm...</a></h2>
          </div>
        </div>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="feature_text">
          <h4>Hòa cùng mùa tựu trường</h4>
        </div>
      </div>
    </div>
    <BookGallery />
    <br>
    <br>
  </div>
</template>

<script>
import NewProduct from "./ProductComponent/NewProduct.vue";
import HotProduct from "./ProductComponent/HotProduct.vue";
import BookGallery from "./ProductComponent/BookGallery.vue";
export default {
  data() {
    return {
      activeItem: "New",
    };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
  },
  components: {
    NewProduct,
    HotProduct,
    BookGallery
  },
};
</script>

<style scoped src="../../assets/css/bootstrap.min.css">
</style>