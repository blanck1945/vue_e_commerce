<template>
  <div class="cart_up">
    <div class="up_div">
      <div class="total_div">
        <i class="fas fa-shopping-cart shop_cart"></i>
        <h4 class="total_text">
          Tienes {{cartNum}} artículos con un total de
          <span class="total_st">ARS$ {{cartTotal}}</span> en tu cesta
        </h4>
      </div>
      <button class="search_btn">Proceder al pago</button>
    </div>
    <div class="up_div bor_none">
      <div class="total_div">
        <h4 class="total_text">
          Al realizar tu pedido confirmas que has leído y aceptas nuestros
          <span
            class="line"
          >Términos y Condiciones.</span> Consulta también nuestra
          <span class="line">Política de privacidad</span> y
          <span class="line">la Política de Cookies.</span>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartNum() {
      return this.$store.getters.cart_amount;
    },
    cartTotal() {
      return this.$store.getters.cart_total;
    }
  }
};
</script>