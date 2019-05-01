export default {
  baseApi: '/api/music',

  page: {
    pageSize: 10,
    pageNum: 0
  },
  musicHomeRecommend: {
    navCode: 0,
    navName: '今日热点',
    api:"/api/music/hot/recommend-list"

  },
  musicHomeLastSong: {
    navCode: 1,
    navName: '新歌速递',
    api:"/api/music/last/song-list"
  },
  musicHomeHotSong: {
    navCode: 2,
    navName: '热门神曲',
    api:"/api/music/hot/song-list"
  },
  musicHomeSingerSong: {
    navCode: 3,
    navName: '爱豆之家',
    api:"/api/music"
  },
  musicHomeMyTingjian: {
    navCode: 4,
    navName: '心动模式',
    api:"/api/music/my/recommend"
  },
  musicHomeMyCollect: {
    navCode: 5,
    navName: '个人私藏',
    api:"/api/music/my/collect"
  },
  musicHomeMyAccount: {
    navCode: 6,
    navName: '账号中心',
    api:"/api/music/last/song-list"
  }

}
