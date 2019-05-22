<!--实现一个小型音乐播放框，类似网易云外莲 -->
<template>
  <div>
    <a-player theme="#C20C0C" :music=music>
    </a-player>
  </div>
</template>

<script>
  import VueAplayer from 'vue-aplayer'
  import qs from 'qs'

  export default {
    name: "MusicPlayMini",
    components: {'a-player': VueAplayer},
    data() {
      return {
        music: {
          title: this.songInfo.songName,
          artist: this.songInfo.singerName,
          src: this.songInfo.songPath,
          pic: '/static/image/music/default-play.jpg'
        }

      }
    }
    ,
    methods: {
      getSongById(idNum) {
        let data = {"id": idNum};
        var api = "/music/id";
        //表单提交--》@RequestParama
        Axios.post(api, qs.stringify(data)
        ).then(response => {
          alert(response.data.code)
        })
      }

    },
    props: ['songInfo']

  }
</script>

<style scoped>
  @import url('../../assets/css/music/musicPlayerMini.css');

  .mini-play-bar {
    height: 2px;
    background-color: #C20C0C;
    width: 430px;
    position: relative;
    top: -135px;
    left: 90px;

  }

  .mini-no-play-bar {
    height: 2px;
    background-color: #e5e5e5;
    width: 430px;
    position: relative;
    top: -135px;
    left: 90px;

  }
</style>
