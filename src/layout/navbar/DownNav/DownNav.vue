<template>
  <div class="down_nav">
    <div class="down_max">
      <div class="nav_left">
        <DownItem label="Comprar por categoria" icon_class="fas fa-chevron-down link_icon" />
        <router-link to="/top_sell" class="link_text">Los más vendidos</router-link>
        <router-link to="/upcoming" class="link_text">Próximamente</router-link>
        <router-link to="/new_articles" class="link_text">Nuevos lanzamientos</router-link>
        <router-link to="/outlet" class="link_text">Outlet de libros</router-link>
      </div>
      <div class="right_nav">
        <DownItem label="Español" icon_class="fas fa-chevron-down link_icon" :lang="true" />
        <DownItem :label="currency" icon_class="fas fa-chevron-down link_icon" />
        <div class="cart_box">
          <h4 class="cart_total">ARS${{total === 0 ? "0.00" : total}}</h4>
          <router-link to="user_cart" class="link_route">
            <h4 :disabled="cart_p.length === 0" :class="open ? 'select' : 'fix'">
              {{ num === 0 ? "0" : num }}
              <i class="fas fa-cart-arrow-down icon_cart"></i>
            </h4>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DownItem from "./DownItem";
export default {
  components: {
    DownItem
  },
  computed: {
    total() {
      return this.$store.getters.cart_total;
    },
    num() {
      return this.$store.getters.cart_amount;
    },
    cart_p() {
      return this.$store.state.cart;
    },
    open() {
      return this.$store.state.open;
    },
    currency() {
      return this.$store.state.currency;
    }
  }
};
</script>

<style lang="scss">
@import "./DownNav.scss";
</style>
