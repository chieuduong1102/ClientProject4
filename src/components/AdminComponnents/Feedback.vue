<template>
  <div class="feedback">
    <h1>{{getName}}</h1>
    <button class="btn btn-primary" @click="updateName()">Change</button>
  </div>
</template>
<script>
// import axios from "axios";
// const API_URL = "http://localhost:8088/";
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getName'])
  },
  data() {
    return {
      
    };
  },
  methods: {
    ...mapMutations(['setName']),
    ...mapActions(['updateName'])
  },
  mounted() {
      
  },

};
</script>
<style scoped>
</style>