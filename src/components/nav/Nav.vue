<template>
  <div id="nav_box">
    <div id="nav_top_img">
     <img src="../../assets/images/nav/navImg2.png" width="400" height="60">
     <!-- 听/见/余/声  <br> 听/鉴/余/生-->
    </div>
    <div id="nav_top_bar">
      <ul>
        <li
          v-for="(item,index) in list"
          @click="getSongList(index)">
          {{item}}
        </li>
      </ul>
      <!-- <ul>
         <li @click="skipPageNav('/login')">今日热点</li>&lt;!&ndash;播放次数最多的 MostListen&ndash;&gt;
         <li @click="skipPageNav('/login')">新歌速递</li> &lt;!&ndash;NewSong&ndash;&gt;
         <li @click="skipPageNav('/login')">热门神曲</li>&lt;!&ndash;点赞最多 MostStar&ndash;&gt;
         <li @click="skipPageNav('/login')">爱豆之家</li>&lt;!&ndash; Singer&ndash;&gt;
         <li @click="skipPageNav('/login')">心动模式</li>&lt;!&ndash;TingJian&ndash;&gt;
         <li @click="skipPageNav('/login')">个人私藏</li>&lt;!&ndash;MyLoveSong &ndash;&gt;
         <li @click="skipPageNav('/login')">账号中心</li>&lt;!&ndash;MyAccount &ndash;&gt;
       </ul>-->
    </div>
  </div>
</template>

<script>
  import Common from "../../../config/Common";
  import Axios from "axios";

  export default {
    name: "Nav",
    data() {
      return {
        list: ['今日热点', '新歌速递', '热门神曲', '爱豆之家', '心动模式', '个人私藏', '账号中心'],
        ind: '',
        loginStatus: false,

        userInfo: {
          userName: '',
          userId: 0,
          userMail: '',
          userAccount: '',
          userDesc: '',
          userSex: 0,
          userHeadPortrait: ''
        }
      }
    },
    methods: {
      async getSongList(index) {
       // this.LocalStorage.set('tagName', this.list[index]);

        //清楚缓存歌曲,每次跳转更细歌曲
        this.LocalStorage.remove("songDataList");

        if (index === 0) {
          this.$router.push("/index");
        } else if (index === 1) {
          this.$router.push("/last/shelf");

        } else if (index === 2) {
          this.$router.push("/hot/song");

        } else if (index === 3) {
          //用户登录状态
          await this.checkUserLogin();
          //验证是否登录
          if (this.loginStatus === true) {
            this.$router.push("/singer/song");
          }
        } else if (index === 4) {
          //验证是否登录
          //用户登录状态
          await this.checkUserLogin();
          if (this.loginStatus === true) {
            this.$router.push("/tingjian");
          }
        } else if (index === 5) {
          //用户登录状态
          await this.checkUserLogin();
          //验证是否登录
          if (this.loginStatus === true) {
            this.$router.push("/collect");
          }
        } else if (index === 6) {
          //用户登录状态
          await this.checkUserLogin();
          //验证是否登录
          if (this.loginStatus === true) {
            this.$router.push("/user-info");
          } else {
            this.$router.push("/login");
          }

        }

      },

      async checkUserLogin() {
        if (this.userInfo.userId === 0) {
          alert("请登录后使用本功能");
          this.loginStatus = false;
        } else {
          var api = '/user/check/user/login-status';
          await Axios.post(api, this.userInfo).then(response => {
            if (response.data.code === 11003) {
              alert("离线时间过长,登录失效,请先登录再使用收藏功能");
              this.loginStatus = false;
            } else if (response.data.code === 0) {
              this.loginStatus = true;
            }
          });
        }
      },

    }, mounted() {
      var userInfo = this.LocalStorage.get("userInfo");
      if (userInfo == null) {
        this.LocalStorage.set("userInfo", this.constant.touristsStatus);
        userInfo = this.LocalStorage.get("userInfo");
      }
      this.userInfo = userInfo;
    }

  }

</script>

<style scoped>
  @import "../../assets/css/nav/nav.css";
</style>
