import Axios from "axios"
export default {
    async fetchUserData({ commit }) {
        const res = await Axios.get("https://jsonplaceholder.typicode.com/users")
        commit("SET_FETCH_DATA", res.data)
    },
    setSingleProduct({ commit }, payload) {
        commit("SET_SINGLE_PRODUCT", payload)
    },
    clearSingleProduct({ commit }) {
        commit("CLEAR_SINGLE_PRODUCT")
    },
    remove_item({ commit }, payload) {
        commit("REMOVE_ITEM", payload)
        commit("TOOGLE_ADD", payload)
    },
    clear_cart({ commit }) {
        commit("CLEAR_CART")
    },
    addToCart({ commit }, payload) {
        commit("ADD_TO_CART", payload)
        //commit("TOOGLE_ADD", payload)
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
    },
    searchProducts({ commit }, payload) {
        commit("SEARCH_PRODUCTS", payload)
    },
    storeData({ commit }, payload) {
        commit("STORE_DATA", payload)
    },
    clearSearchResult({ commit }) {
        commit("CLEAR_SEARCH_RESULT")
    },
    toogleHomeMenu({ commit }, payload) {
        commit("TOOGLE_ACC_MENU", payload)
    },
}