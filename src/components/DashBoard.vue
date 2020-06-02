<template>
<div>
  <AppNavigation></AppNavigation>
  <div class="alert alert-success alert-dismissible fade show" role="alert">
  With Bootstrap!
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
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
