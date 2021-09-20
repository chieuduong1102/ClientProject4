<template>
  <div>
    <HeaderHome />
    <div class="404-hastech-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="hastech-404-area-list">
              <div class="hastech-404-content">
                <h2>
                  4
                  <i class="fa fa-life-ring"></i>
                  4 !
                </h2>
              </div>
              <div class="error-heading">
                <h2>This page is not available</h2>
                <h3>
                  We're sorry, but the Web address you've entered is no longer
                  available.
                </h3>
              </div>
              <div class="error-back-home">
                <a class="add-tag-btn" href="HomePage"
                  ><i class="fa fa-chevron-left"></i> Home Page</a
                >
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
  name: "NotFound",
  setup() {
    return {};
  },
  components: {
    HeaderHome,
    FooterHome,
    Branch
  },
};
</script>

<style lang="scss" scoped>
</style>