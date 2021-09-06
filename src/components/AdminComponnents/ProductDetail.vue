<template>
  <div class="container-fluid detail">
    <br />
    <div class="row">
      <div class="col-md-6">
        <h1>Information</h1>
      </div>
      <div class="col-md-6">
        <br>
        <div class="row">
            <div class="col-md-4"><img src="../../assets/css/img/product/pr1.png" style="width: 150px; height: 150px;" alt=""></div>
            <div class="col-md-4"><img src="../../assets/css/img/product/pr1.png" style="width: 150px; height: 150px;" alt=""></div>
            <div class="col-md-4"><img src="../../assets/css/img/product/pr1.png" style="width: 150px; height: 150px;" alt=""></div>
        </div>
        <br>
                <v-app id="inspire" style="width: 400px; height: 300px;">
          <v-carousel cycle hide-delimiter-background :show-arrows="true">
            <v-carousel-item>
              <v-sheet height="auto">
                <v-row class="fill-height" align="center" justify="center">
                  <img src="../../assets/css/img/product/pr1.png" class="img-fluid" alt="" />
                </v-row>
              </v-sheet>
            </v-carousel-item>
            <v-carousel-item>
              <v-sheet>
                <v-row class="fill-height" align="center" justify="center">
                  <img src="../../assets/css/img/product/pr2.png"  class="img-fluid"  alt="" />
                </v-row>
              </v-sheet>
            </v-carousel-item>
            <v-carousel-item>
              <v-sheet>
                <v-row class="fill-height" align="center" justify="center">
                  <img src="../../assets/css/img/product/pr3.png"  class="img-fluid" alt="" />
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-app>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    bid: Number,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.detail {
}
</style>>
