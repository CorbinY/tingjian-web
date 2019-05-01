<template>
  <div id="search-all">
    <div id="search-top">搜索/歌名/歌手/</div>
    <div class="container">
      <div class="parent" @keyup.enter="searchEnterFun">
        <input type="text" class="search" placeholder="暂时支持歌曲搜索" v-model="param.searchValue" >
        <input type="button" name="" id="" class="btn">
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios';
  import storage from "../../../config/LocalStorage";
    export default {
        name: "Search",
      data(){
          return{
            param:{
              userId:0,
              searchValue:''
            },
          }
      },methods:{
        searchEnterFun:function(e){
          var keyCode = window.event? e.keyCode:e.which;
            console.log('回车搜索',keyCode,e);
         // alert("huichesousuo");

          if(keyCode == 13){
            //跳转搜索后的界面
            //this.$router.push({path:'/Share?keywords='+this.input});
            this.searchSongs(this.param);
          }

        },
        searchSongs(inputString){
          var api="/api/music/search";
          Axios.post(api,this.param).then(response=>{
            if (response.data.code==0){
              storage.set("songList",response.data.result);
            }
          })
        }
      }



    }
</script>

<style scoped>
  @import "../../assets/css/search/search.css";
</style>
