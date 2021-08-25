<template>
  <div class="product">
    <div class="container-fluid">
      <h1>Book</h1>
      <form action="" @submit.prevent="createBook()">
        <div class="row">
          <div class="col-md-3">
            <div class="form-group">
              <label for="titleBook">Title Book</label>
              <input
                type="text"
                class="form-control"
                v-model="book.titleBook"
                placeholder="Title"
              />
            </div>
            <div class="form-group">
              <label for="author">Author</label>
              <input
                type="text"
                class="form-control"
                v-model="book.author"
                placeholder="Author"
              />
            </div>
            <div class="form-group">
              <label for="manufacture">Manufacture</label>
              <input
                type="text"
                class="form-control"
                v-model="book.manufacture"
                placeholder="Manufacture"
              />
            </div>
            <div class="form-group">
              <label for="publishingCompany">Publishing Company</label>
              <input
                type="text"
                class="form-control"
                v-model="book.publishingCompany"
                placeholder="Publishing Company"
              />
            </div>
            <div class="form-group">
              <label for="yearPublish">Year Publishing</label>
              <input
                type="number"
                class="form-control"
                v-model="book.yearPublish"
                placeholder="Year Publishing"
              />
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <label for="dateSale">Date Sale</label>
              <input type="date" class="form-control" v-model="book.dateSale" />
            </div>
            <div class="form-group">
              <label for="category">Category</label>
              <div>
                <div
                  v-for="(item, index) in book.categorySelected"
                  :key="index"
                  class="display-selected"
                >
                  {{ item }} <span class="btn-x" @click="removeCategory(item)">x</span>
                </div>
              </div>
              <select
                class="form-select form-control"
                v-model="category"
                @change="changeCategory(category)"
                aria-label="status"
              >
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
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
              <input
                type="number"
                v-model="book.price"
                class="form-control"
                placeholder="$"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group" style="width: 50%">
              <label for="status">Status</label>
              <select
                class="form-select form-control"
                v-model="book.status"
                aria-label="status"
              >
                <option value="1">Disable</option>
                <option value="2">Active</option>
                <option value="3">Coming soon</option>
              </select>
            </div>
            <div class="form-group">
              <label for="status">Images</label>
              <input
                type="file"
                ref="imageUploader"
                @change="handleFileChange()"
                class="form-control"
                
                multiple
              />
            </div>
            <div class="row">
              <br>
              <div class="col-md-4" v-for="(item, index) in book.listImg" :key="index">
                {{item.name}}
              </div>
            </div>
            <br />
            <center>
              <button type="submit" class="btn btn-primary">Submit</button>
              <button type="reset" class="btn btn-secondary">Reset</button>
            </center>
          </div>
        </div>
      </form>
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
        titleBook: "",
        author: "",
        manufacture: "",
        publishingCompany: "",
        yearPublish: 0,
        dateSale: "",
        categorySelected: [],
        price: 0,
        description: "",
        status: 0,
        listImg: [],
      },
      category: "",
    };
  },
  methods: {
    createBook: function () {
      const fd = new FormData();
      for (let index = 0; index < this.book.listImg.length; index++) {
        fd.append("image",this.book.listImg, this.book.listImg.name);
      }
      axios
        .post(API_URL + "book/create", fd)
        .then((response) => {
          let data = response.data;
            console.log(data);
        })
        // .then(
        //   (this.admin.username = ""),
        //   (this.admin.fullname = ""),
        //   (this.admin.email = ""),
        //   (this.admin.phonenumber = ""),
        //   (this.admin.password = ""),
        //   (this.admin.comfirmPassword = "")
        // )
        .catch((error) => console.log(error));
    },
    handleFileChange: function () {
      this.book.listImg = this.$refs.imageUploader.files;
      console.log(this.book.listImg);
    },
    changeCategory: function (category) {
      if (!this.book.categorySelected.includes(category)) {
        this.book.categorySelected.push(category);
      }
    },
    removeCategory: function(category){
      this.book.categorySelected.splice(this.book.categorySelected.indexOf(category),1);
      console.log(this.book.categorySelected);
    }
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
  font-weight: bold;
  cursor: pointer;
}
</style>