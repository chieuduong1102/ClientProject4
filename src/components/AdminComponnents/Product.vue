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
                  @change="handleFileChange()"
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
        <form action="" @submit.prevent="updateBook()">
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
                  @change="handleFileChange()"
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
    </div>
  </div>
</template>

<script>
import axios from "axios";
const API_URL = "http://localhost:8088/";
export default {
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
        categoryName: [],
        price: 0,
        description: "",
        status: 0,
        listImg: [],
      },
      category: "",
      categorySelected: {
        categoryName: ""
      },
      listCategorySelected : [],
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
    createBook: function () {
      this.validationForm();
      if (this.validationForm().length == 0) {
        axios
          .post(API_URL + "book/create", {
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
          { headers: {
            "Content-Type": "application/json",
          },
          })
          .then((response) => {
            console.log(response.data);
            var bid = 0;
            bid = response.data.bid;
            console.log("BookID: " +bid);
            this.createCategory(bid);
            this.createImage(bid);
          })
          .catch((error) => console.log(error));
      }
    },
    updateBook: function () {
      this.validationForm();
      if (this.validationForm().length == 0) {
        axios
          .post(API_URL + "book/update", {
            titleBook: this.book.titleBook,
            author: this.book.author,
            manufacture: this.book.manufacture,
            publishingCompany: this.book.publishingCompany,
            yearPublish: this.book.yearPublish,
            dateSale: this.book.dateSale,
            categoryName: this.book.categoryName,
            price: this.book.price,
            description: this.book.description,
            status: this.book.status,
          })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => console.log(error));
      }
    },
    handleFileChange: function () {
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
          this.validationImages = '';
          this.book.listImg.push(this.$refs.imageUploaderCreate.files[index]);
        }
        console.log();
      }
      console.log(this.book.listImg);
    },
    changeCategory: function (category) {
      if (!this.book.categoryName.includes(category)) {
        this.book.categoryName.push(category);
        this.categorySelected.categoryName = category;
        console.log(this.categorySelected);
        this.listCategorySelected.push(this.categorySelected);
      }
    },
    removeCategory: function (category) {
      this.book.categoryName.splice(
        this.book.categoryName.indexOf(category.categoryName),
        1
      );
      this.listCategorySelected.splice(
        this.listCategorySelected.indexOf(category.categoryName),
        1
      );
      console.log(this.listCategorySelected);
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
          console.log(this.listCategory);
        })
        .catch((error) => console.log(error));
    },
    createCategory: function(bid){
          axios
          .post(API_URL + "bookcategory/create?bid="+bid , 
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
        this.validationPublishingCompany = "Publishing Company must not be empty!";
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

      if (this.$refs.imageUploaderCreate.files.length < 1) {
        this.validationImages = "Please choose some photos!";
        this.errorValidation.push(this.validationImages);
      }
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
  },
  mounted() {
    this.getAllCategory();
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