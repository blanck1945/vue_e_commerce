<template>
  <div class="single_center">
    <div class="center_up">
      <h3 class="center_text">Detalles del producto</h3>
    </div>
    <div class="center_down">
      <div class="down_left">
        <CenterItem
          header="Formato: "
          :header_text="
            single.product_format + '|' + single.product_pages + 'páginas'
          "
        />
        <CenterItem
          header="Dimensiones: "
          :header_text="single.product_dimention"
        />
        <CenterItem
          header="Fecha de publicación: "
          :header_text="single.product_publish_day"
        />
        <CenterItem header="Editorial: " :header_text="single.product_editor" />
        <CenterItem
          header="Ciudad/País de publicación: "
          :header_text="single.product_publish_location"
        />
      </div>
      <div class="down_center">
        <CenterItem header="Idioma: " :header_text="single.product_languaje" />
        <CenterItem header="ISBN10: " :header_text="single.product_ISBN10" />
        <CenterItem header="ISBN13: " :header_text="single.product_ISBN13" />
        <CenterItem
          header="Ranking en los libros más vendidos: "
          :header_text="single.product_selling_rank"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CenterItem from "./Center_Item/Center_Item";
export default {
  components: {
    CenterItem,
  },
  computed: {
    single() {
      return this.$store.state.single_p;
    },
  },
  mounted() {
    console.log(this.single);
  },
};
</script>

<style lang="scss">
.single_center {
  width: 99%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  .center_up {
    width: 100%;
    height: 25px;
    background-color: white;
    .center_text {
      border-bottom: 0.5px solid $_white;
      width: 98%;
      height: 100%;
      display: flex;
      align-items: center;
      margin: auto;
      color: black;
      font-size: 0.7rem;
    }
  }
  .center_down {
    width: 100%;
    padding: 5px 0;
    padding-left: 8px;
    min-height: 70px;
    display: flex;
    background-color: white;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    .down_center {
      margin: 0 25px;
    }
  }
}
</style>
