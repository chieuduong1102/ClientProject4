<template>
  <div class="feedback">
    <h1>{{getOrderDetail}}</h1>
  </div>
</template>
<script>
// import axios from "axios";
// const API_URL = "http://localhost:8088/";
import {mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getOrderDetail'])
  },
  data() {
    return {
      
    };
  },
  methods: {
    // ...mapMutations(['setName']),
    // ...mapActions(['updateName'])
  },
  mounted() {
      
  },

};
</script>
<style scoped>
</style>