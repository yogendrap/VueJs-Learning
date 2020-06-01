<template>
<div>
   Welcome {{userName}}
    </div>
</template>

<script>

export default {
  name: "UserProfile",
  data() {
     console.log("sdfsd");
    return {
      userName: localStorage.getItem("userName"),
    };
  },

   methods: {
     
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
