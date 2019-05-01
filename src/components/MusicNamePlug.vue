<!--<template>-->
<!--  <div id="show_song_name">-->
<!--    音乐名模块-->
<!--    &lt;!&ndash;    <button @click="getDataTest"> qingqiushujv</button>&ndash;&gt;-->
<!--    &lt;!&ndash;    <ul>&ndash;&gt;-->
<!--    &lt;!&ndash;      <li >&ndash;&gt;-->
<!--    &lt;!&ndash;        {{str}}&ndash;&gt;-->
<!--    &lt;!&ndash;      </li>&ndash;&gt;-->
<!--    &lt;!&ndash;    </ul>&ndash;&gt;-->

<!--    <button @click="getData()">请求数据</button>-->
<!--    <hr>-->
<!--    <br>-->
<!--    {{msg}}-->
<!--    &lt;!&ndash;    <ul>&ndash;&gt;-->
<!--    &lt;!&ndash;      <li v-for="item in list">&ndash;&gt;-->

<!--    &lt;!&ndash;        {{item.title}}&ndash;&gt;-->
<!--    &lt;!&ndash;      </li>&ndash;&gt;-->
<!--    &lt;!&ndash;    </ul>&ndash;&gt;-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->


<!--  //import {AxiosInstance as Axios} from "axios";-->
<!--  //import {getHttp} from "../../config/api";-->
<!--  //-->
<!--  //export default {-->
<!--  //  name: 'MusicNamePlug',-->
<!--  //  data () {-->
<!--  //    return {-->
<!--  //      str: {-->
<!--  //        message: '',-->
<!--  //        success: ''-->
<!--  //      }-->
<!--  //    }-->
<!--  //  },-->
<!--  //  methods: {-->
<!--  //    // run1:function () {-->
<!--  //    //   alert("nihao");-->
<!--  //    // }-->
<!--  //-->
<!--  //    getDataTest () {-->
<!--  //      var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';-->
<!--  //-->
<!--  //      // getHttp(api,).then((response) => {-->
<!--  //      //   this.str=response.result;-->
<!--  //      // })//请求返回数据-->
<!--  //-->
<!--  //      Axios.get(api)-->
<!--  //        .then((response) => {-->
<!--  //          // this.str=response.data.result;-->
<!--  //          this.str = '123';-->
<!--  //          console.log(response)-->
<!--  //        })-->
<!--  //        .catch(function (error) {-->
<!--  //          // handle error-->
<!--  //          console.log(error)-->
<!--  //        })-->
<!--  //        .then(function () {-->
<!--  //          // always executed-->
<!--  //        })-->
<!--  //      // this.str.message="123";-->
<!--  //    },-->
<!--  //    mounted(){-->
<!--  //      this.getDataTest();-->
<!--  //    }-->
<!--  //  }-->
<!--  //-->
<!--  //}-->


<!--  import Axios from 'axios';-->

<!--  export default {-->
<!--    data() {-->
<!--      return {-->
<!--        msg :''-->
<!--      }-->
<!--    },-->
<!--    methods: {-->

<!--      getData() {-->

<!--        var api = '/api/user/test/vue';-->
<!--        Axios.get(api).then((response) => {-->
<!--          this.msg = response.data;-->
<!--          alert(response.data)-->
<!--        }).catch((error) => {-->
<!--          console.log(error);-->

<!--        })-->

<!--      }-->
<!--    },-->
<!--    mounted() {  /*生命周期函数*/-->

<!-- //     this.getData();-->

<!--    }-->


<!--  }-->

<!--</script>-->

<!--<style scoped>-->
<!--  #show_song_name {-->
<!--    margin-left: 10%;-->
<!--    margin-top: 10%;-->
<!--  }-->
<!--</style>-->
