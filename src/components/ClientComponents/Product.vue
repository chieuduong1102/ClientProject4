<template>
  <div class="feature_area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="feature_text">
            <h4>Featured Product</h4>
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
            >New</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            @click.prevent="setActive('Hot')"
            :class="{ active: isActive('Hot') }"
            href="#hot"
            >Hot</a
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
            <h2><a href="Shop">Load More...</a></h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewProduct from "./ProductComponent/NewProduct.vue";
import HotProduct from "./ProductComponent/HotProduct.vue";
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
  },
};
</script>

<style scoped src="../../assets/css/bootstrap.min.css">
</style>