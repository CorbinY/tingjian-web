<template>
  <div id="tag_show">
    TAG ARCHIVES:{{navTag}}
  </div>
</template>

<script>

  export default {
    name: "NavShow",
    data() {
      return {
        navTag: ''
      }
    }, methods: {}, mounted() {
      // VueEvent.$on('tagName', function (tagName) {
      //   this.navTag = tagName;
      // });
      this.navTag = this.LocalStorage.get('tagName');

    },
  }
</script>

<style scoped>
  @import "../../assets/css/nav/navShow.css";
</style>
