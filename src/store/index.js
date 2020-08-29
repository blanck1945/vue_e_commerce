import Vue from 'vue'
import Vuex from 'vuex'
import { Products } from "./ProductArr"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: Products,
    cart: [],
    open: false
  },
  mutations: {
    TOOGLE_MENU(state) {
      state.open = !state.open
    },
    REMOVE_ITEM(state, payload) {
      const newArr = state.cart.filter(el => el.product_id !== payload.product_id)
      state.cart = newArr
      if (state.cart.length === 0) {
        state.open = false
      }
    },
    CLEAR_CART(state) {
      state.cart = []
    },
    ADD_TO_CART(state, payload) {
      const data = { ...payload, product_amount: 1 }
      state.cart.push(data)
    },
    DISMISS_OF_CART(state, payload) {
      const newArr = state.cart.filter(el => el.product_id !== payload.product_id)
      state.cart = newArr
      if (state.cart.length === 0) {
        state.open = false
      }
    },
    TOOGLE_ADD(state, payload) {
      const newArr = state.products.map(el => el.product_id === payload.product_id ? { ...el, product_add: !el.product_add } : el)
      state.products = newArr

    },
    ADD_ITEM_TO_CART(state, payload) {
      const newArr = state.cart.map(el => el.product_id === payload.product_id ? { ...el, product_amount: el.product_amount + 1 } : el)
      state.cart = newArr
    },
    TAKE_ITEM_TO_CART(state, payload) {
      const newArr = state.cart.map(el => el.product_id === payload.product_id
        ? {
          ...el,
          product_amount: el.product_amount === 1 ? 1 : el.product_amount - 1
        }
        : el)
      state.cart = newArr
    },
    RESET_ITEM(state, payload) {
      const newArr = state.cart.map(el => el.product_id === payload.product_id
        ? {
          ...el,
          product_amount: 1
        }
        : el)
      state.cart = newArr
    }
  },
  actions: {
    remove_item({ commit }, payload) {
      commit("REMOVE_ITEM", payload)
      commit("TOOGLE_ADD", payload)
    },
    clear_cart({ commit }) {
      commit("CLEAR_CART")
    },
    addToCart({ commit }, payload) {
      commit("ADD_TO_CART", payload)
      commit("TOOGLE_ADD", payload)
    },
    dismissOfCart({ commit }, payload) {
      commit("DISMISS_OF_CART", payload)
      commit("TOOGLE_ADD", payload)
    },
    addAction({ commit }, payload) {
      commit("ADD_ITEM_TO_CART", payload)
    },
    takeAction({ commit }, payload) {
      commit("TAKE_ITEM_TO_CART", payload)
    },
    resetAction({ commit }, payload) {
      commit("RESET_ITEM", payload)
    },
    toogleMenu({ commit }, payload) {
      commit("TOOGLE_MENU", payload)
    }
  },
  getters: {
    cart_amount(state) {
      return state.cart.length
    },
    cart_total(state) {
      const total = state.cart.map(el => el.product_price * el.product_amount)
      if (total.length !== 0) {
        return total.reduce((a, b) => a + b).toFixed(2)
      }
      return 0
    }
  },
  modules: {
  }
})
