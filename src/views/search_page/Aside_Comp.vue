<template>
  <div class="aside_div">
    <h3 class="aside_label">{{ label }}</h3>
    <CompField label="Palabra clave" attribute="palabra" :input="true" v-if="comp" />
    <CompField label="Precio" attribute="price" :dataArr="data[0]" :input="false" v-if="comp" />
    <CompField
      label="Disponibilidad"
      attribute="disponible"
      :dataArr="data[1]"
      :input="false"
      v-if="comp"
    />
    <CompField label="Idioma" attribute="languaje" :dataArr="data[2]" :input="false" v-if="comp" />
    <CompField label="Formato" attribute="format" :dataArr="data[3]" :input="false" v-if="comp" />
    <div class="aside_category" v-if="cate">
      <i class="fas fa-chevron-left cat_icon"></i>
      <h3 class="cat_text">Ver todas las categorías</h3>
    </div>
    <div v-show="cate" class="cate_field" v-for="el in categories" :key="el">
      <h3 class="cate_text">{{ el }}</h3>
    </div>
    <button class="search_btn" v-if="comp">Buscar</button>
  </div>
</template>

<script>
import CompField from "./aside_comp/Comp_Field";
import { dataArr, categories } from "./dataArr";

export default {
  props: {
    label: String,
    comp: Boolean,
    cate: Boolean
  },
  components: {
    CompField
  },
  computed: {
    data() {
      return dataArr;
    },
    categories() {
      return categories;
    }
  },
  mounted() {
    console.log(this.comp);
  }
};
</script>

<style lang="scss">
.aside_div {
  min-height: 200px;
  padding-left: 5px;
  margin-top: 2px;
  .aside_label {
    color: $_black;
    font-size: 0.6rem;
    height: 25px;
    display: flex;
    margin-top: 3px;
    align-items: center;
    border-bottom: 0.5px solid $_white;
  }
  .search_btn {
    width: 93%;
    margin-top: 2px;
    height: 20px;
  }
  .aside_category {
    display: flex;
    align-items: center;
    height: 20px;
    padding: 0 7px;
    justify-content: space-between;
    color: $_black;
    cursor: pointer;
    border-bottom: 0.5px solid $_white;
    .cat_icon {
      font-size: 0.6rem;
    }
    .cat_text {
      font-size: 0.6rem;
    }
  }
  .aside_category:hover {
    background-color: $_white;
    transition: 0.2s ease-in-out;
  }
  .cate_field {
    font-size: 0.5rem;
    border-bottom: 0.5px solid $_white;
    color: $_black;
    height: 20px;
    .cate_text {
      height: 100%;
      padding-top: 5px;
      font-weight: 300;
      color: $_black;
      font-size: 0.5rem;
      text-align: left;
      cursor: pointer;
    }
  }
  .cate_field:hover {
    background-color: $_white;
    transition: 0.2s ease-in-out;
  }
}
</style>
