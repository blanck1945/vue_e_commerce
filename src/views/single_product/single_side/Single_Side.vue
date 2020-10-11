<template>
  <div class="side_div">
    <div class="side_up">
      <h3 class="side_price">$ {{ single.product_price.toFixed(2) }}</h3>
    </div>
    <div class="side_center">
      <SingleItem icon="fas fa-rocket" label="Envío gratis" />
      <SingleItem
        icon="far fa-check-circle"
        label="Disponible. Enviado desde el Reino Unido en 3 días laborables"
      />
    </div>
    <div class="side_down">
      <button class="search_btn" @click="addToCart(single)">
        Añadir a la cesta
      </button>
      <button class="grey_btn">Añadir a la lista de deseos</button>
    </div>
  </div>
</template>
<script>
import SingleItem from "./Single_Item";
export default {
  name: "SingleSide",
  components: {
    SingleItem,
  },
  computed: {
    single() {
      return this.$store.state.single_p;
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
.side_div {
  height: 215px;
  color: black;
  margin: 10px;
  width: 100%;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  .side_up {
    height: 33px;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: left;
    margin: auto;
    border-bottom: 0.5px solid $_white;
    .side_price {
      color: $_book_v;
    }
  }
  .side_center {
    border-bottom: 0.5px solid $_white;
    width: 95%;
    margin: auto;
  }
  .side_down {
    display: flex;
    height: 90px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .search_btn {
      width: 90%;
    }
    .grey_btn {
      width: 90%;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      height: 25px;
      font-size: 0.5rem;
      transition: 0.2s ease-in-out;
      background-color: $_white;
    }
    .grey_btn:hover {
      background-color: $s_grey;
      transition: 0.2s ease-in-out;
    }
  }
}
</style>
