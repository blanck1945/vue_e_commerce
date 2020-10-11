<template>
  <div class="home home_discount">
    <h2 class="header">10% de descuento en bestsellers</h2>
    <img :src="img" alt="img" class="discount_img" />
    <div class="offer_div">
      <h3 class="g_text">
        No dejes pasar la oportunidad de esta oferta. Entra el código
        <span class="strong">REGALO10</span> en la página de check out para obtener 10% de descuento en esta colección de libros en español
      </h3>
    </div>
  </div>
</template>

<script>
import discountImg from "../../assets/discount_logo/discount_home.png";
export default {
  data() {
    return {
      img: discountImg
    };
  }
};
</script>

<style lang="scss">
.home_discount {
  width: 65%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .header {
    width: 96%;
    margin: 12px 0;
    text-align: left;
    font-size: 0.8rem;
    color: $_black;
  }
  .discount_img {
    width: 95%;
  }
  .offer_div {
    width: 95%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 12px 0;
    background-color: white;
    box-shadow: $sha;
  }
}
</style>