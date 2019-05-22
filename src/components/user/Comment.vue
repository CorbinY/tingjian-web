<template>
    <div id="comment_div">
      <div id="user_head_img">
        <img src="/static/image/music/default-play.jpg" width="50px" height="50px">
      </div>
      <div id="comment_content">
        {{commentContent}}
      </div>
      <div id="comment_split">
        <hr>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Comment",
      data(){
          return{
            commentContent:'',
          }
      },
      props:['commentIndex']
    ,methods:{

      },mounted() {
          this.commentContent=this.LocalStorage.get('commentList')[this.commentIndex].commentContent;
      }
    }
</script>

<style scoped>
  #comment_div{
    width: 800px;
    height: 100px;
    margin-top: 20px;
    background-color: white;
    box-shadow: 0 0 4px #ddd;
  }
  #user_head_img{
    width: 100px;
    height: 100px;
    position: relative;
    left: 30px;
    top: 30px;
  }
  #comment_content{
    width: 650px;
    height: 80px;
    position: relative;
    left: 100px;
    top: -100px;
    background-color: white;
    display: table-cell;
    vertical-align: bottom;
  }
  #comment_split{
  position: relative;
    top: -100px;
  }
 #comment_split hr{
border-color: #C20C0C;
  }
</style>
