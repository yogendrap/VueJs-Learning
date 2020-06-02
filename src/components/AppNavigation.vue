<template>
  <nav class="navbar navbar-default">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand"> Mail Scrapper</router-link>
    </div>
    <ul class="nav navbar-nav navbar-right">
      <li v-show="isLoggedIn()">
        <button class="btn btn-danger log" @click="handleLogout()">Log out </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { isLoggedIn, logout } from '../utils/auth';

export default {
  name: 'app-nav',
  methods: {
    handleLogout() {
      logout();
    },
    isLoggedIn() {
      return isLoggedIn();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-right { margin-right: 0px !important}

.log {
  margin: 5px 10px 0 0;
}
</style>
