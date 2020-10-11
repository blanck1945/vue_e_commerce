<template>
  <div class="cart_card">
    <div class="image_box">
      <img :src="data.product_img" alt="img" class="pro_img" />
      <div class="box_data">
        <h3 class="data_name">{{data.product_name}} {{data.product_volume}}</h3>
        <StarDiv :el="data.product_rank" />
        <h3
          class="data_text"
        >{{data.product_format}},{{data.product_languaje}} | {{data.product_author}}</h3>
        <h3 class="data_price">US${{data.product_price.toFixed(2)}}</h3>
        <h3
          class="data_text"
        >Available - dispatch from the {{data.product_dispatch}} in {{data.product_days}} business days</h3>
      </div>
    </div>
    <div class="right_box">
      <div class="right_div">
        <div class="select_box">
          <h3 class="right_text">cantidad</h3>
          <select name="amount" id class="select_div">
            <option v-for="el in numArr" :key="el" :value="el">{{el}}</option>
          </select>
        </div>
        <h3 class="amount_text">US${{(data.product_price * data.product_amount).toFixed(2)}}</h3>
        <button class="remove_btn">Eliminar</button>
      </div>
    </div>
  </div>
</template>

<script>
import StarDiv from "../../components/star_comp/Start_Comp";
export default {
  components: {
    StarDiv,
  },
  data() {
    return {
      numArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  props: {
    data: Object,
  },
};
</script>

<style lang="scss">
@import "./Cart_Card.scss";
</style>