<template>
  <div class="userInfoBody">
    <div>
      <Nav></Nav>
    </div>
    <div class="navShow">
      <NavShow></NavShow>
    </div>
    <div class="userInfo">
      <div class="userName">
        用户昵称: <input v-model="userInfo.userName" type="text" placeholder="用户名"/><br>
      </div>
      <div class="userMail">
        登录邮箱: <input v-model="userInfo.userMail" type="text" disabled="disable" placeholder="安全邮箱"/><br>
      </div>
      <div class="userDesc">个人介绍:<br><br>
        <textarea placeholder="请输入个人介绍" rows="10"
                  cols="45" maxlength="500" v-model="userInfo.userDesc"></textarea></div>
    </div>
    <div>
      <button class="editInfoBtn" @click="editUserInfo()"> 保存信息</button>
      <button class="logoutButton" @click="logOut()">退出登录</button>
    </div>
  <div class="footer">
    <Footer></Footer>
  </div>
  </div>


</template>

<script>
  import Nav from "@/components/nav/Nav";
  import NavShow from "@/components/nav/NavShow";
  import LocalStorage from "../../../../config/LocalStorage";
  import Axios from "axios";
  import Footer from "@/components/frame/Footer";

  export default {
    name: "UserInfoShow",
    components: {Footer, NavShow, Nav},
    data() {
      return {
        userInfo: {
          userName: '',
          userId: 0,
          userMail: '',
          userAccount: '',
          userDesc: '',
          userSex: 0,
          userHeadPortrait: ''
        }
      }
    }, methods: {
      editUserInfo() {
        let api = '/api/user/edit/user-info';
        Axios.post(api, this.userInfo).then(response => {
          if (response.data.code === 0) {
            this.userInfo = response.data.result;
            LocalStorage.set("userInfo", this.userInfo);
            alert("更新成功");
          } else {
            alert("系统打了个盹,更新信息失败，请重试!")
          }
        })

      },
      logOut() {
        let api = '/api/user/logout';
        Axios.post(api, this.userInfo).then(response => {
          if (response.data.code === 0) {
            //默认未登录
            LocalStorage.set("userInfo", this.constant.touristsStatus);
            this.$router.push("/index");
          } else {
            alert("系统打了个盹,退出登录失败，请重试!")
          }
        })
      }
    }, mounted() {
      this.userInfo = LocalStorage.get("userInfo");
    }
  }
</script>

<style scoped>
  .userInfo {
    position: relative;
    overflow: hidden;
    left: 50px;
    top: 20px;
  }

  .userInfoBody {
    width: 1250px;
    min-width: 1250px;
    margin: auto;
    background-color: white;
  }

  .navShow {
    position: relative;
    left: 50px;
    top: 20px;
    height: 100px;
  }

  .userName {
    height: 80px;
  }

  .userMail {
    height: 80px;
  }

  .userDesc {
    text-align: left;
    position: relative;
    top: -165px;
    left: 450px;

  }

  .userDescLable {

  }

  input {
    width: 300px;
    height: 30px;
    outline: none;
    border: 1px solid #ccc;
    background: none;
    box-shadow: 0 0 10px #dddddd;
  }

  textarea {
    border: 1px solid #ccc;
    background: none;
    box-shadow: 0 0 10px #dddddd;
    resize: none;
  }

  button {
    width: 100px;
    height: 40px;
  }

  .editInfoBtn {
    position: relative;
    top: -190px;
    left: 120px;

  }

  .logoutButton {
    position: relative;
    top: -190px;
    left: 180px;
  }

  .footer {
    position: relative;
    top: 0px;
  }
</style>
