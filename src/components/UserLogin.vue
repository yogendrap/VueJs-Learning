<template>
<div>
    <GoogleLogin v-if="!isLogin" :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
    <!-- <div class="logout" v-if="isLogin">
      welcome {{userName}}
       <button v-on:click="logout">Logout</button>
    </div> -->
    </div>
</template>

<script>
import GoogleLogin from "vue-google-login";

export default {
  name: "UserLogin",
  components: {
    GoogleLogin
  },
    beforeCreate() {
   // console.log('Nothing gets called before me!')
    if(localStorage.getItem('ac_token') == null) {
        this.isLogin = false;
    }
  },
  data() {
    return {
      userName: '',
      isLogin : this.isLogin == undefined ? true : false,
      // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
      params: {
        client_id: "712428694771-kmku1htdf3287e3cc34i9aalkgujqns6.apps.googleusercontent.com"
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      }
    };
  },

   methods: {
        onSuccess(googleUser) {
            const userID =  googleUser.getId();
            localStorage.setItem('ac_token', userID);
            this.isLogin = true;
            const profile = googleUser.getBasicProfile();
            this.userName = profile.getName();
            localStorage.setItem('userName', profile.getName());
            this.$router.push('profile');
        },
        onFailure(googleUser) {
            console.log(googleUser);
            console.log(googleUser.getBasicProfile());
        },
        logout(){
          localStorage.removeItem("ac_token");
          this.isLogin = false;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
