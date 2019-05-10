<!--<template>-->
<!--<div>-->
<!--  <button>上一页</button>-->
<!--  {{currentPage}}/{{totalPage}}-->
<!--  <button>下一页</button>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--    import Axios from "axios";-->
<!--    import LocalStorage from "../../../config/LocalStorage";-->

<!--    export default {-->
<!--        name: "PagePlug",-->
<!--      data(){-->
<!--          return{-->
<!--            currentPage:1,-->
<!--            totalPage:1,-->
<!--            api:'',-->

<!--            sourceRequest:{-->
<!--              pageSize:10,-->
<!--              pageNum: 0,-->
<!--              userId:0,-->
<!--            }-->
<!--          }-->
<!--      },mounted() {-->
<!--          this.sourceRequest.userId=LocalStorage.get('userInfo').userId;-->
<!--      },methods:{-->
<!--          prePage(){-->
<!--            if (this.currentPage>=0){-->
<!--                Axios.post(this.api,this.sourceRequest).then(response=>{-->

<!--                })-->
<!--            }-->
<!--          }-->
<!--      }-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->
<!--</style>-->
