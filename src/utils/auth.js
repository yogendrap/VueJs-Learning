// import Router from 'vue-router';

// var router = new Router({
//    mode: 'history',
// });

// export function logout() {
//   clearIdToken();
//   clearAccessToken();
//   router.go('/');
// }

export function requireAuth(to, from, next) {
    console.log("I am here");
    if(localStorage.getItem("ac_token") == null) {
        next({
            path: '/',
            query: { redirect: to.fullPath }
          });
        } else {
            console.log(" I am also here");
          next();
        }
    }

// export function requireAuth(to, from, next) {
//   console.log("I am here");
//   if (!isLoggedIn()) {
//     next({
//       path: '/',
//       query: { redirect: to.fullPath }
//     });
//   } else {
//     next();
//   }
// }

// export function getIdToken() {
//   return localStorage.getItem(ID_TOKEN_KEY);
// }

// export function getAccessToken() {
//   return localStorage.getItem(ACCESS_TOKEN_KEY);
// }

// function clearIdToken() {
//   localStorage.removeItem(ID_TOKEN_KEY);
// }

// function clearAccessToken() {
//   localStorage.removeItem(ACCESS_TOKEN_KEY);
// }

// // Helper function that will allow us to extract the access_token and id_token
// function getParameterByName(name) {
//   let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
//   return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
// }

// // Get and store access_token in local storage
// export function setAccessToken() {
//   let accessToken = getParameterByName('access_token');
//   localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
// }

// // Get and store id_token in local storage
// export function setIdToken() {
//   let idToken = getParameterByName('id_token');
//   localStorage.setItem(ID_TOKEN_KEY, idToken);
// }

// export function isLoggedIn() {
//   const idToken = getIdToken();
//   return !!idToken && !isTokenExpired(idToken);
// }

// function getTokenExpirationDate(encodedToken) {
//   const token = decode(encodedToken);
//   if (!token.exp) { return null; }

//   const date = new Date(0);
//   date.setUTCSeconds(token.exp);

//   return date;
// }

// function isTokenExpired(token) {
//   const expirationDate = getTokenExpirationDate(token);
//   return expirationDate < new Date();
// }