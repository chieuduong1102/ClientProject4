<template>
  <div class="container-fluid detail">
    <br />
    <div class="row">
      <div class="col-md-6">
        <h2>{{ book.titleBook }}</h2>
        <hr>
        <table style="width: 70%">
          <tr>
            <td><li>Tác giả</li></td>
            <td>{{ book.author }}</td>
          </tr>
          <tr>
            <td><li>Nhà cung cấp</li></td>
            <td>{{ book.manufacture }}</td>
          </tr>
          <tr>
            <td><li>Nhà xuất bản</li></td>
            <td>{{ book.publishingCompany }}</td>
          </tr>
          <tr>
            <td><li>Năm xuất bản</li></td>
            <td>{{ book.yearPublish }}</td>
          </tr>
          <tr>
            <td><li>Ngày mở bán</li></td>
            <td>{{ book.dateSale }}</td>
          </tr>
          <tr>
            <td><li>Thể loại</li></td>
            <td> <span v-for="(cat,index) in book.bookcategoryList" :key="index"> {{ cat.cid.categoryName }}, </span></td>
          </tr>
          <tr>
            <td><li>Mô tả</li></td>
            <td>{{ book.description }}</td>
          </tr>
          <tr>
            <td><li>Đơn giá</li></td>
            <td>{{ book.price }}</td>
          </tr>
          <tr>
            <td><li>Trạng thái</li></td>
            <td>{{ formatStatus(book.status) }}</td>
          </tr>
        </table>
      </div>
      <div class="col-md-6">
        <br />
        <div class="row">
          <div
            class="col-md-3"
            v-for="(img, index) in book.imageList"
            :key="index"
          >
            <img
              :src="img.nameFile"
              class="img-fluid img-product"
              style="height: 100px;"
              alt=""
            />
          </div>
        </div>
        <br />
        <v-app id="inspire" style="width: 300px; height: 400px">
          <v-carousel cycle hide-delimiter-background :show-arrows="true" style="width: 300px; height: 400px">
            <v-carousel-item
              v-for="(img, index) in book.imageList"
              :key="index"
            >
              <v-sheet height="auto">
                <v-row class="fill-height" align="center" justify="center">
                  <img :src="img.nameFile" class="img-fluid" alt="" />
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
import axios from "axios";
const API_URL = "http://localhost:8088/";
export default {
  props: {
    bid: Number,
  },
  data() {
    return {
      book: {
        bid: "",
        titleBook: "",
        author: "",
        manufacture: "",
        publishingCompany: "",
        yearPublish: 0,
        dateSale: "",
        bookcategoryList: [],
        price: 0,
        description: "",
        status: 0,
        imageList: [],
      },
    };
  },
  mounted() {
    this.getProductDetail();
  },
  methods: {
    getProductDetail: function () {
      axios
        .get(API_URL + "book/bookInfo?bid=" + this.$props.bid)
        .then((response) => {
          //this.admin = response.data;
          this.book = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },    
    formatStatus: function (stt) {
      if (stt == 1) {
        return "Ngừng mở bán";
      } else if (stt == 2) {
        return "Đang mở bán";
      } else if (stt == 3) {
        return "Sắp ra mắt";
      } else {
        return "NULL";
      }
    },
  },
};
</script>
<style scoped>

.img-product:hover{
  border: 2px solid red;
  border-radius: 0px;
  cursor: pointer;
}
img{
  border-radius: 0px;
}
table tr td {
  font-size: 1.1rem;
}
</style>>
