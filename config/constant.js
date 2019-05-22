export default {

  page: {
    pageSize: 10,
    pageNum: 0
  },
  musicHomeRecommend: {
    navCode: 0,
    navName: '今日热点',
    api: "/music/hot/recommend-list"

  },
  musicHomeLastSong: {
    navCode: 1,
    navName: '新歌速递',
    api: "/music/last/song-list"
  },
  musicHomeHotSong: {
    navCode: 2,
    navName: '热门神曲',
    api: "/music/hot/song-list"
  },
  musicHomeSingerSong: {
    navCode: 3,
    navName: '爱豆之家',
    api: "/music/singer-song"
  },
  musicHomeMyTingjian: {
    navCode: 4,
    navName: '心动模式',
    api: "/music/my/recommend"
  },
  musicHomeMyCollect: {
    navCode: 5,
    navName: '个人私藏',
    api: "/song/my/collect-song-list"
  },
  musicHomeMyAccount: {
    navCode: 6,
    navName: '账号中心',
    api: "/music/last/song-list"
  },
  searchResult: {
    navCode: 7,
    navName: '搜索结果',
    api: "/music/search"
  },
  musicDetail:{
    navCode:8,
    navName:'单曲空间',
    addCommentApi:'/comment/add/song-comment',
    GetCommentApi:'/comment/get/song-comment',
    searchSongBySongIdApi:'/music/search/song-id'
  }, touristsStatus: {
    userId: 0
  }

}
