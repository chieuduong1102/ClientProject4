<template>
  <div id="slider">
    <a-carousel arrows autoplay effect="fade">
      <div
        slot="prevArrow"
        class="custom-slick-arrow"
        style="left: 10px; z-index: 1"
      >
        <a-icon type="left-circle" />
      </div>
      <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
        <a-icon type="right-circle" />
      </div>
      <div v-for="sliderImage in sliderImages" :key="sliderImage.src">
        <div class="slider_banner_single">
          <div class="slider_banner_one">
              <img :src="sliderImage.src" class="img-fluid" />
          </div>
          <div class="slide_banner_text">
								<a href="#"><h4>{{ sliderImage.button }}</h4></a>
								<h3>{{ sliderImage.title }}</h3>
							</div>
        </div>
      </div>
    </a-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sliderImages: [
        {
          src: "https://blog.hdwallsource.com/wp-content/uploads/2016/02/book-pictures-22150-22707-hd-wallpapers.jpg",
          button: "Shopping Now",
          title: "View shop discount 15%"
        },
        {
          src: "https://wallpaperaccess.com/full/124400.jpg",
          button: "React Now",
          title: "React now discount 15%"
        },
                {
          src: "https://images6.alphacoders.com/310/thumb-1920-310018.jpg",
          button: null,
          title: null
        },
      ],
    };
  },
};
</script>
<style scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 660px;
  line-height: 160px;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
