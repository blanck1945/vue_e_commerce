<template>
  <div class="home home_nov">
    <h2 class="cart_header">Tu cesta</h2>
    <CartUp v-if="cart.length !== 0" />
    <div class="cart_up" v-else>
      <h3 class="cart_empty">Tu cesta está vacía.</h3>
    </div>
    <div class="cart_details">
      <div class="details_div" v-if="cart.length === 0">
        <h3 class="details_header">¿Necesitas ayuda para encontrar un libro?</h3>
        <h4
          class="details_text"
        >Vendemos más de 20 millones de libros a precios competitivos con envío gratis en todo el mundo. ¡Descubre nuestros libros más vendidos y encuentra tu siguiente libro!</h4>
        <button class="search_btn">Descubre lo más vendidos</button>
        <h4
          class="details_text"
        >Y no olvides que tenemos envío gratis en todo el mundo en todos nuestros libros</h4>
      </div>
      <div class="details_div" v-for="(el,index) in cart" :key="index">
        <h2 class="details_header" v-if="index === 0">Detalles de tu cesta</h2>
        <CartCard :data="el" />
      </div>
    </div>
    <div class="cart_down"></div>
  </div>
</template>

<script>
import CartCard from "./Cart_Card";
import CartUp from "./Cart_Up";
export default {
  components: {
    CartCard,
    CartUp
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  mounted() {
    console.log(this.cart.length);
  }
};
</script>

<style lang="scss">
@import "./Cart_Page.scss";
.cart_up {
  display: flex;
  justify-content: center;
  align-items: center;
  .cart_empty {
    text-align: left;
    font-size: 0.6rem;
    margin-left: 8px;
    width: 100%;
    font-weight: 300;
  }
}
.details_div {
  .search_btn {
    width: 20%;
    margin: 8px 5px;
  }
  .details_text {
    font-size: 0.6rem;
    color: $_black;
    width: 98%;
    display: flex;
    justify-content: left;
    margin: 5px auto;
    font-weight: 300;
  }
}
</style>