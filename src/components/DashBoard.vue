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
{{mailIds}}
    </div>

</template>

<script>
import Vue from 'vue'
import AppNavigation  from './AppNavigation';
import VueGoogleApi from 'vue-google-api';

const config = {
  apiKey: 'AIzaSyBUps2WkElVn1sucLsekVxGk9VkJc91fOo',
  clientId: '712428694771-kmku1htdf3287e3cc34i9aalkgujqns6.apps.googleusercontent.com',
  scope: 'https://mail.google.com, https://www.googleapis.com/auth/gmail.readonly, https://www.googleapis.com/auth/gmail.metadata'
}

Vue.use(VueGoogleApi, config)

export default {
  name: "DashBoard",
  components : {
    AppNavigation
  },
  data() {
    return {
      userInfo: JSON.parse(localStorage.getItem("userInfo")),
      imageUrl: JSON.parse(localStorage.getItem("userInfo")).photo,
      mailIds: ''
    };
  },

   methods: {

     getDetails() {
       let access_token = localStorage.getItem('ac_token');
        console.log(access_token);
       this.$gapi.request({
          path: 'https://www.googleapis.com/gmail/v1/users/me/messages',
          method: 'GET',
          params: {
            maxResults: 2,
            q: 'unsubscribe is:unread  category:promotions',
          },
          
          headers: {
             Authorization: 'Bearer ' + access_token
          }
            
        }).then(response => {
          console.log("I am in response");
            this.mailIds = response;
          }, error => {
            console.log(error);
          })
      } 
    },
    mounted()  {
      console.log("I am here in mounted");
      this.getDetails();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
