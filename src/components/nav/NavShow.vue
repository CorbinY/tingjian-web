<template>
  <div id="tag_show">
    TAG ARCHIVES:{{navTag}}
  </div>
</template>

<script>
  import storage from "../../../config/LocalStorage";

  export default {
    name: "NavShow",
    data() {
      return {
        navTag: ''
      }
    }, methods: {
    },mounted() {
      this.navTag=storage.get('tagName');
    },
  }
</script>

<style scoped>
  @import "../../assets/css/nav/navShow.css";
</style>
