<template>
  <div class="product">
    <div class="container-fluid">
      <h1><fa-icon icon="book-open" /> Book</h1>
      <hr />
      <div class="row" v-show="this.isCreateNew">
        <h2>Create Book</h2>
        <h3>{{ book.bid }}</h3>
        <form action="" @submit.prevent="createBook()">
          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <label for="titleBook">Title Book</label>
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
                  placeholder="Title"
                />
              </div>
              <div class="form-group">
                <label for="author">Author</label>
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
                  placeholder="Author"
                />
              </div>
              <div class="form-group">
                <label for="manufacture">Manufacture</label>
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
                  placeholder="Manufacture"
                />
              </div>
              <div class="form-group">
                <label for="publishingCompany">Publishing Company</label>
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
                  placeholder="Publishing Company"
                />
              </div>
              <div class="form-group">
                <label for="yearPublish">Year Publishing</label>
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
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="dateSale">Date Sale</label>
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
                <label for="category">Category</label>
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
                  <option disabled value="">--Select Category--</option>
                  <option v-for="(cat, index) in listCategory" :key="index">
                    {{ cat }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <textarea
                  type="number"
                  class="form-control"
                  rows="4"
                  v-model="book.description"
                  placeholder="Book's description..."
                />
              </div>
              <div class="form-group">
                <label for="price">Price</label>
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
                  placeholder="$"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group" style="width: 50%">
                <label for="status">Status</label>
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
                  <option selected value="0" disabled>--Select Status--</option>
                  <option value="1">Disable</option>
                  <option value="2">Active</option>
                  <option value="3">Coming soon</option>
                </select>
              </div>
              <div class="form-group">
                <label for="images">Images</label>
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
                  v-for="(item, index) in book.listImg"
                  :key="index"
                >
                  {{ item.name }}
                </div>
              </div>
              <br />
              <center>
                <button type="submit" class="btn btn-primary">Submit</button>
                <button
                  type="reset"
                  class="btn btn-secondary"
                  @click="resetValidation()"
                >
                  Reset
                </button>
              </center>
            </div>
          </div>
        </form>
      </div>
      <div class="row" v-show="this.isUpdate">
        <h2>Update Book Information</h2>
        <form action="" @submit.prevent="comfirmUpdateBook()">
          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <label for="titleBook">Title Book</label>
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
                  placeholder="Title"
                />
              </div>
              <div class="form-group">
                <label for="author">Author</label>
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
                  placeholder="Author"
                />
              </div>
              <div class="form-group">
                <label for="manufacture">Manufacture</label>
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
                  placeholder="Manufacture"
                />
              </div>
              <div class="form-group">
                <label for="publishingCompany">Publishing Company</label>
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
                  placeholder="Publishing Company"
                />
              </div>
              <div class="form-group">
                <label for="yearPublish">Year Publishing</label>
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
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="dateSale">Date Sale</label>
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
                <label for="category">Category</label>
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
                  <option disabled value="">--Select Category--</option>
                  <option v-for="(cat, index) in listCategory" :key="index">
                    {{ cat }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <textarea
                  type="number"
                  class="form-control"
                  rows="4"
                  v-model="book.description"
                  placeholder="Book's description..."
                />
              </div>
              <div class="form-group">
                <label for="price">Price</label>
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
                  placeholder="$"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group" style="width: 50%">
                <label for="status">Status</label>
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
                  <option selected value="0" disabled>--Select Status--</option>
                  <option value="1">Disable</option>
                  <option value="2">Active</option>
                  <option value="3">Coming soon</option>
                </select>
              </div>
              <div class="form-group">
                <label for="images">Images</label>
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
                  v-for="(item, index) in book.listImg"
                  :key="index"
                >
                  {{ item.name }}
                </div>
              </div>
              <br />
              <center>
                <button type="submit" class="btn btn-success">Update</button>
                <button
                  type="reset"
                  class="btn btn-secondary"
                  @click="
                    resetValidation();
                    isCreateNew = true;
                    isUpdate = false;
                    isDelete = false;
                  "
                >
                  Cancel
                </button>
              </center>
            </div>
          </div>
        </form>
      </div>
      <br />
      <div class="row">
        <div class="col-md-12">
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
                  label="Search"
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
                    <td>{{ row.item.manufacture }}</td>
                    <td>{{ row.item.publishingCompany }}</td>
                    <td>{{ row.item.yearPublish }}</td>
                    <td>{{ row.item.dateSale }}</td>
                    <td>
                      <span
                        v-for="(cat, index) in row.item.bookcategoryList"
                        :key="index"
                        >{{ cat.cid.categoryName }},
                      </span>
                    </td>
                    <td>{{ row.item.price }} $</td>
                    <td>{{ formatStatus(row.item.status) }}</td>
                    <!-- <td>{{ row.item.listImg }}</td> -->
                    <td>
                      <div class="row">
                        <div
                          class="col-md-4"
                          v-for="(img, index) in row.item.imageList"
                          :key="index"
                        >
                          <img
                            :src="img.nameFile"
                            class="img-fluid"
                            style="margin: 5px"
                            alt=""
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <v-btn
                        class="mx-2"
                        fab
                        dark
                        small
                        color="blue"
                        @click="findBook(row.item.bid)"
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
                    <td>
                      <v-btn
                        class="mx-2"
                        fab
                        dark
                        small
                        color="red"
                        @click="deleteBook(row.item.bid)"
                      >
                        <v-icon dark>mdi-delete</v-icon>
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
</template>

<script>
import axios from "axios";
const API_URL = "http://localhost:8088/";
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Title",
          align: "start",
          filterable: false,
          value: "titleBook",
        },
        { text: "Author", value: "author" },
        { text: "Manufacture", value: "manufacture" },
        { text: "Publish Company", value: "publishingCompany" },
        { text: "Year Publish", value: "yearPublish" },
        { text: "Date Sale", value: "dateSale" },
        { text: "Category", value: "categoryName" },
        { text: "Price", value: "price" },
        { text: "Status", value: "status" },
        { text: "Image", value: "listImg" },
        { text: "Detail" },
        { text: "Update" },
        { text: "Delete" },
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
        listImg: [],
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
          .then(
            this.getAllBook()
          )
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
          this.book.categoryName=[];
          listCategoryRes = response.data.bookcategoryList;
          for (let index = 0; index < listCategoryRes.length; index++) {
            this.changeCategory(listCategoryRes[index].cid.categoryName);  
          }
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
      console.log(this.book.bid);
      this.validationForm();
      if (this.validationForm().length == 0) {
        axios
          .post(API_URL + "book/update", {
            bid : this.book.bid,
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
          })
          .then((response) => {
            console.log(response.data);
          })
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
      this.book.categoryName.splice(
        this.book.categoryName.indexOf(category.categoryName),
        1
      );
    },
    handleFileChangeCreate: function () {
      this.errorValidation = [];
      this.book.listImg = [];
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
          this.book.listImg.push(this.$refs.imageUploaderCreate.files[index]);
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
          this.book.listImg.push(this.$refs.imageUploaderUpdate.files[index]);
        }
      }
      console.log(this.book.listImg);
    },
    handleFileChangeUpdate: function () {
      this.errorValidation = [];
      this.book.listImg = [];
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
          this.book.listImg.push(this.$refs.imageUploaderUpdate.files[index]);
        }
      }
      console.log(this.book.listImg);
    },
    createImage: function (bid) {
      let fd = new FormData();
      this.book.listImg.forEach((img) => {
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
          this.book.listImg = [];
        })
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
      console.log(bid);
      console.log(this.listCategorySelected);
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
        //(this.book.listImg = []),
        //(this.category = ""),
        //(this.listCategorySelected = []),
        //(this.listCategory = []),
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
        return "Disabled";
      } else if (stt == 2) {
        return "Active";
      } else if (stt == 3) {
        return "Comming soon";
      } else {
        return "NULL";
      }
    },
  },
  mounted() {
    this.getAllCategory();
    this.getAllBook();
  },
};
</script>

<style>
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
</style>