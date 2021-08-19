<template>
    <div>
        <header-home></header-home>
		<slider></slider>
		<branch></branch>
		<product></product>
		<info-store></info-store>
		<footer-home></footer-home>
    </div>
</template>

<script>
import slider from '../UserComponents/Slider.vue';
import product from '../UserComponents/Product.vue';
import HeaderHome from '../UserComponents/HeaderHome.vue';
import FooterHome from '../UserComponents/FooterHome.vue';
import Branch from '../UserComponents/Branch.vue';
import InfoStore from '../UserComponents/InfoStore.vue';

export default {
    data(){
        return{
			
        }
    },
  components: {
    slider,
	product,
    HeaderHome,
	FooterHome,
    Branch,
    InfoStore
  }
}
</script>

<style scoped>
    @import '../../assets/css/style.css';
	@import '../../assets/css/main.css';
	@import '../../assets/css/bootstrap.min.css';
	@import '../../assets/css/animate.css';
	@import '../../assets/css/font-awesome.min.css';
	@import '../../assets/css/meanmenu.min.css';
	@import '../../assets/css/responsive.css';

</style>