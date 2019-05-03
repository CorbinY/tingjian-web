<template>
  <div>
    <div id="globle">
      <div id="top_title">
        听鉴
      </div>
      <hr/>
      <div id="bgImg"></div>

      <div id="middleBox">
        <div id="slogan1">听/见/余/声</div>
        <div id="slogan2">听/鉴/余/生</div>
        <div id="title_des">
        </div>

        <div id="loginOrRegister">
          <div class="login">
            <input v-model="loginParam.account" type="text" placeholder="注册邮箱/账号" class="userNameBox">
            <input type="button" class="loginUserNameBtn">
            <br>
            <input v-model="loginParam.userPwd" type="password" placeholder="安全密码" class="pwdBox" @keyup.enter="enter2Login">
            <input type="button" class="loginPwdBtn">
            <button class="loginBoxLogin" @click="login()">登录</button>
            <button class="loginBoxRegister" @click="skipToRegister()">注册</button>
          </div>

        </div>
      </div>
    </div>
    <div id="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>

  import Axios from "axios";
  import LocalStorage from "../../../../config/LocalStorage";
  import Footer from "@/components/frame/Footer";

  export default {
    name: "Login",
    components: {Footer},
    data() {
      return {
        loginParam: {
          account: '',
          userPwd: '',
        }
      }
    },
    methods: {
      enter2Login:function(e){
        var keyCode = window.event? e.keyCode:e.which;
        console.log('回车搜索',keyCode,e);
        if(keyCode == 13){
          //跳转搜索后的界面
          //this.$router.push({path:'/Share?keywords='+this.input});
          this.login();
        }

      },
      skipToRegister() {
        this.$router.push("/register");
      },
      login() {
        if (this.loginParam.account==''){
          alert("请输入用户名");
        } else if (this.loginParam.userPwd==''){
          alert("请输入登录密码");
        }

        LocalStorage.set('tagName',this.constant.musicHomeRecommend.navName);
        var api = "/api/user/login";
        Axios.post(api, this.loginParam).then(response => {
          var code = response.data.code;
          if (code === 0) {
            LocalStorage.set("userInfo", response.data.result);
            console.log(LocalStorage.get("userInfo"));
            this.$router.push("/index");
          } else if (code === 11002) {
            alert("账户或密码错误");
            this.$router.push("/login");
          } else if (code === 11001) {
            alert("账户不存在，请先注册");
            this.$router.push("/register");
          }
        });
      }
    }


  }


</script>

<style scoped>
  @import "../../../assets/css/user/login/login.css";


  .userNameBox {
    position: relative;
    left: 50px;
    top: 50px;
    width: 300px;
    height: 30px;
    outline: none;
    border: 1px solid #ccc;
    background: none;
    box-shadow: 0 0 10px #dddddd;
  }

  .pwdBox {
    position: relative;
    left: 50px;
    top: 100px;
    width: 300px;
    height: 30px;
    outline: none;
    border: 1px solid #ccc;
    background: none;
    box-shadow: 0 0 10px #dddddd;
  }

  .loginUserNameBtn {
    position: relative;
    width: 35px;
    height: 35px;
    left: 10px;
    top: 65px;
    border: 0px;
    background: url("../../../assets/images/user/user.png") no-repeat;
    background-size: 75% 75%;

  }

  .loginPwdBtn {
    position: relative;
    width: 35px;
    height: 35px;
    left: 10px;
    top: 118px;
    border: 0px;
    background: url("../../../assets/images/user/pwd.png") no-repeat;
    background-size: 80% 80%;
  }

  .loginBoxLogin {
    position: relative;
    left: 80px;
    top: 180px;
    width: 100px;
    height: 40px;
    box-shadow: 0 0 10px #dddddd;
  }

  .loginBoxRegister {
    width: 100px;
    height: 40px;
    position: relative;
    left: 130px;
    top: 180px;
    box-shadow: 0 0 10px #dddddd;
  }
</style>
