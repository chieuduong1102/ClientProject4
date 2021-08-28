<template>
  <div>
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <div class="product_list">
          <div class="single_product">
            <ProductDisplay titleBook="Rose" :price="20.06" :ratings="4.5" />
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <div class="product_list">
          <div class="single_product">
            <ProductDisplay titleBook="Rose" :price="20.06" :ratings="4.5" />
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <div class="product_list">
          <div class="single_product">
            <ProductDisplay titleBook="Rose" :price="20.06" :ratings="4.5" />
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <div class="product_list">
          <div class="single_product">
            <ProductDisplay titleBook="Rose" :price="20.06" :ratings="4.5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDisplay from "./ProductDisplay.vue";
export default {
  components: {
    ProductDisplay,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>