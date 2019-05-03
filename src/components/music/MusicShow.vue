<template>
  <!--音乐展示div-->
  <div id="music-info-box">
    <div id="song-name">{{songInfo.songName}}</div>
    <hr>
    <div id="recommend-word">{{songInfo.songRecommendWord}}</div>
    <div>
      <div id="player">
        <MusicPlayMini :songInfo="songInfo"></MusicPlayMini>
      </div>
      <div id="user-action">
        <div id="collect-love">
          <button class="btn1" :style="{backgroundImage:'url('+loveCollectImg+')'}" @click="changeLoveStatus(!loveCollectStatus)"></button>
        </div>
        <div id="to-star">
          <button class="btn2" :style="{backgroundImage:'url('+loveStarImg+')'}" @click="changeStarStatus(!loveStarStatus)"></button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MusicPlayMini from "@/components/music/MusicPlayMini";
  import LocalStorage from "../../../config/LocalStorage";

  export default {
    name: "MusicShow",
    components: {MusicPlayMini},
    data() {
      return {
        loveCollectStatus:false,
        loveCollectImg: require('../../assets/images/icon/love_grey.png'),

        loveStarStatus:false,
        loveStarImg: require('../../assets/images/icon/star-grey.png'),
        songInfo:LocalStorage.get("songDataList").content[this.songInfoIndex],

      }
    },
    methods: {
      //
      changeLoveStatus(loveCollectStatus){
        this.loveCollectStatus=loveCollectStatus;

        if (loveCollectStatus===true){
          this.loveCollectImg=require('../../assets/images/icon/love.png');
        } else {
          this.loveCollectImg=require('../../assets/images/icon/love_grey.png');
        }

      },
      changeStarStatus(loveStarStatus){
        this.loveStarStatus=loveStarStatus;
        if (loveStarStatus===true){
          this.loveStarImg=require('../../assets/images/icon/star.png');
        } else {
          this.loveStarImg=require('../../assets/images/icon/star-grey.png');
        }
      },

    },
    props:['songInfoIndex'],
    created() {
      //调用
    }
  }
</script>

<style scoped>
  @import "../../assets/css/music/musicShow.css";

  .btn1 {
    height: 35px;
    width: 35px;
    background: none;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 60% 60%;
    position: relative;
    top: 15px;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .btn2 {
    height: 35px;
    width: 35px;
    background: none;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 80% 80%;
    position: relative;
    top: 15px;
    border: none;
    outline: none;
    cursor: pointer;
  }
</style>
