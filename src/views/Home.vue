<template>
  <div class="home">
    <div class="product_box">
      <ProductDis />
    </div>
    <div class="aside_box">
      <div class="filter_box"></div>
    </div>
  </div>
</template>

<script>
import ProductDis from "../components/product_dis/Product_Dis";
export default {
  name: "Home",
  components: {
    ProductDis,
  },
};
</script>

<style lang="scss">
.home {
  width: 90%;
  background-color: $_white;
  min-height: 90vh;
  margin: auto;
  display: flex;
  .aside_box {
    width: 25%;
    display: flex;
    justify-content: center;
    height: 90vh;
    .filter_box {
      width: 80%;
      min-height: 200px;
      margin: 9px 0;
      background-color: brown;
    }
  }
  .product_box {
    width: 90%;
    border-right: 2px solid $_black;
    justify-content: space-evenly;
  }
}
</style>
