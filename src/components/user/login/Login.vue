<template>
  <div id="globle">
    <!-- contact-form -->
    <div class="message warning">
      <div class="inset">
        <div class="login-head">
          <h1>Login Form</h1>
          <div class="alert-close"></div>
        </div>
        <form>
          <li>
            <input type="text" class="text" value="Username" onfocus="this.value = '';"
                   onblur="if (this.value == '') {this.value = 'Username';}"><a href="#" class=" icon user"></a>
          </li>
          <div class="clear"></div>
          <li>
            <input type="password" value="Password" onfocus="this.value = '';"
                   onblur="if (this.value == '') {this.value = 'Password';}"> <a href="#" class="icon lock"></a>
          </li>
          <div class="clear"></div>
          <div class="submit">
            <input type="submit" onclick="myFunction()" value="Sign in">
            <h4><a href="#">Lost your Password ?</a></h4>
            <div class="clear"></div>
          </div>

        </form>
      </div>
    </div>
    <div class="clear"></div>
    <!--- footer --->
    <div class="footer">
      <p>Copyright &copy; 2014.</p>
    </div>


  </div>
</template>

<script>
  import $ from 'jquery';

  export default {
    name: "Login"
  }

  var __links = document.querySelectorAll('a');

function __linkClick(e) {
  parent.window.postMessage(this.href, '*');
};
for (var i = 0, l = __links.length; i < l; i++) {
  if (__links[i].getAttribute('data-t') == '_blank') {
    __links[i].addEventListener('click', __linkClick, false);
  }
}

  $(document).ready(function (c) {
  $('.alert-close').on('click', function (c) {
    $('.message').fadeOut('slow', function (c) {
      $('.message').remove();
    });
  });
});
</script>

<style scoped>
  @import '../../../assets/css/user/login/login.css';
  /*#globle{*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*  background-color: #080808;*/
  /*}*/
</style>
