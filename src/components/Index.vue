<!--
<template>
  <div>
    <Nav></Nav>
  </div>
</template>

<script>
  import {AxiosInstance as Axios} from "axios";
  import Nav from "@/components/nav/Nav";

  export default {
    name: "Index",
    components: {Nav},
    data() {
      return {
        list :[]
      }
    },
    methods: {
      musicShowList() {
        var api = '/api/music/show-list';
        Axios.get(api).then((response) => {
          this.msg = response.data;
          // console.log(this.);
          //   alert(this.list[0])
          alert(response.data)
        }).catch((error) => {
          console.log(error);

        })

      },
      getData() {

        var api = '/api/user/test/vue';
        Axios.get(api).then((response) => {
          this.msg = response.data;
          // console.log(this.);
          //   alert(this.list[0])
          alert(response.data)
        }).catch((error) => {
          console.log(error);

        })

      }
    }
  }
</script>

<style scoped>

</style>
-->
