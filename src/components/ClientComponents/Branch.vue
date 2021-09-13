<template>
  <div class="home2_banner_area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="shopping_world">
            <div class="feature_text">
              <h4>Thể loại sách</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <router-link :to="{ path: 'Shop', query: { cid: 1 } }">
            <div class="home2_banner_single">
              <div class="home2_banner_one">
                <a>
                  <img
                    src="../../assets/book/sachkinhte.png"
                    class="img-fluid"
                    alt="banner"
                  />
                </a>
              </div>
              <div class="home2_banner_text">
                <h4>ECONOMIC BOOK</h4>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <router-link :to="{ path: 'Shop', query: { cid: 2 } }">
            <div class="home2_banner_single">
              <div class="home2_banner_one">
                <a>
                  <img
                    src="../../assets/book/sachlichsu.png"
                    class="img-fluid"
                    alt="banner"
                  />
                </a>
              </div>
              <div class="home2_banner_text">
                <h4>HISTORY BOOK</h4>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <router-link :to="{ path: 'Shop', query: { cid: 3 } }">
            <div class="home2_banner_single">
              <div class="home2_banner_one">
                <a>
                  <img
                    src="../../assets/book/sachnuconggiachanh.png"
                    class="img-fluid"
                    alt="banner"
                  />
                </a>
              </div>
              <div class="home2_banner_text">
                <h4>COOKING BOOK</h4>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <router-link :to="{ path: 'Shop', query: { cid: 4 } }">
            <div class="home2_banner_single">
              <div class="home2_banner_one">
                <a>
                  <img
                    src="../../assets/book/sachngoaingu.png"
                    class="img-fluid"
                    alt="banner"
                  />
                </a>
              </div>
              <div class="home2_banner_text">
                <h4>FOREIGN LANGUAGE BOOKS</h4>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <router-link :to="{ path: 'Shop', query: { cid: 5 } }">
            <div class="home2_banner_single">
              <div class="home2_banner_one">
                <a>
                  <img
                    src="../../assets/book/sachtamlikynangsong.png"
                    class="img-fluid"
                    alt="banner"
                  />
                </a>
              </div>
              <div class="home2_banner_text">
                <h4>PSYCHOLOGY AND LIFE SKILLS BOOKS</h4>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <router-link :to="{ path: 'Shop', query: { cid: 6 } }">
            <div class="home2_banner_single">
              <div class="home2_banner_one">
                <a>
                  <img
                    src="../../assets/book/tieuthuyet.png"
                    class="img-fluid"
                    alt="banner"
                  />
                </a>
              </div>
              <div class="home2_banner_text">
                <h4>NOVELS</h4>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <router-link :to="{ path: 'Shop', query: { cid: 7 } }">
            <div class="home2_banner_single">
              <div class="home2_banner_one">
                <a>
                  <img
                    src="../../assets/book/congnghethongtin.png"
                    class="img-fluid"
                    alt="banner"
                  />
                </a>
              </div>
              <div class="home2_banner_text">
                <h4>IT BOOKS</h4>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <router-link :to="{ path: 'Shop', query: { cid: 8 } }">
            <div class="home2_banner_single">
              <div class="home2_banner_one">
                <a>
                  <img
                    src="../../assets/book/truyenthieunhi.png"
                    class="img-fluid"
                    alt="banner"
                  />
                </a>
              </div>
              <div class="home2_banner_text">
                <h4>COMMIC</h4>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
div.home2_banner_text > h4 {
  color: white !important;
}
</style>