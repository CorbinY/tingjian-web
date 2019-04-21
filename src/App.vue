<template>
  <div>
    <!--    <img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
  import {getHttp} from "../config/api";

  export default {
    name: 'App'
  }

  getHttp("127.0.0.1/test"){

  }
</script>

<style>
  /*#app {*/
  /*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*  -webkit-font-smoothing: antialiased;*/
  /*  -moz-osx-font-smoothing: grayscale;*/
  /*  text-align: center;*/
  /*  color: #2c3e50;*/
  /*  margin-top: 60px;*/
  /*}*/
</style>
