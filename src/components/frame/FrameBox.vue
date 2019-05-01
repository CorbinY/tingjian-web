<template>
  <div class="box">
    <div class="nav"><Nav></Nav></div>
    <div class="nav-show"><NavShow></NavShow></div>
    <div class="search"> <Search></Search></div>
  </div>
</template>

<script>
    import Nav from "@/components/nav/Nav";
    import NavShow from "@/components/nav/NavShow";
    import Search from "@/components/search/Search";
    export default {
        name: "FrameBox",
      components: { NavShow, Nav,Search},
      data(){
          return{

          }
      },methods:{
      }
    }
</script>

<style scoped>
  .box{
    width: 1250px;
    min-width: 1250px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
/*    position: fixed;
    top: 0;
    left: 0;
    right: 0;*/
  }
  .nav-show{
    position: relative;
    left: 50px;
    top: 20px;
  }
  .search{
    margin-left: 900px;
    margin-top: -30px;
  }

</style>
