<template>
  <div class="container rf-customer">
    <p v-if="username == null" style="text-align: center">
      Hãy đăng nhập để bình luận và đánh giá về sách!
    </p>
    <form
      action=""
      @submit.prevent="sendRatingFeeback()"
      v-if="username != null"
    >
      <table style="width: 100%">
        <tr>
          <td><label for="">Đánh giá: </label></td>
          <td><label for="">Phản hồi: </label></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <div>
              <br />
              <vue-star-rating
                :animate="true"
                :active-color="['#ae0000', '#f9ca24']"
                :active-border-color="['#F6546A', '#f6e58d']"
                :border-width="4"
                :star-points="[
                  23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34,
                  46, 19, 31, 17,
                ]"
                :active-on-click="true"
                :clearable="true"
                :show-rating="false"
                :star-size="25"
                v-model="ratingStar"
              ></vue-star-rating>
            </div>
          </td>
          <td>
            <textarea
              name=""
              id="text-area-rf"
              class="form-control"
              cols="30"
              v-model="msgFb"
              rows="5"
            ></textarea>
          </td>
          <td>
            <input
              type="submit"
              value="Gửi đánh giá"
              class="form-controll btn btn-success"
            />
          </td>
        </tr>
      </table>
    </form>
    <hr />
    <h4>Đánh giá của Khách hàng</h4>
    <br />
    <div>
      <table v-for="(fb, index) in listFB" :key="index">
        <tr>
          <td rowspan="2">
            <img
              src="https://sothis.es/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
              style="width: 80px"
              alt=""
            />
          </td>
          <td>
            <b>{{ fb.username }}</b>
            <br />
            <vue-star-rating
              text-class="custom-text"
              :star-size="18"
              v-model="fb.scoreRate"
              :read-only="true"
            ></vue-star-rating>
          </td>
        </tr>
        <tr>
          <td>{{ fb.feedback }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
const API_URL = "http://localhost:8088/";
export default {
  props: {
    bookid: String,
  },
  data() {
    return {
      bid: 0,
      ratingStar: 0,
      msgFb: "",
      username: "",
      listFB: {},
    };
  },
  mounted() {
    this.username = localStorage.getItem("sessionLoginClient");
    this.getRatingFeedback();
  },
  methods: {
    sendRatingFeeback() {
      //   this.username = localStorage.getItem("sessionLoginClient");
      axios
        .post(API_URL + "feedback/create", {
          username: this.username,
          bid: this.$props.bookid,
          scoreRate: this.ratingStar,
          feedback: this.msgFb,
        })
        .then((response) => {
          // let data = response.data;
          alert(
            "Cảm ơn bạn đã đánh giá về sản phẩm của chúng tôi! Chúc bạn vui vẻ!"
          );
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    },
    getRatingFeedback: function () {
      axios
        .get(API_URL + "feedback/getFeedbackByBid?bid=" + this.$props.bookid)
        .then((response) => {
          let res = response.data;
          this.listFB = res;
          console.log(this.listFB);
        });
    },
  },
};
</script>
<style scoped>
.custom-text {
  font-weight: bold;
  font-size: 1.9em;
  border: 1px solid #cfcfcf;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  color: #999;
  background: #fff;
}
table tr {
  width: 100%;
}
td {
  padding: 5px;
}
</style>