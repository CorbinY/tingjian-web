<template>
  <div id="search-all">
    <div id="search-top">搜索/歌名/歌手/</div>
    <div class="container">
      <div class="parent" @keyup.enter="searchEnterFun">
        <input type="text" class="search" placeholder="暂时支持歌曲搜索" v-model="sourceRequest.searchValue">
        <input type="button" name="" id="" class="btn" @click="click2Search()">
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Search",
    data() {
      return {
        sourceRequest: {
          pageSize: 10,
          pageNum: 0,
          userId: 0,
          searchValue: ''
        },
      }
    }, methods: {
      // searchEnterFun: function (e) {
      async searchEnterFun(e) {
        var keyCode = window.event ? e.keyCode : e.which;
        console.log('回车搜索', keyCode, e);

        if (keyCode == 13) {
          //跳转搜索后的界面
          await this.search();
        }

      },

      async click2Search() {
        await this.search();
      },
      async search() {
        await this.Axios.post(this.constant.searchResult.api, this.sourceRequest).then(response => {
          if (response.data.code == 0) {
            this.songDataList = response.data.result;
            this.LocalStorage.set("songDataList", this.songDataList);
            this.LocalStorage.set('searchValue',this.sourceRequest.searchValue);
            this.totalPage = this.songDataList.totalPages;
          }

        });
        this.$router.push("/search");
      }
    }, mounted() {
      this.sourceRequest.userId = this.LocalStorage.get("userInfo").userId;
    }


  }
</script>

<style scoped>
  @import "../../assets/css/search/search.css";
</style>
