<template>
  <div class="row">
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
      <div class="product_list">
        <div class="single_product repomsive_768">
          <ProductDisplay titleBook="Rose" :price="20.06" :ratings="4.5" />
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
      <div class="product_list">
        <div class="single_product repomsive_768">
          <ProductDisplay titleBook="Rose" :price="20.06" :ratings="4.5" />
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
      <div class="product_list">
        <div class="single_product repomsive_768">
          <ProductDisplay titleBook="Rose" :price="20.06" :ratings="4.5" />
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
      <div class="product_list">
        <div class="single_product repomsive_768">
          <ProductDisplay titleBook="Rose" :price="20.06" :ratings="4.5" />
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
      <div class="product_list">
        <div class="single_product repomsive_768">
          <ProductDisplay titleBook="Rose" :price="20.06" :ratings="4.5" />
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
      <div class="product_list">
        <div class="single_product repomsive_768">
          <ProductDisplay titleBook="Rose" :price="20.06" :ratings="4.5" />
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
      <div class="product_list">
        <div class="single_product repomsive_768">
          <ProductDisplay titleBook="Rose" :price="20.06" :ratings="4.5" />
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
      <div class="product_list">
        <div class="single_product repomsive_768">
          <ProductDisplay titleBook="Rose" :price="20.06" :ratings="4.5" />
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
      <div class="product_list">
        <div class="single_product repomsive_768">
          <ProductDisplay titleBook="Rose" :price="20.06" :ratings="4.5" />
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

export default {
  setup() {
    return {};
  },
  components: {
      ProductDisplay
  }
};
</script>

<style lang="scss" scoped>
</style>