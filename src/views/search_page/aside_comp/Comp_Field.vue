<template>
  <div class="comp_div">
    <label class="comp_label">{{ label }}</label>
    <select :name="attribute" placeholder="ver todo" v-if="!input" class="comp_select">
      <option v-for="el in dataArr" :key="el" :value="el">{{ el }}</option>
    </select>
    <input type="text" v-else :name="attributes" v-model="query" class="comp_select" />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    attribute: String,
    dataArr: Array,
    input: Boolean
  },
  data() {
    return {};
  },
  computed: {
    query() {
      return this.$store.state.query;
    }
  }
};
</script>

<style lang="scss">
.comp_div {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 38px;
  .comp_label {
    text-align: left;
    color: $_black;
    font-weight: 700;
    margin: 3px 0;
    font-size: 0.5rem;
  }
  .comp_select {
    width: 95%;
    height: 18px;
    padding-left: 5px;
    font-size: 0.5rem;
    border: 0.5px solid $s_grey;
  }
  .comp_select:focus {
    border: 0.5px solid $_black;
  }
}
</style>
