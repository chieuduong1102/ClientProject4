<template>
  <div>
    <HeaderHome />
    <div class="breadcrumbs-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="breadcrumb-single blog_top_area">
              <ul id="breadcrumbs">
                <li>
                  <a href="HomePage"><i class="fa fa-home"></i>Home</a>
                </li>
                <li><span>Ι</span></li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about_hope_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="about_hope_text">
              <h1>WELCOME TO <strong>HO BookStore</strong></h1>
              <p>
                Chào mừng bạn đến với HO BookStore, chúng tôi chuyên cung cấp những đầu sách mới nhất, bán chạy nhất và đem lại những 
                sự hài lòng nhất đối với mỗi độc giả.
              </p>
              <ul id="about_hope_details">
                <li>
                  <i class="fa fa-angle-right"></i> Chúng tôi cả tất cả những đầu sách bạn đang tìm.
                </li>
                <li>
                  <i class="fa fa-angle-right"></i> Chúng tôi giao hàng đến mọi nơi bạn cần.
                </li>
                <li><i class="fa fa-angle-right"></i> Chúng tôi đem lại những trải nghiệm tốt nhất cho bạn.</li>
              </ul>
              <div class="about_read_more"></div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="about_hope_image">
              <img src="https://www.latrobe.edu.au/news/images/articles/book-3996723_1920.jpg/1680.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about_skill_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="about_skills">
              <h2><strong>THÀNH TỰU</strong></h2>
              <p>
                Những thành tự mà chúng tôi đã đạt được trong nhiều năm hoạt động.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- single-skill-about start -->
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div class="single-skill-about">
              <div class="progress-circular">
                <v-progress-circular
                  :rotate="-90"
                  :size="270"
                  :width="8"
                  value="100"
                  color="red"
                >
                  <span> >1000 </span>
                </v-progress-circular>
              </div>
              <h2 class="progress-h4">Số lượng nhân viên</h2>
            </div>
          </div>
          <!-- single-skill-about end -->
          <!-- single-skill-about start -->
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div class="single-skill-about">
              <div class="progress-circular">
                <v-progress-circular
                  :rotate="-90"
                  :size="270"
                  :width="8"
                  value="100"
                  color="red"
                >
                  <span> >500.000 </span>
                </v-progress-circular>
              </div>
              <h2 class="progress-h4">Sản phẩm đã bán</h2>
            </div>
          </div>
          <!-- single-skill-about end -->
          <!-- single-skill-about start -->
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div class="single-skill-about">
              <div class="progress-circular">
                <v-progress-circular
                  :rotate="-90"
                  :size="270"
                  :width="8"
                  value="100"
                  color="red"
                >
                  <span> >300.000 </span>
                </v-progress-circular>
              </div>
              <h2 class="progress-h4">Số lượng khách hàng</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="creative_member_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="creative_member_text">
              <h2><strong>TEAM PHÁT TRIỂN</strong></h2>
              <p>5 thành viên trong đội phát triển.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div class="single_creative_member">
              <div class="creative_author">
                <img src="../../assets/css/img/author/m14.jpg" alt="" />
              </div>
              <div class="member_info">
                <span class="member_name">Ngô Quang Dũng</span>
                <span class="member_role">Front end Dev</span>
              </div>
              <div class="member_icons">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-google-plus"></i></a>
                <svg
                  xml:space="preserve"
                  enable-background="new 0 0 52 52"
                  viewbox="0 0 52 52"
                  height="52px"
                  width="52px"
                  y="0px"
                  x="0px"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <path
                    d="M51.673,0H0v51.5c0.244-5.359,3.805-10.412,7.752-13.003l36.169-23.74c4.264-2.799,7.761-8.663,7.752-14.297V0L51.673,0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div class="single_creative_member">
              <div class="creative_author">
                <img src="../../assets/css/img/author/m15.jpg" alt="" />
              </div>
              <div class="member_info">
                <span class="member_name">Phạm Hữu Dương</span>
                <span class="member_role">Leader</span>
              </div>
              <div class="member_icons">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-google-plus"></i></a>
                <svg
                  xml:space="preserve"
                  enable-background="new 0 0 52 52"
                  viewbox="0 0 52 52"
                  height="52px"
                  width="52px"
                  y="0px"
                  x="0px"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <path
                    d="M51.673,0H0v51.5c0.244-5.359,3.805-10.412,7.752-13.003l36.169-23.74c4.264-2.799,7.761-8.663,7.752-14.297V0L51.673,0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div class="single_creative_member">
              <div class="creative_author">
                <img src="../../assets/css/img/author/m16.jpg" alt="" />
              </div>
              <div class="member_info">
                <span class="member_name">Hoàng Quang Huy</span>
                <span class="member_role">Back end Dev</span>
              </div>
              <div class="member_icons">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-google-plus"></i></a>
                <svg
                  xml:space="preserve"
                  enable-background="new 0 0 52 52"
                  viewbox="0 0 52 52"
                  height="52px"
                  width="52px"
                  y="0px"
                  x="0px"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <path
                    d="M51.673,0H0v51.5c0.244-5.359,3.805-10.412,7.752-13.003l36.169-23.74c4.264-2.799,7.761-8.663,7.752-14.297V0L51.673,0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div class="single_creative_member">
              <div class="creative_author">
                <img src="../../assets/css/img/author/m17.jpg" alt="" />
              </div>
              <div class="member_info">
                <span class="member_name">Lê Đức Mạnh</span>
                <span class="member_role">BA & Data</span>
              </div>
              <div class="member_icons">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-google-plus"></i></a>
                <svg
                  xml:space="preserve"
                  enable-background="new 0 0 52 52"
                  viewbox="0 0 52 52"
                  height="52px"
                  width="52px"
                  y="0px"
                  x="0px"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <path
                    d="M51.673,0H0v51.5c0.244-5.359,3.805-10.412,7.752-13.003l36.169-23.74c4.264-2.799,7.761-8.663,7.752-14.297V0L51.673,0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div class="single_creative_member">
              <div class="creative_author">
                <img src="../../assets/css/img/author/m18.jpg" alt="" />
              </div>
              <div class="member_info">
                <span class="member_name">Nguyễn Hữu Đạt</span>
                <span class="member_role">BA & Data</span>
              </div>
              <div class="member_icons">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-google-plus"></i></a>
                <svg
                  xml:space="preserve"
                  enable-background="new 0 0 52 52"
                  viewbox="0 0 52 52"
                  height="52px"
                  width="52px"
                  y="0px"
                  x="0px"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <path
                    d="M51.673,0H0v51.5c0.244-5.359,3.805-10.412,7.752-13.003l36.169-23.74c4.264-2.799,7.761-8.663,7.752-14.297V0L51.673,0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterHome />
  </div>
</template>

<script>
import HeaderHome from "../ClientComponents/HeaderHome.vue";
import FooterHome from "../ClientComponents/FooterHome.vue";

export default {
  setup() {
    return {};
  },
  components: {
    HeaderHome,
    FooterHome,
  },
};
</script>

<style scoped src="../../assets/css/bootstrap.min.css"></style>

<style scoped>
.about_skill_area .container {
  text-align: center;
}
.progress-circular {
  color: rgb(255, 52, 59);
}
.progress-circular span {
  font-size: 50px;
}

.fa-facebook,
.fa-twitter,
.fa-google-plus {
  color: white !important;
}


</style>