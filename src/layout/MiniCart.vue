<template>
  <div :class="!open ? 'mini_cart_box hidden' : 'mini_cart_box'">
    <div class="product_box" v-for="el in cart_p" :key="el.product_id">
      <div class="product_data">
        <h3 class="amount_text_big">
          {{ el.product_name }} - {{ el.product_volume }}
        </h3>
        <div class="product_amount">
          <h3 class="amount_text">{{ el.product_amount }}</h3>
          <h3 class="amount_text">x</h3>
          <h3 class="amount_text">${{ el.product_price.toFixed(2) }}</h3>
          <h3 class="amount_text">=</h3>
          <h3 class="amount_text">
            ${{ (el.product_amount * el.product_price).toFixed(2) }}
          </h3>
        </div>
      </div>
      <button class="general_btn gene_btn_fix" @click="removeItem(el)">
        Remove
      </button>
    </div>
    <div class="product_total">
      <h3 class="a_text">Total: ${{ total }}</h3>
      <button class="general_btn btn_fix" @click="resetCart">Clear Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniCart",
  props: {
    open: Boolean,
  },
  methods: {
    removeItem(payload) {
      this.$store.dispatch("remove_item", payload);
    },
    resetCart() {
      this.$store.dispatch("clear_cart");
    },
  },
  computed: {
    cart_p() {
      return this.$store.state.cart;
    },
    total() {
      return this.$store.getters.cart_total;
    },
  },
  mounted() {
    console.log(this.cart_p.length);
  },
};
</script>

<style lang="scss">
@import "./mini_cart/MiniCart.scss";
</style>
