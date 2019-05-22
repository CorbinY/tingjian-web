<template>
  <!--音乐展示div-->
  <div id="music-info-box" >
    <div id="song-name" @click="skip2Detail()">{{songInfo.songName}}</div>
    <hr>
    <div id="recommend-word">{{songInfo.songRecommendWord}}</div>
    <div>
      <div id="player">
        <MusicPlayMini :songInfo="songInfo"></MusicPlayMini>
      </div>
      <div id="user-action">
        <div id="collect-love">
          <button class="btn1" :style="{backgroundImage:'url('+loveCollectImg+')'}"
                  @click="changeLoveStatus(!songInfo.songCollectStatus)"></button>
        </div>
        <div id="to-star">
          <button class="btn2" :style="{backgroundImage:'url('+loveStarImg+')'}"
                  @click="changeStarStatus(!loveStarStatus)"></button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MusicPlayMini from "@/components/music/MusicPlayMini";
  import qs from "qs";

  export default {
    name: "MusicShow",
    components: {MusicPlayMini},
    data() {
      return {
        userInfo: '',
        loginStatus: false,
        loveCollectImg: require('../../assets/images/icon/love_grey.png'),

        loveStarStatus: false,
        loveStarImg: require('../../assets/images/icon/star-grey.png'),
        songInfo: {
          songName: '',
          singerName:'',
          songId: 0,
          songRecommendWord: '',
          songCollectStatus:false
        }
      }
    },
    methods: {
      skip2Detail(){
        this.LocalStorage.set('detailSingleMusicId',this.LocalStorage.get("songDataList").content[this.songInfoIndex].songId);
        this.$router.push('/music/detail');
      },


      //
      async changeLoveStatus(loveCollectStatus) {

       await this.checkUserLogin();
        if (this.loginStatus === false) {
          return;
        }

        this.songInfo.songCollectStatus = loveCollectStatus;
        if (this.songInfo.songCollectStatus === true) {
          //收藏
          this.addCollectSong(this.songInfo.songId,this.userInfo.userId);
          this.loveCollectImg = require('../../assets/images/icon/love.png');
        } else {
          //再次执行，取消收藏
          this.delCollectSong(this.songInfo.songId,this.userInfo.userId);
          this.loveCollectImg = require('../../assets/images/icon/love_grey.png');
        }

      },
      changeStarStatus(loveStarStatus) {
        this.loveStarStatus = loveStarStatus;
        if (loveStarStatus === true) {
          var api = '/song/star';
          var starSongResource={
            userId:this.userInfo.userId,
            songId:this.songInfo.songId
          };

         this.Axios.post(api, qs.stringify(starSongResource)).then(response => {
          });
          this.loveStarImg = require('../../assets/images/icon/star.png');
        }/* else {
          this.loveStarImg=require('../../assets/images/icon/star-grey.png');
        }*/
      },

      async checkUserLogin() {
        var userId = this.LocalStorage.get('userInfo').userId;
        if (userId === 0) {
          alert("请登录后使用收藏功能");
          this.loginStatus = false;
        } else {
          var api = '/user/check/user/login-status';
          await this.Axios.post(api, this.LocalStorage.get("userInfo")).then(response => {
            if (response.data.code === 11003) {
              alert("离线时间过长,登录失效,请先登录再使用收藏功能");
             this.loginStatus = false;
            } else if (response.data.code === 0) {
             this.loginStatus = true;
            }
          });
        }
      },
      /**
       * 添加收藏
       * @param songId
       * @param userId
       * @returns {Promise<void>}
       */
      async addCollectSong(songId, userId) {
        let api = '/song/add-collect-song';
        let collectSongParam = {
          userId: userId,
          songId: songId
        };
        await this.Axios.post(api, qs.stringify(collectSongParam)).then(response => {
          if (response.data.code != 0) {
            alert("收藏失败");
          } else {
            this.songInfo.songCollectStatus = true;
          }
        });
      },
      /**
       * 删除收藏
       * @param songId
       * @param userId
       * @returns {Promise<void>}
       */
      async delCollectSong(songId, userId) {
        let api = '/song/del-collect-song';
        let collectSongParam = {
          userId: userId,
          songId: songId
        };
        await this.Axios.post(api, qs.stringify(collectSongParam)).then(response => {
          if (response.data.code != 0) {
            alert("删除收藏失败");
          } else {
            this.songInfo.songCollectStatus = false;
          }
        });
      }

    },
    props: ['songInfoIndex'],
    created() {
      this.Axios.post()


      this.songInfo = this.LocalStorage.get("songDataList").content[this.songInfoIndex];
      this.userInfo = this.LocalStorage.get('userInfo');
      if (this.songInfo.songCollectStatus==true){
       this.loveCollectImg=require('../../assets/images/icon/love.png');
      }
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
