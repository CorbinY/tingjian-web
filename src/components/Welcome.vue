<template>
  <div>
    <div>
      <div id="welcomeShow1">
        听鉴
      </div>
      <div id="welcomeShow2">
        <span class="yinyuehao"> <img @click="skipToMainPage()" src="../assets/images/welcome/introduce/yinyuehao3.png"
                                      width="500" height="250px"></span>
      </div>
    </div>

    <div id="singerShowIntroduce">
      入驻歌手
    </div>
    <div id="singerShow">

    </div>

    <div id="globle">
      <div id="top_title">
        听鉴
        <hr/>
      </div>
      <div id="title_des">
      </div>

      <div id="slogan">听/见/余/声 &nbsp;&nbsp;听/鉴/余/生</div>
      <div id="entrance" @click="skipToMainPage()">
        <!--        <router-link to="/login" class="router-link-active"></router-link>-->
        进 入 官 网
      </div>
      <div id="content-img">
      </div>
    </div>
    <div class="homeFooter">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import MusicNamePlug from "@/components/MusicNamePlug";
  import LocalStorage from "../../config/LocalStorage";
  import Footer from "@/components/frame/Footer";

  export default {
    name: "Welcome",
    components: {
      Footer,
      MusicNamePlug
    },
    methods: {
      skipToMainPage() {
        LocalStorage.set('tagName', this.constant.musicHomeRecommend.navName);
        // //请求今日热点歌曲
        // //先使用最新歌曲代替
        var userId = LocalStorage.get("userInfo").userId;
        if (userId == null) {
          //未登录
          var userInfo={
            userId:0
          };
          LocalStorage.set("userInfo",userInfo );
        }

        this.$router.push("/index");

      }
    }


  }


</script>

<style scoped>
  @import '../assets/css/welcome.css';

  .homeFooter {
    width: 1250px;
    min-width: 1250px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -70px;
    background-color: gray;
  }

  .yinyuehao {
    position: relative;
    left: 600px;
    top: -85px;

  }
</style>
