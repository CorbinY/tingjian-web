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
          <div>
            <input v-model="registerInfo.userName" type="text" placeholder="用户名" class="userNameBox">
            <input type="button" class="registerUserNameBtn">
            <br>
            <input v-model="registerInfo.userPwd" type="password" placeholder="安全密码" class="pwdBox">
            <input type="button" class="registerPwdBtn">
            <br>
            <input v-model="registerInfo.userMail" type="text" placeholder="请绑定一个常用邮箱" class="mailBox">
            <input type="button" class="registerMailBtn">
            <br>
            <input v-model="registerInfo.registerCode" type="text" placeholder="请输入邮箱注册验证码" class="registerCodeBox">
            <button class="getRegisterCode" @click="getVerifyCode()">获取验证码</button>
            <button class="registerBoxRegister" @click="registerUser()">同意协议并注册</button>
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

  import Footer from "@/components/frame/Footer";
  import qs from "qs";

  export default {
    name: "Register",
    components: {Footer},
    data() {
      return {
        registerInfo: {
          userMail: '',
          userName: '',
          userPwd: '',
          registerCode: ''
        }
      }
    },
    methods: {
      registerUser(){
        var api='/user/register';
        this.Axios.post(api,this.registerInfo).then(response=>{
          if (response.data.code === 0) {
            this.LocalStorage.set('')
            this.$router.push("/login");
          }else{
            alert(response.data.msg);
          }
        }).catch(reason => {
          alert("注册失败");
        })

      },
      getVerifyCode() {
        if (this.registerInfo.userMail == '') {
          alert("请输入关联邮箱");
          return;
        }
        var isMail = this.isEmail(this.registerInfo.userMail);
        if (isMail == true) {

          var api = "/user/verify-code";
          this.Axios.post(api, qs.stringify(this.registerInfo)).then(response => {
            if (response.data.code === 0) {
              alert("注册验证码发送成功");
            } else if (response.data.code === 12001) {
              alert("注册验证码发送失败，请重试");
            }else {
              alert(this.response.data.msg);
            }
          }).catch(reason => {
            alert("验证码发送失败")
          })

        }
      },
      isEmail(str) {
        var re = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if (re.test(str) != true) {
          alert("请检查邮箱格式是否正确");
          return false;
        } else {
          return true;
        }
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
    top: 70px;
    width: 300px;
    height: 30px;
    outline: none;
    border: 1px solid #ccc;
    background: none;
    box-shadow: 0 0 10px #dddddd;
  }

  .mailBox {
    position: relative;
    left: 50px;
    top: 90px;
    width: 300px;
    height: 30px;
    outline: none;
    border: 1px solid #ccc;
    background: none;
    box-shadow: 0 0 10px #dddddd;
  }

  .registerCodeBox {
    position: relative;
    left: 50px;
    top: 120px;
    width: 180px;
    height: 30px;
    outline: none;
    border: 1px solid #ccc;
    background: none;
    box-shadow: 0 0 10px #dddddd;
  }

  .registerUserNameBtn {
    position: relative;
    width: 35px;
    height: 35px;
    left: 10px;
    top: 65px;
    border: 0px;
    background: url("../../../assets/images/user/user.png") no-repeat;
    background-size: 75% 75%;
  }

  .registerPwdBtn {
    position: relative;
    width: 35px;
    height: 35px;
    left: 10px;
    top: 85px;
    border: 0px;
    background: url("../../../assets/images/user/pwd.png") no-repeat;
    background-size: 80% 80%;
  }

  .registerMailBtn {
    position: relative;
    width: 35px;
    height: 35px;
    left: 10px;
    top: 105px;
    border: 0px;
    background: url("../../../assets/images/user/mail.png") no-repeat;
    background-size: 85% 85%;
  }

  .registerBoxRegister {
    width: 200px;
    height: 40px;
    position: relative;
    left: 100px;
    top: 160px;
  }

  .getRegisterCode {
    position: relative;
    height: 30px;
    left: 80px;
    top: 120px;
  }
</style>
