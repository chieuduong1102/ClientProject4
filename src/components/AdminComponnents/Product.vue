<template>
  <div class="product">
    <div class="row">
      <div
        class="container-fluid"
        id="product-detail-display"
        v-if="showDetail"
      >
        <fa-icon
          icon="times"
          id="icon-close"
          @click="closeDetailProduct()"
        ></fa-icon>
        <div id="product-detail-content">
          <ProductDetail :bid="book.bid" />
        </div>
      </div>
      <div class="container-fluid">
        <h1><fa-icon icon="book-open" /> Book</h1>
        <hr />
        <div class="row">
          <div class="col-md-4" v-show="this.isCreateNew">
            <h2>Tạo mới</h2>
            <form action="" @submit.prevent="createBook()">
              <div class="form-group">
                <label for="titleBook">Tiêu đề sách</label>
                <div
                  class="detail-error-validation"
                  v-show="validationTitle.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationTitle }} </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  @keydown="validationTitle = ''"
                  v-model="book.titleBook"
                  placeholder=""
                />
              </div>
              <div class="form-group">
                <label for="author">Tác giả</label>
                <div
                  class="detail-error-validation"
                  v-show="validationAuthor.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationAuthor }} </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  @keydown="validationAuthor = ''"
                  v-model="book.author"
                  placeholder=""
                />
              </div>
              <div class="form-group">
                <label for="manufacture">Nhà cung cấp</label>
                <div
                  class="detail-error-validation"
                  v-show="validationManufacture.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationManufacture }} </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  @keydown="validationManufacture = ''"
                  v-model="book.manufacture"
                  placeholder=""
                />
              </div>
              <div class="form-group">
                <label for="publishingCompany">Nhà xuất bản</label>
                <div
                  class="detail-error-validation"
                  v-show="validationPublishingCompany.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationPublishingCompany }} </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  @keydown="validationPublishingCompany = ''"
                  v-model="book.publishingCompany"
                  placeholder=""
                />
              </div>
              <div class="form-group">
                <label for="yearPublish">Năm xuất bản</label>
                <div
                  class="detail-error-validation"
                  v-show="validationYearPublishing.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationYearPublishing }} </span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  @change="validationYearPublishing = ''"
                  v-model="book.yearPublish"
                  placeholder=""
                />
              </div>
              <div class="form-group">
                <label for="dateSale">Ngày mở bán</label>
                <div
                  class="detail-error-validation"
                  v-show="validationDateSale.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationDateSale }} </span>
                </div>
                <input
                  type="date"
                  class="form-control"
                  @change="validationDateSale = ''"
                  v-model="book.dateSale"
                />
              </div>
              <div class="form-group">
                <label for="category">Thể loại</label>
                <div
                  class="detail-error-validation"
                  v-show="validationCategoryName.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationCategoryName }} </span>
                </div>
                <div>
                  <div
                    v-for="(item, index) in book.categoryName"
                    :key="index"
                    class="display-selected"
                  >
                    {{ item }}
                    <span class="btn-x" @click="removeCategory(item)">x</span>
                  </div>
                </div>
                <select
                  class="form-select form-control"
                  v-model="category"
                  @change="
                    changeCategory(category);
                    validationCategoryName = '';
                  "
                  aria-label="status"
                >
                  <option disabled value="">--Chọn thể loại--</option>
                  <option v-for="(cat, index) in listCategory" :key="index">
                    {{ cat }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label for="description">Mô tả</label>
                <textarea
                  type="number"
                  class="form-control"
                  rows="4"
                  v-model="book.description"
                />
              </div>
              <div class="form-group">
                <label for="price">Đơn giá</label>
                <div
                  class="detail-error-validation"
                  v-show="validationPrice.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationPrice }} </span>
                </div>
                <input
                  type="number"
                  @change="validationPrice = ''"
                  v-model="book.price"
                  class="form-control"
                  placeholder="VNĐ"
                />
              </div>
              <div class="form-group" style="width: 50%">
                <label for="status">Trạng thái</label>
                <div
                  class="detail-error-validation"
                  v-show="validationStatus.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationStatus }} </span>
                </div>
                <select
                  class="form-select form-control"
                  @change="validationStatus = ''"
                  v-model="book.status"
                  aria-label="status"
                >
                  <option selected value="0" disabled>
                    --Chọn trạng thái--
                  </option>
                  <option value="1">Ngừng bán</option>
                  <option value="2">Đang mở bán</option>
                  <option value="3">Sắp ra mắt</option>
                </select>
              </div>
              <div class="form-group">
                <label for="images">Hình ảnh</label>
                <div
                  class="detail-error-validation"
                  v-show="validationImages.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationImages }} </span>
                </div>
                <input
                  type="file"
                  ref="imageUploaderCreate"
                  @change="handleFileChangeCreate()"
                  class="form-control"
                  multiple
                />
              </div>
              <div class="row">
                <br />
                <div
                  class="col-md-4"
                  v-for="(item, index) in book.imageList"
                  :key="index"
                >
                  {{ item.name }}
                </div>
              </div>
              <br />
              <center>
                <button type="submit" class="btn btn-primary">Tạo mới</button>
                <button
                  type="reset"
                  class="btn btn-secondary"
                  @click="
                    resetValidation();
                    resetData();
                  "
                >
                  Tạo lại
                </button>
              </center>
            </form>
          </div>
          <div class="col-md-4" v-show="this.isUpdate">
            <h2>Cập nhật thông tin sách</h2>
            <form action="" @submit.prevent="comfirmUpdateBook()">
              <div class="form-group">
                <label for="titleBook">Tiêu đề sách</label>
                <div
                  class="detail-error-validation"
                  v-show="validationTitle.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationTitle }} </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  @keydown="validationTitle = ''"
                  v-model="book.titleBook"
                  placeholder=""
                />
              </div>
              <div class="form-group">
                <label for="author">Tác giả</label>
                <div
                  class="detail-error-validation"
                  v-show="validationAuthor.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationAuthor }} </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  @keydown="validationAuthor = ''"
                  v-model="book.author"
                  placeholder=""
                />
              </div>
              <div class="form-group">
                <label for="manufacture">Nhà cung cấp</label>
                <div
                  class="detail-error-validation"
                  v-show="validationManufacture.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationManufacture }} </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  @keydown="validationManufacture = ''"
                  v-model="book.manufacture"
                  placeholder=""
                />
              </div>
              <div class="form-group">
                <label for="publishingCompany">Nhà xuất bản</label>
                <div
                  class="detail-error-validation"
                  v-show="validationPublishingCompany.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationPublishingCompany }} </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  @keydown="validationPublishingCompany = ''"
                  v-model="book.publishingCompany"
                  placeholder=""
                />
              </div>
              <div class="form-group">
                <label for="yearPublish">Năm xuất bản</label>
                <div
                  class="detail-error-validation"
                  v-show="validationYearPublishing.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationYearPublishing }} </span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  @change="validationYearPublishing = ''"
                  v-model="book.yearPublish"
                  placeholder="Year Publishing"
                />
              </div>
              <div class="form-group">
                <label for="dateSale">Ngày mở bán</label>
                <div
                  class="detail-error-validation"
                  v-show="validationDateSale.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationDateSale }} </span>
                </div>
                <input
                  type="date"
                  class="form-control"
                  @change="validationDateSale = ''"
                  v-model="book.dateSale"
                />
              </div>
              <div class="form-group">
                <label for="category">Thể loại</label>
                <div
                  class="detail-error-validation"
                  v-show="validationCategoryName.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationCategoryName }} </span>
                </div>
                <div>
                  <div
                    v-for="(item, index) in book.categoryName"
                    :key="index"
                    class="display-selected"
                  >
                    {{ item }}
                    <span class="btn-x" @click="removeCategory(item)">x</span>
                  </div>
                </div>
                <select
                  class="form-select form-control"
                  v-model="category"
                  @change="
                    changeCategory(category);
                    validationCategoryName = '';
                  "
                  aria-label="status"
                >
                  <option disabled value="">--Chọn thể loại--</option>
                  <option v-for="(cat, index) in listCategory" :key="index">
                    {{ cat }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label for="description">Mô tả</label>
                <textarea
                  type="number"
                  class="form-control"
                  rows="4"
                  v-model="book.description"
                />
              </div>
              <div class="form-group">
                <label for="price">Đơn giá</label>
                <div
                  class="detail-error-validation"
                  v-show="validationPrice.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationPrice }} </span>
                </div>
                <input
                  type="number"
                  @change="validationPrice = ''"
                  v-model="book.price"
                  class="form-control"
                  placeholder="VNĐ"
                />
              </div>
              <div class="form-group" style="width: 50%">
                <label for="status">Trạng thái</label>
                <div
                  class="detail-error-validation"
                  v-show="validationStatus.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationStatus }} </span>
                </div>
                <select
                  class="form-select form-control"
                  @change="validationStatus = ''"
                  v-model="book.status"
                  aria-label="status"
                >
                  <option selected value="0" disabled>
                    --Chọn trạng thái--
                  </option>
                  <option value="1">Ngừng bán</option>
                  <option value="2">Đang mở bán</option>
                  <option value="3">Sắp ra mắt</option>
                </select>
              </div>
              <div class="form-group">
                <label for="images">Hình ảnh</label>
                <div
                  class="detail-error-validation"
                  v-show="validationImages.length"
                >
                  <span><fa-icon icon="exclamation-circle" /></span>
                  <span> {{ validationImages }} </span>
                </div>
                <input
                  type="file"
                  ref="imageUploaderUpdate"
                  @change="handleFileChangeUpdate()"
                  class="form-control"
                  multiple
                />
              </div>
              <div class="row">
                <br />
                <div
                  class="col-md-4"
                  v-for="(item, index) in book.imageList"
                  :key="index"
                >
                  <img
                    :src="item.nameFile"
                    class="img-fluid"
                    style="width: 200px"
                  />
                </div>
              </div>
              <br />
              <center>
                <button type="submit" class="btn btn-success">Cập nhật</button>
                <button
                  type="reset"
                  class="btn btn-secondary"
                  @click="
                    resetValidation();
                    resetData();
                    isCreateNew = true;
                    isUpdate = false;
                    isDelete = false;
                  "
                >
                  Hủy bỏ
                </button>
              </center>
            </form>
          </div>
          <div class="col-md-8">
            <h2>List Book</h2>
            <div
              class="alert alert-danger alert-dismissible fade show"
              role="alert"
              v-show="this.isDelete"
            >
              Do you want delete Book:
              <strong>{{ book.title }}</strong> ?
              <button
                class="btn btn-success"
                style="width: 45px; height: 45px"
                @click="comfirmDeleteBook(book)"
              >
                <fa-icon id="ic-yes" icon="check"></fa-icon>
              </button>
              <button
                class="btn btn-danger"
                style="width: 45px; height: 45px"
                @click="isDelete = false"
              >
                <fa-icon id="ic-close" icon="times"></fa-icon>
              </button>
            </div>
            <v-app id="inspire">
              <v-card>
                <v-card-title>
                  <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Tìm kiếm"
                    single-line
                    hide-details
                  ></v-text-field>
                </v-card-title>
                <v-data-table
                  :headers="headers"
                  :items="this.listBook"
                  :search="search"
                >
                  <template v-slot:item="row">
                    <tr>
                      <td>{{ row.item.titleBook }}</td>
                      <td>{{ row.item.author }}</td>
                      <td>{{ row.item.dateSale }}</td>
                      <td>
                        <span
                          v-for="(cat, index) in row.item.bookcategoryList"
                          :key="index"
                          >{{ cat.cid.categoryName }},
                        </span>
                      </td>
                      <td>{{ row.item.price }} VNĐ</td>
                      <td>{{ formatStatus(row.item.status) }}</td>
                      <td>
                        <v-btn
                          class="mx-2"
                          fab
                          dark
                          small
                          color="blue"
                          @click="showDetailProduct(row.item.bid)"
                        >
                          <v-icon dark>mdi-information</v-icon>
                        </v-btn>
                      </td>
                      <td>
                        <v-btn
                          class="mx-2"
                          fab
                          dark
                          small
                          color="green"
                          @click="updateBook(row.item.bid)"
                        >
                          <v-icon dark>mdi-pencil</v-icon>
                        </v-btn>
                      </td>
                    </tr>
                  </template>
                </v-data-table>
              </v-card>
            </v-app>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDetail from "./ProductDetail.vue";
import axios from "axios";
const API_URL = "http://localhost:8088/";
export default {
  components: {
    ProductDetail,
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Tiêu đề",
          align: "start",
          filterable: false,
          value: "titleBook",
        },
        { text: "Tác giả", value: "author" },
        { text: "Ngày mở bán", value: "dateSale" },
        { text: "Thể loại", value: "categoryName" },
        { text: "Đơn giá", value: "price" },
        { text: "Trạng thái", value: "status" },
        { text: "Chi tiết" },
        { text: "Cập nhật" },
      ],
      book: {
        bid: "",
        titleBook: "",
        author: "",
        manufacture: "",
        publishingCompany: "",
        yearPublish: 0,
        dateSale: "",
        categoryName: [],
        price: 0,
        description: "",
        status: 0,
        imageList: [],
      },
      listBook: [],
      category: "",
      listCategorySelected: [],
      listCategory: [],
      errorValidation: [],
      validationTitle: "",
      validationAuthor: "",
      validationManufacture: "",
      validationPublishingCompany: "",
      validationYearPublishing: "",
      validationDateSale: "",
      validationCategoryName: "",
      validationPrice: "",
      validationStatus: "",
      validationImages: "",
      isCreateNew: true,
      isUpdate: false,
      isDelete: false,
      showDetail: false,
    };
  },
  methods: {
    getAllBook: function () {
      axios
        .get(API_URL + "book/getAllBook")
        .then((response) => {
          this.listBook = response.data;
        })
        .catch((error) => console.log(error));
    },
    createBook: function () {
      this.validationForm();
      if (this.validationForm().length == 0) {
        axios
          .post(
            API_URL + "book/create",
            {
              titleBook: this.book.titleBook,
              author: this.book.author,
              manufacture: this.book.manufacture,
              publishingCompany: this.book.publishingCompany,
              yearPublish: this.book.yearPublish,
              dateSale: this.book.dateSale,
              price: this.book.price,
              description: this.book.description,
              status: this.book.status,
              imageList: [],
              bookcategoryList: [],
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            console.log(response.data);
            var bid = 0;
            bid = response.data.bid;
            this.createImage(bid);
            this.createCategoryOfBook(bid);
          })
          .then(this.getAllBook())
          .catch((error) => console.log(error));
      }
    },
    deleteBook: function () {},
    comfirmDeleteBook: function () {},
    updateBook: function (bid) {
      this.resetValidation();
      axios
        .get(API_URL + "book/bookInfo?bid=" + bid)
        .then((response) => {
          //this.admin = response.data;
          this.book = response.data;
          console.log(response.data);
          let listCategoryRes = [];
          this.book.categoryName = [];
          listCategoryRes = response.data.bookcategoryList;
          for (let index = 0; index < listCategoryRes.length; index++) {
            this.category = listCategoryRes[index].cid.categoryName;
            this.changeCategory(this.category);
          }
          this.book.imageList = response.data.imageList;
          console.log(this.book.categoryName);
        })
        .catch(function (error) {
          console.log(error);
        });
      this.isCreateNew = false;
      this.isUpdate = true;
      this.isDelete = false;
    },
    comfirmUpdateBook: function () {
      this.validationForm();
      if (this.validationForm().length == 0) {
        axios
          .post(
            API_URL + "book/update",
            {
              bid: this.book.bid,
              titleBook: this.book.titleBook,
              author: this.book.author,
              manufacture: this.book.manufacture,
              publishingCompany: this.book.publishingCompany,
              yearPublish: this.book.yearPublish,
              dateSale: this.book.dateSale,
              price: this.book.price,
              description: this.book.description,
              status: this.book.status,
              imageList: [],
              bookcategoryList: [],
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            console.log(response.data);
            var bid = 0;
            bid = response.data.bid;
            this.updateImage(bid);
            this.updateCategoryOfBook(bid);
          })
          .then(this.getAllBook())
          .catch((error) => console.log(error));
      }
    },
    changeCategory: function (category) {
      if (!this.book.categoryName.includes(category)) {
        this.book.categoryName.push(category);
        console.log(this.book.categoryName);
      }
    },
    removeCategory: function (category) {
      this.category = "";
      this.book.categoryName.splice(
        this.book.categoryName.indexOf(category),
        1
      );
      console.log(this.book.categoryName);
    },
    handleFileChangeCreate: function () {
      this.errorValidation = [];
      this.book.imageList = [];
      for (
        let index = 0;
        index < this.$refs.imageUploaderCreate.files.length;
        index++
      ) {
        if (this.$refs.imageUploaderCreate.files[index].size > 1048576) {
          this.validationImages = "Image size is too big!";
          this.errorValidation.push(this.validationImages);
        } else {
          this.validationImages = "";
          this.book.imageList.push(this.$refs.imageUploaderCreate.files[index]);
        }
      }
      for (
        let index = 0;
        index < this.$refs.imageUploaderUpdate.files.length;
        index++
      ) {
        if (this.$refs.imageUploaderUpdate.files[index].size > 1048576) {
          this.validationImages = "Image size is too big!";
          this.errorValidation.push(this.validationImages);
        } else {
          this.validationImages = "";
          this.book.imageList.push(this.$refs.imageUploaderUpdate.files[index]);
        }
      }
      console.log(this.book.imageList);
    },
    handleFileChangeUpdate: function () {
      this.errorValidation = [];
      this.book.imageList = [];
      for (
        let index = 0;
        index < this.$refs.imageUploaderUpdate.files.length;
        index++
      ) {
        if (this.$refs.imageUploaderUpdate.files[index].size > 1048576) {
          this.validationImages = "Image size is too big!";
          this.errorValidation.push(this.validationImages);
        } else {
          this.validationImages = "";
          this.book.imageList.push(this.$refs.imageUploaderUpdate.files[index]);
        }
      }
      console.log(this.book.imageList);
    },
    createImage: function (bid) {
      let fd = new FormData();
      this.book.imageList.forEach((img) => {
        fd.append("images", img);
      });
      fd.append("bid", bid);
      axios
        .post(API_URL + "image/create", fd, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
          this.resetData();
          this.book.imageList = [];
        })
        .catch((error) => console.log(error));
    },
    updateImage: function (bid) {
      let fdu = new FormData();
      console.log("updateImage");
      console.log(this.book.imageList);
      this.book.imageList.forEach((img) => {
        fdu.append("images", img);
      });
      fdu.append("bid", bid);
      axios
        .post(API_URL + "image/update", fdu, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
          this.resetData();
          this.book.imageList = [];
        })
        .then(this.getAllBook())
        .then(
          (this.isCreateNew = true),
          (this.isUpdate = false),
          (this.isDelete = false)
        )
        .catch((error) => console.log(error));
    },
    getAllCategory: function () {
      axios
        .get(API_URL + "category/getAllCategories")
        .then((response) => {
          let list = response.data;
          for (let index = 0; index < list.length; index++) {
            this.listCategory.push(list[index].categoryName);
          }
          //console.log(this.listCategory);
        })
        .catch((error) => console.log(error));
    },
    createCategoryOfBook: function (bid) {
      this.listCategorySelected = [];
      for (let index = 0; index < this.book.categoryName.length; index++) {
        let catSelected = {
          categoryName: this.book.categoryName[index],
        };
        this.listCategorySelected.push(catSelected);
      }
      axios
        .post(
          API_URL + "bookcategory/create?bid=" + bid,
          this.listCategorySelected
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    },
    updateCategoryOfBook: function (bid) {
      this.listCategorySelected = [];
      for (let index = 0; index < this.book.categoryName.length; index++) {
        let catSelected = {
          categoryName: this.book.categoryName[index],
        };
        this.listCategorySelected.push(catSelected);
      }
      axios
        .post(
          API_URL + "bookcategory/update?bid=" + bid,
          this.listCategorySelected
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    },
    validationForm: function () {
      this.errorValidation = [];
      if (this.book.titleBook == "") {
        this.validationTitle = "Title must not be empty!";
        this.errorValidation.push(this.validationTitle);
      }
      if (this.book.author == "") {
        this.validationAuthor = "Author must not be empty!";
        this.errorValidation.push(this.validationAuthor);
      }
      if (this.book.manufacture == "") {
        this.validationManufacture = "Manufacture must not be empty!";
        this.errorValidation.push(this.validationManufacture);
      }

      if (this.book.publishingCompany == "") {
        this.validationPublishingCompany =
          "Publishing Company must not be empty!";
        this.errorValidation.push(this.validationPublishingCompany);
      }

      var dateNow = new Date();
      var yearCurrent = dateNow.getFullYear();
      if (this.book.yearPublish < 1000 || this.book.yearPublish > yearCurrent) {
        this.validationYearPublishing =
          "Year Publish between 1900 and " + yearCurrent + "!";
        this.errorValidation.push(this.validationYearPublish);
      }

      if (this.book.categoryName == "") {
        this.validationCategoryName = "Please choose some categories!";
        this.errorValidation.push(this.validationCategoryName);
      }

      if (this.book.price < 0) {
        this.validationPrice = "Price must not be < 0!";
        this.errorValidation.push(this.validationPrice);
      }

      if (this.book.status == 0) {
        this.validationStatus = "Please choose status!";
        this.errorValidation.push(this.validationStatus);
      }

      // if (this.$refs.imageUploaderCreate.files.length < 1 || this.$refs.imageUploaderUpdate.files.length < 1) {
      //   this.validationImages = "Please choose some photos!";
      //   this.errorValidation.push(this.validationImages);
      // }
      return this.errorValidation;
    },
    resetValidation: function () {
      this.errorValidation = [];
      (this.validationTitle = ""),
        (this.validationAuthor = ""),
        (this.validationManufacture = ""),
        (this.validationPublishingCompany = ""),
        (this.validationYearPublishing = ""),
        (this.validationDateSale = ""),
        (this.validationCategoryName = ""),
        (this.validationPrice = ""),
        (this.validationStatus = ""),
        (this.validationImages = "");
    },
    resetData: function () {
      (this.book.bid = ""),
        (this.book.titleBook = ""),
        (this.book.author = ""),
        (this.book.manufacture = ""),
        (this.book.publishingCompany = ""),
        (this.book.yearPublish = 0),
        (this.book.dateSale = ""),
        (this.book.categoryName = []),
        (this.book.price = 0),
        (this.book.description = ""),
        (this.book.status = 0),
        (this.book.imageList = []),
        (this.category = ""),
        //(this.listCategorySelected = []),
        (this.errorValidation = []),
        (this.validationTitle = ""),
        (this.validationAuthor = ""),
        (this.validationManufacture = ""),
        (this.validationPublishingCompany = ""),
        (this.validationYearPublishing = ""),
        (this.validationDateSale = ""),
        (this.validationCategoryName = ""),
        (this.validationPrice = ""),
        (this.validationStatus = ""),
        (this.validationImages = "");
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
    showDetailProduct: function (id) {
      this.showDetail = true;
      this.book.bid = id;
    },
    closeDetailProduct: function () {
      this.showDetail = false;
      this.book.bid = null;
    },
  },
  mounted() {
    this.getAllCategory();
    this.getAllBook();
  },
};
</script>

<style>
.product {
  margin: 0;
  padding: 0;
}
form {
  font-size: 0.8rem;
}

input {
  height: 35px;
  font-size: 0.8rem;
}

label {
  font-weight: bold;
}
.form-control {
  margin-bottom: 10px;
  width: 90%;
}
.form-select,
option {
  cursor: pointer;
}
input[type="date"] {
  cursor: pointer;
}
.display-selected {
  width: fit-content;
  padding: 0px 7px 2px 5px;
  background: #0984e3;
  color: white;
  border-radius: 10px;
  display: inline-block;
  margin: 0px 3px 5px 0px;
}

.btn-x {
  color: white;
  float: right;
  padding-left: 10px;
}
.btn-x:hover {
  color: black;
  cursor: pointer;
}
.detail-error-validation {
  color: red;
}
#product-detail-display {
  height: 120vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 10;
  margin: -2vh 0 0 -1.6vw;
}
#product-detail-content {
  height: 80vh;
  width: 80vw;
  margin: 5vh 3vw 5vh 3vw;
  padding: 5vh 3vw 5vh 3vw;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  display: inline-block;
}
#icon-close {
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  right: 0;
  margin: 60px 60px 0 0;
}
#icon-close:hover {
  color: red;
}
</style>