<template>
  <div class="nav">
    <div class="router_box">
      <router-link to="/" class="link">Home</router-link> |
      <router-link to="/about" class="link">About</router-link>
    </div>
    <div class="cart_box">
      <button
        :disabled="cart_p.length === 0"
        @click="cartAction"
        :class="open ? 'select' : 'general_btn'"
      >
        Cart {{ num }}
      </button>
    </div>
    <MiniCart :open="open" />
  </div>
</template>

<script>
import MiniCart from "./MiniCart";
export default {
  name: "Navbar",
  components: {
    MiniCart,
  },
  computed: {
    num() {
      return this.$store.getters.cart_amount;
    },
    open() {
      return this.$store.state.open;
    },
    cart_p() {
      return this.$store.state.cart;
    },
  },
  methods: {
    cartAction() {
      this.$store.dispatch("toogleMenu");
    },
  },
};
</script>

<style lang="scss">
.nav {
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid $_white;
  align-items: center;
  justify-content: space-between;
  background-color: $_black;
  .router_box {
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .link {
      text-decoration: none;
      color: $_blue;
      margin: 0 5px;
      &.router-link-exact-active {
        color: #fafafa;
        text-decoration: underline;
      }
    }
  }
  .cart_box {
    height: 50px;
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
