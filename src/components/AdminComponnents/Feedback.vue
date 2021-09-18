<template>
  <div class="feedback">
    <h1><fa-icon icon="comment-alt"/> Rating and FeedBack</h1>
    <hr>
    <v-app id="inspire">
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="this.listRF"
          :search="search"
        >
          <template v-slot:item="row">
            <tr>
              <td>B2021{{ row.item.bid }}</td>
              <td>{{ row.item.username }} </td>
              <td>{{ row.item.scoreRate }} <fa-icon icon="star" color="#f9ca24" /></td>
              <td v-if="isCollapse==true" style="width: 600px">{{ formatFeedback(row.item.feedback) }} <a class="view-more" v-if="row.item.feedback.length > 100" @click="isCollapse=false">Xem thêm...</a></td>
              <td v-if="isCollapse==false" style="width: 600px">{{ row.item.feedback }} <a class="view-more" v-if="row.item.feedback.length > 100" @click="isCollapse=true">Thu gọn...</a></td>
            </tr>
          </template>
        </v-data-table>
      </v-card>
    </v-app>
  </div>
</template>
<script>
import axios from "axios";
const API_URL = "http://localhost:8088/";
export default {

  data() {
    return {
      listRF: [],
      search: "",
      headers: [
        {
          text: "Mã sách",
          align: "start",
          filterable: false,
          value: "bid",
        },
        { text: "Khách hàng", value: "username" },
        { text: "Điểm đánh giá", value: "scoreRate" },
        { text: "Đánh giá của KH", value: "feedback" },
      ],
      isCollapse : true
    };
  },
  methods: {
    getAllFeedback(){
      axios
        .get(API_URL + "feedback/getFeedbackList")
        .then((response) => {
          this.listRF = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    formatFeedback(text){
      return text.length > 50 ? text.substr(0,100) : text;
    },
  },
  mounted() {
      this.getAllFeedback();
  },

};
</script>
<style scoped>

</style>