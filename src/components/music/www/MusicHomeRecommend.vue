<template>
  <div class="showPageBox">
    <div>
      <FrameBox></FrameBox>
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
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import FrameBox from "@/components/frame/FrameBox";
  import MusicShow from "@/components/music/MusicShow";
  import LocalStorage from "../../../../config/LocalStorage";
  import Footer from "@/components/frame/Footer";
  import Axios from "axios";
  import  VueEvent from "../../../../config/VueEvent";

  export default {
    name: "MusicHomeRecommend",
    components: {MusicShow, FrameBox,Footer},
    data() {
      return {
        songDataList:{content:[]} ,
        tagName:''
      }
    },beforeCreate() {

    }
    ,mounted() {
      //发布nav导航信息
      // LocalStorage.set('tagName', this.constant.musicHomeRecommend.navName);
      // VueEvent.$emit('tagName',LocalStorage.get('tagName'));
      // alert(LocalStorage.get('tagName'));
      // this.tagName=this.constant.musicHomeRecommend.navName;
      // VueEvent.$emit('tagName',this.tagName);

      Axios.post(this.constant.musicHomeRecommend.api,this.constant.page).then(response=>{
        this.songDataList=response.data.result;
        LocalStorage.set("songDataList", response.data.result);
      });
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
</style>
