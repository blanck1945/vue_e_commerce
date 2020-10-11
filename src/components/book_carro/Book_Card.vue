<template>
  <div class="carro_div">
    <div class="book_card" v-for="el in data" :key="el.id">
      <router-link :to="{ name: 'single_product', params: { id: el.id } }" class="item_header">
        <div class="header_div">
          <img :src="el.product_img" alt="image" class="book_img he" />
          <h3 class="header_text">{{ el.product_name.substring(0,32) }} {{ el.product_volume }}</h3>
        </div>
        <div class="center_div">
          <h3 class="center_text">{{ el.product_author }}</h3>
          <div class="star_div">
            <i
              :class="
              el.product_rank >= 1
                ? 'fas fa-star star_icon yell'
                : 'far fa-star star_icon'
            "
            ></i>
            <i
              :class="
              el.product_rank >= 2
                ? 'fas fa-star star_icon yell'
                : 'far fa-star star_icon'
            "
            ></i>
            <i
              :class="
              el.product_rank >= 3
                ? 'fas fa-star star_icon yell'
                : 'far fa-star star_icon'
            "
            ></i>
            <i
              :class="
              el.product_rank >= 4
                ? 'fas fa-star star_icon yell'
                : 'far fa-star star_icon'
            "
            ></i>
            <i
              :class="
              el.product_rank === 5
                ? 'fas fa-star star_icon yell'
                : 'far fa-star star_icon'"
            ></i>
          </div>
        </div>
        <div class="footer_div">
          <h5
            class="under_price"
          >${{ (el.product_price + ((el.product_price * el.product_percentage)/100)).toFixed(2) }}</h5>
          <h4 class="violet_price">${{ el.product_price.toFixed(2) }}</h4>
          <h4
            class="dis_price"
          >Ahorra ${{((el.product_price * el.product_percentage)/100).toFixed(2)}}</h4>
        </div>
      </router-link>
      <button class="add_btn" @click="addToCart(el)">
        <p class="add_text">Añadir a la cesta</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    addToCart(payload) {
      this.$store.dispatch("addToCart", payload);
    },
  },
};
</script>

<style lang="scss">
@import "./Book_Card.scss";
</style>
