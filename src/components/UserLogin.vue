<template>
<div>
  <AppNavigation></AppNavigation>
    <GoogleLogin v-if="!isLogin" :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
    </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
import { isLoggedIn } from "../utils/auth";
import AppNavigation  from './AppNavigation';

export default {
  name: "UserLogin",
  components: {
    GoogleLogin,
    AppNavigation
  },
  data() {
    return {
      userInfo: {}, 
      userName: '',
      isLogin : isLoggedIn(),
      // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
      params: {
        client_id: "712428694771-kmku1htdf3287e3cc34i9aalkgujqns6.apps.googleusercontent.com",
        scope: 'profile email https://mail.google.com https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.metadata'
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
          console.log(googleUser);
            localStorage.setItem('ac_token', googleUser.wc.access_token);
            this.isLogin = true;
            this.setUserProfile(googleUser);
            this.$router.push('dashboard');
        },
        onFailure(googleUser) {
            console.log(googleUser);
            console.log(googleUser.getBasicProfile());
        },

        setUserProfile(googleUser) {
            const profile = googleUser.getBasicProfile();
            const userID =  googleUser.getId();
            this.userInfo.userId = userID;
            this.userInfo.name = profile.getName();
            this.userInfo.mail = profile.getEmail();
            this.userInfo.photo = profile.getImageUrl();
            localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
            //console.log(localStorage.getItem("userInfo"));
        }

    }
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
