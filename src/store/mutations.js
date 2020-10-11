export default {
    SET_FETCH_DATA(state, payload) {
        state.axiosData = payload
    },
    SET_SINGLE_PRODUCT(state, payload) {
        const single = state.products.filter(el => el.id === payload)
        state.single_p = single[0]
    },
    CLEAR_SINGLE_PRODUCT(state) {
        state.single_p = undefined
    },
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
        state.products.map(el => el.product_add = false)
        state.open = false
    },
    ADD_TO_CART(state, payload) {
        const data = { ...payload, product_amount: 1 }
        state.cart.push(data)
        console.log(state.cart)
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
    },
    SEARCH_PRODUCTS(state, payload) {
        const found = state.products.filter(el => el.product_name.toLowerCase().includes(payload))
        state.query = payload
        state.results = found
    },
    CLEAR_SEARCH_RESULT(state) {
        state.query = undefined,
            state.results = undefined
    },
    STORE_DATA(state, payload) {
        console.log(payload)
        state.products = payload
    },
    TOOGLE_ACC_MENU(state, payload) {
        console.log(payload)
        state.accHomeDis = payload
    }
}