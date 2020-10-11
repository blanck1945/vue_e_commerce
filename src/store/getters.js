export default {
    cart_amount(state) {
        return state.cart.length
    },
    cart_total(state) {
        const total = state.cart.map(el => el.product_price * el.product_amount)
        if (total.length === 0) {
            return 0
        }
        const num = total.reduce((a, b) => a + b).toFixed(2)
        return num

    }
}