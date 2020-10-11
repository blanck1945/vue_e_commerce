<template>
  <div class="home home_search">
    <div class="search_side">
      <AsideComp label="Filtrar tu búsqueda" :comp="true" />
      <AsideComp label="Filtrar por categorías" :cate="true" />
    </div>
    <div class="search_center">
      <h2>Resultados de la búsqueda {{ query }}</h2>
      <div class="search_up">
        <h3 class="result_text" v-if="result.length === 0">No Match Found</h3>
        <h3
          class="result_text"
          v-else-if="result.lenght !== 0 && result.length < 30"
        >Mostrando 1 de {{result.length}}</h3>
        <h3 class="result_text" v-else>Mostrando 1 a 30 de {{result.length}}</h3>
      </div>
      <BookCard :dataArr="result" />
    </div>
  </div>
</template>

<script>
import AsideComp from "./Aside_Comp";
import BookCard from "../../components/book_carro/Book_Card";
export default {
  components: {
    AsideComp,
    BookCard
  },
  computed: {
    query() {
      return this.$store.state.query;
    },
    result() {
      return this.$store.state.results;
    }
  },
  mounted() {
    console.log(this.result);
  }
};
</script>

<style lang="scss">
.home_search {
  width: 74%;
  display: flex;
  .search_side {
    width: 25%;
    margin-top: 3px;
    min-height: 200px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    background-color: white;
  }
  .search_center {
    width: 75%;
    min-height: 200px;
    margin-left: 5px;

    .carro_div {
      min-height: 200px;
      display: flex;
      border: none;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
      height: 190px;
      background-color: white;
    }
    .search_up {
      height: 25px;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
      background-color: white;
      display: flex;
      padding: 0 5px;
      align-items: center;
      justify-content: space-between;
      .result_text {
        font-size: 0.6rem;
        color: $_black;
        font-weight: 300;
      }
    }
  }
}
</style>
