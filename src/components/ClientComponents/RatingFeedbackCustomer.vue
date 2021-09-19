<template>
  <div class="container rf-customer">
    <p v-if="username==null" style="text-align: center;">
      Hãy đăng nhập để bình luận và đánh giá về sách!
    </p>
    <form action="" @submit.prevent="sendRatingFeeback()" v-if="username!=null">
      <label for="">Đánh giá: </label>
      <div>
        <br />
        <vue-star-rating
          :animate="true"
          :active-color="['#ae0000', '#f9ca24']"
          :active-border-color="['#F6546A', '#f6e58d']"
          :border-width="4"
          :star-points="[
            23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46, 19,
            31, 17,
          ]"
          :active-on-click="true"
          :clearable="true"
          :show-rating="false"
          :star-size="25"
          v-model="ratingStar"
        ></vue-star-rating>
      </div>
      <br />
      <br />
      <label for="">Phản hồi: </label>
      <textarea
        name=""
        id="text-area-rf"
        class="form-control"
        cols="30"
        v-model="msgFb"
        rows="5"
      ></textarea>
      <br />
      <input type="submit" value="Gửi đánh giá" class="btn btn-success" />
    </form>
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
    };
  },
  mounted() {
      this.username = localStorage.getItem("sessionLoginClient")
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
            alert("Cảm ơn bạn đã đánh giá về sản phẩm của chúng tôi! Chúc bạn vui vẻ!");
            console.log(response.data);
          })
          .catch((error) => console.log(error));
      
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
</style>