<template>
  <div class="showPageBox">
    <div>
      <FrameBox v-if="isFrush"></FrameBox>
    </div>
    <div class="musicList">
      <ul>
        <li v-for="(item ,index) in songDataList.content">
          <div class="MusicShowBox">
            <MusicShow :songInfoIndex='index'></MusicShow>
          </div>
        </li>
      </ul>
    </div>
    <div class="pagePlug">
      <button @click="prePage">上一页</button>
      {{currentPage}} / {{totalPage}}
      <button @click="nextPage">下一页</button>
    </div>

    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import FrameBox from "@/components/frame/FrameBox";
  import MusicShow from "@/components/music/MusicShow";
  import Footer from "@/components/frame/Footer";
  import Axios from "axios";
  import LocalStorage from "../../../../config/LocalStorage";
  import VueEvent from "../../../../config/VueEvent";


  export default {
    name: "MusicHomeLastSong",
    components: {MusicShow, FrameBox, Footer},
    data() {
      return {
        isFrush:false,
        currentPage: 1,
        totalPage: 1,

        sourceRequest: {
          pageSize: 10,
          pageNum: 0,
          userId: 0,
        },
        songDataList: {content: []},
        tagName: ''

      }
    }, beforeCreate() {
    }, mounted() {
      LocalStorage.set('tagName',this.$route.name);
      this.isFrush=true;

      this.sourceRequest.userId = LocalStorage.get("userInfo").userId;
      Axios.post(this.constant.musicHomeLastSong.api, this.sourceRequest).then(response => {
        this.songDataList = response.data.result;
        //   this.content = response.data.result.content;
        LocalStorage.set("songDataList", response.data.result);
        this.totalPage = this.songDataList.totalPages;

      });
    }, methods: {
      async prePage() {
        if (this.currentPage > 1) {
          this.currentPage = this.currentPage - 1;
          this.sourceRequest.pageNum = this.sourceRequest.pageNum - 1;

          await Axios.post(this.constant.musicHomeLastSong.api, this.sourceRequest).then(response => {
            if (response.data.code === 0) {
              this.songDataList.content.splice(0, this.songDataList.content.length);
              this.$nextTick(() => {
                this.songDataList = response.data.result;
              });

              LocalStorage.set("songDataList", response.data.result);
            }
          })
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPage) {
          this.currentPage = this.currentPage + 1;
          this.sourceRequest.pageNum = this.sourceRequest.pageNum + 1;

          Axios.post(this.constant.musicHomeLastSong.api, this.sourceRequest).then(response => {
            if (response.data.code === 0) {
              this.songDataList.content.splice(0, this.songDataList.content.length);
              this.$nextTick(() => {
                this.songDataList = response.data.result;
              });

              //     this.content = response.data.result.content;
              LocalStorage.set("songDataList", response.data.result);
            }
          })

        }
      }
    }


  }
</script>

<style scoped>
  .showPageBox {
    width: 1250px;
    min-width: 1250px;
    margin-left: auto;
    margin-right: auto;


    background-color: white;
  }

  .musicList {
    position: relative;
    top: -40px;
    left: 10px;
  }

  .MusicShowBox {
    margin-bottom: 50px;

  }

  li {
    list-style: none;
  }

  .pagePlug {
    width: 200px;
    height: 50px;
    position: relative;
    left: 250px;
  }
</style>
