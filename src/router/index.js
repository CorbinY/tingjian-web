import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Login from "@/components/user/login/Login";
import MusicHomeRecommend from "@/components/music/www/MusicHomeRecommend";
import MusicHomeLastSong from "@/components/music/www/MusicHomeLastSong";
import MusicHomeHotSong from "@/components/music/www/MusicHomeHotSong";
import MusicHomeMyTingjian from "@/components/music/www/MusicHomeMyTingjian";
import MusicHomeMyCollect from "@/components/music/www/MusicHomeMyCollect";
import MusicHomeSingerSong from "@/components/music/www/MusicHomeSingerSong";
import Register from "@/components/user/login/Register";
import AddMusic from "@/components/AddMusic";
import PagePlug from "@/components/frame/PagePlug";
import SearchResult from "@/components/music/www/SearchResult";
import UserInfoShow from "@/components/user/userinfo/UserInfoShow";
import SearchResult0 from "@/components/music/www/SearchResult0";


Vue.use(Router);

export default new Router({
  mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    }, {
      //今日热点
      path: '/index',
      name: 'MusicHomeRecommend',
      component: MusicHomeRecommend
    }, {
      //新歌速递
      path: '/last/shelf',
      name: 'MusicHomeLastSong',
      component: MusicHomeLastSong
    }, {
      //热门神曲
      path: '/hot/song',
      name: 'MusicHomeHotSong',
      component: MusicHomeHotSong
    },
    //  爱豆之家
    {
      path: '/singer/song',
      name: 'MusicHomeSingerSong',
      component: MusicHomeSingerSong
    }, {
      //心动模式
      path: '/tingjian',
      name: 'MusicHomeMyTingjian',
      component: MusicHomeMyTingjian
    }, {
      //个人私藏
      path: '/collect',
      name: 'MusicHomeMyCollect',
      component: MusicHomeMyCollect
    }, {
      //账号中心
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      //注册
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      //注册
      path: '/add',
      name: 'AddNusic',
      component: AddMusic
    }, {
      path: '/search',
      name: 'SearchResult',
      component: SearchResult
    }, {
      path: '/search0',
      name: 'SearchResult0',
      component: SearchResult0
    }, {
      path: '/user-info',
      name: 'UserInfo',
      component: UserInfoShow
    }
  ]
})
