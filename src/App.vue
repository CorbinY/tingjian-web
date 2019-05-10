<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
  import LocalStorage from "../config/LocalStorage";

  export default {
    name: 'App',
    created() {
      if (LocalStorage.get('userInfo')==null){
      LocalStorage.set("userInfo",this.constant.touristsStatus);
      }
    },
  //  inject:['reload']//注入reload，刷新页面
  }


</script>

<style>
</style>
