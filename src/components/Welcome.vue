<template>
  <div id="globle">
    <div id="top_title">
      听鉴
    </div>
    <hr />
    <div id="title_des">
    </div>
    <div id="slogan">听/见/余/生 &nbsp;&nbsp;听/鉴/余/生</div>
    <div id="entrance">
      进 入 官 网
    </div>
    <div id="content-img">

    </div>
    <div id="bottom">

    </div>
  </div>
</template>

<script>
    export default {
        name: "Welcome"
    }

    //生命周期函数
    mounted (){
      this.http.get('banner/1').then(res=>{
        console.log(res.data)
      })
    }
</script>

<style  scoped>
  html,body {
    position: relative;
  }

  hr {
    width: 80%;
    height: 1px;
    border: none;
    border-top: 1px solid #555555;
  }

  #globle {
    width: 100%;
    height: 100%;
    background-color: #080808;
  }

  #top_title {
    width: 100%;
    height: 6%;
    font-family: "宋体";
    font-size: 250%;
    text-indent: 15%;
    letter-spacing: 30px;
    padding-top: 20px;
    color: white;
  }

  #title_des {
    width: 100%;
    height: 20%;
    background-image: url(../assets/7.png);
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
  }

  #slogan {
    height: 50px;
    font-family: "新宋体";
    color: #555555;
    font-size: 200%;
    text-indent: 37%;
    line-height: 20px;
    margin-top: 2%;

  }

  #entrance {
    cursor: pointer;
    width: 200px;
    height: 50px;
    border-radius: 25px;
    margin: 10px auto;
    text-align: center;
    color: rgb(255, 255, 255);
    line-height: 50px;
    border: 1px solid rgb(135, 98, 56);
    font-family: SimSun;


  }

  #entrance:hover {
    background-color: #d9933e;

  }

  #content-img {
    width: 576px;
    height: 451px;
    background-image: url(../assets/mac-phone.png);
    background-repeat: no-repeat;
    margin: auto;
  }
</style>
