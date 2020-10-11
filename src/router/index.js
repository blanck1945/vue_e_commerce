import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Single_Product from "../views/single_product/Single_Product.vue"
import Cart_Page from "../views/cart_page/Cart_Page.vue"
import Login_Page from "../views/Login_page/Login_Page.vue"
import Search_Page from "../views/search_page/Search_Page.vue"
import AddBook from "../views/add_book/Add_Book.vue"
import DiscountPage from "../views/discount_page/Discount_Page.vue"
import Fizz from "../views/fizz/Fizz.vue"
import Acc from "../views/Account/Account.vue"
import Congratz from "../views/congratz/Congratz.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/product/:id',
    component: Single_Product,
    name: "single_product",
    props: true
  },
  {
    path: "/user_cart",
    component: Cart_Page,
    name: "cart_page"
  },
  {
    path: "/login",
    component: Login_Page,
    name: "login_page"
  },
  {
    path: "/search_results",
    component: Search_Page,
    name: "search_page"
  },
  {
    path: '/fizz',
    component: Fizz,
    name: "fizz"
  },
  {
    path: "/add",
    component: AddBook,
    name: "add_book"
  },
  {
    path: "/discount",
    component: DiscountPage,
    name: "discount_page"
  },
  {
    path: "/acc",
    component: Acc,
    name: "acc"
  },
  {
    path: "/congratz",
    compponent: Congratz,
    name: "congratz"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
