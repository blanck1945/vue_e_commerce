import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SingleSide from "./views/single_product/single_side/Single_Side.vue"


import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAzq06owTNCJ12Ov-6Au_vnUu_HNNDVZ_o",
  authDomain: "book-depo-b282a.firebaseapp.com",
  databaseURL: "https://book-depo-b282a.firebaseio.com",
  projectId: "book-depo-b282a",
  storageBucket: "book-depo-b282a.appspot.com",
  messagingSenderId: "465132244874",
  appId: "1:465132244874:web:d2db58284c8ee858c24273"
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()

Vue.config.productionTip = false
Vue.component("SingleSide", SingleSide)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
