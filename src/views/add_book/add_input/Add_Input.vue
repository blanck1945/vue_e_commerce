<template>
  <div class="add_input_box">
    <label class="add_text">{{addText}}</label>
    <input class="add_input" type="text" v-model="value" :name="data" />
  </div>
</template>

<script>
export default {
  props: {
    addText: String,
    value: {
      type: String
    }
  },
  watch: {
    value() {
      this.$emit("input", this.value);
    }
  },
  computed: {
    data() {
      return this.model;
    }
  },
  mounted() {
    console.log(this.data);
    console.log(this.model);
  }
};
</script>