<template>
  <div class="find_box">
    <label>
      {{find_label}}
      <span v-if="spanComp">{{span_text}}</span>
    </label>
    <input type="text" class="find_input" />
    <h4 class="find_sub">{{find_sub}}</h4>
  </div>
</template>

<script>
export default {
  props: {
    find_label: String,
    find_sub: String,
    spanComp: Boolean,
    span_text: String,
  },
};
</script>

<style lang="scss">
.find_box {
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
}
</style>