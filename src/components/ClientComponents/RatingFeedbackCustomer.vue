<template>
    <div class="container rf-customer">
    <form action="">
        <label for="">Đánh giá: </label>
        <div>
        <br>
        <vue-star-rating
            :animate="true" :active-color="['#ae0000','#f9ca24']" :active-border-color="['#F6546A','#f6e58d']" :border-width="4" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :active-on-click="true" :clearable="true"
            :show-rating="false"
            :star-size="25"
            v-model="ratingStar"
          ></vue-star-rating>
        </div>
        <br>
        <br>
        <label for="">Phản hồi: </label>
        <textarea name="" id="text-area-rf" class="form-control" cols="30" rows="7"></textarea>
        <br>
        <input type="submit" value="Gửi đánh giá" class="btn btn-success">
    </form>
    </div>
</template>
<script>
export default {
     data(){
         return{
             ratingStar: 3,
         }
     },
    mounted() {
        
    },
    methods: {
        changeRating(){
            alert(this.ratingStar);
        }
    }
}
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