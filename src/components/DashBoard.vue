<template>
<div>
  <AppNavigation></AppNavigation>

   Welcome {{userInfo.name}}
  <br>
   Email {{userInfo.mail}}
<br>
   profile Image: <img :src="imageUrl"/>
    </div>
</template>

<script>
import AppNavigation  from './AppNavigation';

export default {
  name: "DashBoard",
  components : {
    AppNavigation
  },
  data() {
    return {
      userInfo: JSON.parse(localStorage.getItem("userInfo")),
      imageUrl: JSON.parse(localStorage.getItem("userInfo")).photo
    };
  },

   methods: {
     
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
