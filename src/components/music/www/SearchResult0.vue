<template>
    
</template>

<script>
    import LocalStorage from "../../../../config/LocalStorage";

    export default {
        name: "SearchResult0",
      created() {
        LocalStorage.set('tagName', "歌曲搜索");
          this.$router.push("/search")
      }
    }
</script>

<style scoped>

</style>
