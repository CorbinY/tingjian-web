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
      component:MusicHomeSingerSong
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
    }
  ]
})
