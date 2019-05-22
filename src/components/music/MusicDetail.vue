<template>
  <div id="global">
    <div>
      <FrameBox v-if="isFrush"></FrameBox>
    </div>
    <div id="song_desc">
      <span style="margin-left: 1em">歌名:{{songInfo.songName}}</span>
      <br>
      <span style="margin-left: 1em">歌手:{{songInfo.singerName}}</span>
      <br>
      <span style="margin-left: 1em">歌曲介绍:{{songInfo.songDesc}}</span>
      <br>
      <span style="margin-left: 1em">歌手简介:{{songInfo.singerDesc}}</span>
    </div>
    <div id="song_play" v-if="isFrush">
      <a-player theme="#C20C0C" :music=music>
      </a-player>
    </div>
    <div id="song_img">
      <img src="/static/image/music/default-play.jpg" width="200px" height="200px">
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
    <div id="song_lyrics">
      <span style="font-family: 'Serif', '萍方粗';font-size: 140%;position: relative;top: 30px;left: 30px"><i>{{songInfo.songName}}</i></span>
      <span style="position: relative;top: 150px;left: -60px;font-size: small"> {{songInfo.songLyrics}}</span>
    </div>
    <div id="song_split_comment">
      <hr>
    </div>
    <div id="comment">
      <div id="insert_comment">
        <textarea placeholder="登录用户可以发表评论" rows="5"
                  cols="90" maxlength="500" v-model="commentContent"></textarea>
        <button class="commend" @click="addComment(songInfo.songId,userInfo.userId)">发布</button>
      </div>
      <div id="comment_list">
        <span style="padding-left: 50px"> 精彩评论:</span>
        <br>
        <ul>
          <li v-for="(item,index) in commentList">
            <div>
              <Comment :commentIndex="index"></Comment>
            </div>
          </li>
        </ul>
      </div>

    </div>
    <div>
      <Footer></Footer>
    </div>

  </div>

</template>

<script>
  import FrameBox from "@/components/frame/FrameBox";
  import VueAplayer from 'vue-aplayer'
  import Comment from "@/components/user/Comment";
  import Footer from "@/components/frame/Footer";
  import  qs from "qs";

  export default {
    name: "MusicDetail",
    components: {Footer, Comment, FrameBox, 'a-player': VueAplayer},

    data() {
      return {
        commentList: {},
        commentContent: '',
        isFrush: false,
        userInfo: '',
        loginStatus: false,
        loveCollectImg: require('../../assets/images/icon/love_grey.png'),

        loveStarStatus: false,
        loveStarImg: require('../../assets/images/icon/star-grey.png'),
        songInfo: {
          songName: '',
          singerName: '',
          songId: 0,
          songRecommendWord: '',
          songCollectStatus: false
        },
        music: {
          title: '',
          artist: '',
          src: '',
          // pic: '/static/image/music/default-play.jpg'
        }
      }
    },
    methods: {
      addComment(songId,userId){
        let commentParam={
          songId:this.songInfo.songId,
          userId:this.userInfo.userId
        };
        this.Axios.post(this.constant.musicDetail.addCommentApi,commentParam).then(response=>{
          if (response.data.code===0){
            alert("发布成功");
          } else if (response.data.code===11003) {
            alert("请先登录再进行评论");
          }
        })
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
    }, created() {
      this.LocalStorage.set('tagName', this.$route.name);
      this.userInfo = this.LocalStorage.get('userInfo');


      var detailSongParam={
        userId:this.userInfo.userId,
        songId:this.LocalStorage.get('detailSingleMusicId')
      };
      this.Axios.post(this.constant.musicDetail.searchSongBySongIdApi,detailSongParam).then(response=>{
        if (response.data.code==0){
          this.$nextTick(() => {
            this.songInfo=response.data.result;

            this.music.artist = this.songInfo.singerName;
            this.music.title = this.songInfo.songName;
            this.music.src = this.songInfo.songPath;
            if (this.songInfo.songCollectStatus===true){
              this.loveCollectImg=require('../../assets/images/icon/love.png');
            }
          });
        }
      });




      //获取评论
      var getCommentParam = {
        userId: this.LocalStorage.get('userInfo').userId,
        songId: this.songInfo.songId
      };
      this.Axios.post(this.constant.musicDetail.GetCommentApi, getCommentParam).then(response => {
        if (response.data.code == 0) {
          this.commentList = response.data.result;
          this.LocalStorage.set("commentList", this.commentList);
        }
      });
      this.isFrush = true;

    }
  }
</script>

<style scoped>
  @import url('../../assets/css/music/musicDetail.css');

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

  textarea {
    border: 1px solid #ccc;
    box-shadow: 0 0 10px #dddddd;
    resize: none;
  }

  button {
    width: 50px;
    height: 82px;
    position: relative;
    top: -35px;
    left: -5px;
    background: white;
  }

  li {
    list-style: none;
  }

  #comment_list {
    position: relative;
    left: -40px;
  }
</style>
