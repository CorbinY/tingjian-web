<template>
  <div id="nav_box">
    <div id="nav_top_img"></div>
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
  import LocalStorage from "../../../config/LocalStorage";
  import Common from "../../../config/Common";

  export default {
    name: "Nav",
    data() {
      return {
        list: ['今日热点', '新歌速递', '热门神曲', '爱豆之家', '心动模式', '个人私藏', '账号中心'],
        ind: '',
        // "result": {
        //   "content": [],
        //   "pageable": {
        //     "sort": {
        //       "unsorted": true,
        //       "sorted": false,
        //       "empty": true
        //     },
        //     "pageSize": 1,
        //     "pageNumber": 0,
        //     "offset": 0,
        //     "unpaged": false,
        //     "paged": true
        //   },
        //   "totalElements": 2,
        //   "totalPages": 2,
        //   "last": false,
        //   "first": true,
        //   "sort": {
        //     "unsorted": true,
        //     "sorted": false,
        //     "empty": true
        //   },
        //   "numberOfElements": 1,
        //   "size": 1,
        //   "number": 0,
        //   "empty": false
        // },
      }
    },
    methods: {
      getSongList(index) {
        LocalStorage.set('tagName', this.list[index]);

        //清楚缓存歌曲,每次跳转更细歌曲
        LocalStorage.remove("songDataList");
        var userId = LocalStorage.get("userId");

        if (index === 0) {
          this.$router.push("/index");
        } else if (index === 1) {
          this.$router.push("/last/shelf");

        } else if (index === 2) {
          this.$router.push("/hot/song");

        } else if (index === 3) {
          if (userId === 0) {
            this.pleaseLogin();
          } else {
            this.$router.push("/singer/song");
          }

        } else if (index === 4) {
          if (userId === 0) {
            this.pleaseLogin();
          } else {
            this.$router.push("/tingjian");
          }

        } else if (index === 5) {
          if (userId === 0) {
            this.pleaseLogin();
          } else {
            this.$router.push("/collect");
          }

        } else if (index === 6) {
          if (userId === 0){
            this.$router.push("/login");
          } else {
            alert("已登录");
          }

        }

      },
      pleaseLogin() {
        alert("请登陆后使用本功能");
        this.$router.push("/login");
      },
      isUserLogined(userId) {

      }

    }, mounted() {
      //默认userId=0
      if (LocalStorage.get("userId") == null) {
        LocalStorage.set("userId", 0);
      }
    }

  }

</script>

<style scoped>
  @import "../../assets/css/nav/nav.css";
</style>
