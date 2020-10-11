<template>
  <div class="book_carro">
    <div class="carro_header">
      <h3 v-if="!header" class="header_text">{{label}}</h3>
      <h4 v-if="header_down" class="label_down">{{label_down}}</h4>
    </div>
    <div class="carro_div">
      <BookCard :data="dataArr" />
    </div>
  </div>
</template>

<script>
import BookCard from "./Book_Card";
export default {
  props: {
    label: String,
    header_down: Boolean,
    label_down: String,
  },
  components: {
    BookCard,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    dataArr() {
      return this.$store.state.products;
    },
  },
};
</script>

<style lang="scss">
.book_carro {
  width: 98%;
  height: 240px;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  .carro_header {
    min-height: 10%;
    width: 98%;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 5px 0;
    align-items: flex-start;
    justify-content: center;
    padding-left: 5px;
    border-bottom: 0.5px solid $_white;
    .header_text {
      font-size: 0.6rem;
    }
    .label_down {
      font-size: 0.6rem;
      font-weight: 300;
    }
  }
  .carro_div {
    display: flex;
    height: 190px;
  }
}
</style>