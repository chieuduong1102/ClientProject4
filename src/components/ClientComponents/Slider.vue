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
              <img :src="sliderImage.src" class="img-fluid" style="width: 100%" />
          </div>
          <div class="slide_banner_text" >
								<a class="btn-a-slide" href="/Shop" v-show="sliderImage.button != null"><h4>{{ sliderImage.button }}</h4></a>
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
          src: "https://cdn1.vectorstock.com/i/1000x1000/95/00/welcome-back-to-school-label-badge-vector-21699500.jpg",
          button: null,
          title: "Back to School - Sale hết thả ga - Học vươn xa"
        },
        {
          src: "https://whnt.com/wp-content/uploads/sites/20/2019/08/backtoschool_featuredimage.jpg?w=1600&h=900&crop=1",
          button: null,
          title: "Sale tới 50%"
        },
        {
          src: "https://cdn.cellphones.com.vn/media/wysiwyg/back-to-school-2.jpg",
          button: "Đi thôi nào",
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
  color: rgb(0, 0, 0);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: rgb(0, 0, 0);
}


.btn-a-slide{
  background-color: red;
}
</style>
