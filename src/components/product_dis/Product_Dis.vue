<template>
  <div class="product_dis">
    <div v-for="el in products" :key="el.product_id" class="product_item">
      <router-link
        :to="{ name: 'single_product', params: { id: el.product_id } }"
        class="item_header"
      >
        <h3 class="product_title">
          {{ el.product_name }} - {{ el.product_volume }}
        </h3>
      </router-link>
      <div class="product_center">
        <button
          :class="el.product_add ? 'disabled add_btn' : 'add_btn'"
          @click="addToCart(el)"
        >
          {{ el.product_add ? "Dismiss of Cart" : "Add to Cart" }}
        </button>
        <div :class="el.product_add ? 'amount_box' : 'amount_box hidden'">
          <button class="amount_btn" @click="itemAction(el, 'add')">add</button>
          <h3 class="separator">-</h3>
          <button class="amount_btn" @click="itemAction(el, 'take')">
            take
          </button>
          <h3 class="separator">-</h3>
          <button class="amount_btn" @click="itemAction(el, 'reset')">
            reset
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDis",
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  data() {
    return {
      add: false,
    };
  },
  methods: {
    addToCart(payload) {
      if (payload.product_add === true) {
        return this.$store.dispatch("dismissOfCart", payload);
      }
      this.$store.dispatch("addToCart", payload);
    },
    itemAction(payload, string) {
      this.$store.dispatch(string + "Action", payload);
    },
  },
};
</script>

<style lang="scss">
@import "./Product_Dis.scss";
</style>
