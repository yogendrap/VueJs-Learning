import Router from 'vue-router';

var router = new Router({
    mode: 'history',
 });

export function requireAuth(to, from, next) {
    //console.log("I am here");
    if(localStorage.getItem("ac_token") == null) {
        next({
            path: '/',
          });
        } else {
          next();
        }
    }

export function authNotRequired(to, from, next) {
    if(localStorage.getItem("ac_token") == null) {
        next();
        } else {
            next({
                path: '/dashboard',
              });
        }
    }

    export function isLoggedIn() {
        return localStorage.getItem("ac_token") == null? false : true
    }

    export function logout() {
        localStorage.removeItem("ac_token");
        localStorage.removeItem("userInfo");
        router.go('/');
        // console.log(this.$route);
    }