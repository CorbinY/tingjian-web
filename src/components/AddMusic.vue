<template>
  <div>
    <form>
      选择歌曲文件
      <input type="file" @change="getSongFile($event)"  ><br>
<!--      选择歌曲封面
      <input type="file" @change="getSongImg($enent)" ><br>-->
      <input v-model="music.songName" placeholder="歌曲名字"><br>
      <input v-model="music.singerName" placeholder="歌手名字"><br>
      <input v-model="music.songDesc" placeholder="歌曲描述"><br>
      歌曲类型：歌曲、歌手类型  0.其他 1 .古典、2.摇滚、3流行、4华语、5民谣、6欧美<br>
      <input v-model="music.songType" placeholder="歌曲类型"><br>
      <input v-model="music.songRecommendWord" placeholder="歌曲推荐词"><br>
      <input v-model="music.songPublishTime" placeholder="歌曲发布时间"><br>
      <button @click="addMusic()">添加</button>
    </form>
  </div>
</template>

<script>
  import Axios from 'axios';

  export default {
    name: "AddMusic",
    data() {
      return {
        file:'',
        // file2:'',
        music: {
          songName: '',
          singerName: '',
          songDesc: '',
          songType: 0,
          songRecommendWord: '',
          songPublishTime: ''
        }
      }
    }, methods: {
      getSongFile(event) {
        this.file = event.target.files[0];
        console.log(this.file);
      },
      getSongImg(event) {
        this.file2 = event.target.files[0];
        console.log(this.file2);
      },
      addMusic() {
        var api = '/api/admin/add/music';
        event.preventDefault();//取消默认行为
        //创建 formData 对象
        let formData = new FormData();
        // 向 formData 对象中添加文件
        formData.append('file',this.file);
        // formData.append('file2',this.file2);
        formData.append('songName',this.music.songName);
        formData.append('singerName',this.music.singerName);
        formData.append('songDesc',this.music.songDesc);
        formData.append('songType',this.music.songType);
        formData.append('songRecommendWord',this.music.songRecommendWord);
        formData.append('songPublishTime',this.music.songPublishTime);

        Axios.post(api,formData).then(function (response) {
          console.log("res: ",response);
        })

      }
    }
  }
</script>

<style scoped>

</style>
