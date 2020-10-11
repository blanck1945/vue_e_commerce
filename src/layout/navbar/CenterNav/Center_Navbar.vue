<template>
  <div class="center_nav">
    <router-link to="/">
      <img src="../../../assets/51.-Book-Depository.jpg" alt="book_logo" class="book_logo" />
    </router-link>
    <div class="input_box">
      <i class="fas fa-search search_icon" @click="getValue"></i>
      <input type="text" name="search" v-model="search" @keyup.enter="getValue" class="input_field" />
    </div>
    <div class="search_box">
      <button class="search_btn">Buscar</button>
      <button class="ad_btn">Búsqueda avanzada</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    data() {
      return {
        search: ""
      };
    },
    getValue() {
      this.$store.dispatch("searchProducts", this.search);
      this.$router.push("/search_results");
    }
  }
};
</script>

<style lang="scss">
@import "./Center_Navbar.scss";
</style>
