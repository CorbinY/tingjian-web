<template>
  <div>
    <div id="globle">
      <div id="top_title">
        听鉴
      </div>
      <hr/>
      <div id="title_des">
      </div>
      <div id="slogan">听/见/余/生 &nbsp;&nbsp;听/鉴/余/生</div>
      <div id="entrance" @click="skipToMainPage()">
        <!--        <router-link to="/login" class="router-link-active"></router-link>-->
        进 入 官 网
      </div>
      <div id="content-img">

      </div>
      <div id="bottom">

      </div>
    </div>
  </div>
</template>

<script>
  import MusicNamePlug from "@/components/MusicNamePlug";
  import storage from "../../config/LocalStorage";

  export default {
    name: "Welcome",
    components: {
      MusicNamePlug
    },
    methods: {
      skipToMainPage() {
        storage.set('tagName',this.constant.musicHomeRecommend.navName);
        // //请求今日热点歌曲
        // //先使用最新歌曲代替
        // Common.getSongListFromServer(this.constant.musicHomeLastSong.navCode);
        this.$router.push("/last/shelf");

      }
    }


  }


</script>

<style scoped>
  @import '../assets/css/welcome.css';
</style>
