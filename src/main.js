import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyDvuy00U7LJlDZ582Z8GKYdO9RfZ6BL24E",
  authDomain: "poony-schedule-b9f47.firebaseapp.com",
  databaseURL: "https://poony-schedule-b9f47.firebaseio.com",
  projectId: "poony-schedule-b9f47",
  storageBucket: "poony-schedule-b9f47.appspot.com",
  messagingSenderId: "613530394495"
};
firebase.initializeApp(config);

console.log(firebase.database())
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')