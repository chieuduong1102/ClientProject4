<template>
  <div class="home">
    <HeaderHome />
    <Slider />
    <div class="container-fluid homeProduct">
      <div class="container text-center" style="width: 80%; margin auto; background-color: white">
        <Branch />
        <br />
        <Product />
      </div>
    </div>
    <FooterHome />
  </div>
</template>

<script>
import Slider from "../UserComponents/Slider.vue";
import Product from "../UserComponents/Product.vue";
import HeaderHome from "../UserComponents/HeaderHome.vue";
import FooterHome from "../UserComponents/FooterHome.vue";
import Branch from "../UserComponents/Branch.vue";

export default {
  data() {
    return {};
  },
  components: {
    Slider,
    Product,
    HeaderHome,
    FooterHome,
    Branch,
  },
};
</script>

<style scoped >
@import "../../assets/css/style.css";
@import "../../assets/css/main.css";
@import "../../assets/css/animate.css";
@import "../../assets/css/font-awesome.min.css";
@import "../../assets/css/meanmenu.min.css";
@import "../../assets/css/responsive.css";
</style>