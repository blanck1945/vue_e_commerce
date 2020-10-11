<template>
  <div class="nav">
    <div class="up_nav">
      <div class="up_left">
        <Icon_Box icon_class="fas fa-home icon_fix" :bor_none="true" />
        <Icon_Box label="Contáctanos" icon_class="far fa-envelope icon_fix" />
        <Icon_Box label="Ayuda" icon_class="fas fa-exclamation-circle icon_fix" />
      </div>
      <div class="central_nav">
        <i class="fas fa-rocket"></i>
        <h3 class="central_text">envío gratis</h3>
      </div>
      <div class="up_left">
        <router-link to="/acc" class="login_router">
          <Icon_Box
            icon_class="fas fa-map-marker-alt icon_fix"
            label="Mis pedidos"
            :bor_none="true"
          />
        </router-link>
        <Icon_Box icon_class="far fa-heart icon_fix" label="Lista de deseos" />
        <router-link to="/login" class="login_router">
          <Icon_Box icon_class="fas fa-user-circle icon_fix" label="Iniciar sesión/Crear cuenta" />
        </router-link>
      </div>
    </div>
    <CenterNav />
    <DownNav />
    <MiniCart :open="open" />
  </div>
</template>

<script>
import MiniCart from "./MiniCart";
import Icon_Box from "./navbar/Icon_Box";
import CenterNav from "./navbar/CenterNav/Center_Navbar";
import DownNav from "./navbar/DownNav/DownNav";
export default {
  name: "Navbar",
  components: {
    MiniCart,
    Icon_Box,
    CenterNav,
    DownNav,
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
@import "./navbar/Navbar.scss";
</style>
