<template>
  <div class="footer">
    <div class="footer_service">
      <ul>
        <li>客服服务</li>
        <li>服务条款</li>
        <li>隐私政策</li>
        <li>版权投诉</li>
        <li>意见反馈</li>
      </ul>
    </div>
    <div class="site_word">
      站长有话说：在浮躁、喧嚣的互联网中，希望你能在这里静下来
    </div>
    <div class="myWechat">
      站长微信
      <img src="/static/image/myWechat.png" width="120px" height="120px">
    </div>
    <div class="businessInfo">
      听鉴音乐网©2018-2019 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;举报邮箱:corbin_yin@163.com
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  li {
    list-style: none;
    float: left;
    width: 100px;
    line-height: 50px;
  }

  .footer_service {
    height: 50px;
    padding-top:0px;
    padding-left: 160px;
  }

  .site_word {
    padding-left: 200px;
    padding-top: 20px;
  }
  .myWechat{
    width: 100px;
    height: 100px;
    background-image: ;
    background-size: 100% 100%;
    position: relative;
    top: -80px;
    left: 1000px;
  }

  .footer {
    width: 1250px;
    margin: auto;
    background-color: gray;
    color: white;
  }
  .businessInfo{

    text-align: center;
  }
</style>
