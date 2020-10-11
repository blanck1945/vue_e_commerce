<template>
  <div class="aside_text">
    <h2 class="text_label">{{label}}</h2>
    <img v-if="img" :src="aside_img" alt="img" class="aside_img" />
    <div v-for="(el,index) in optionArr" :key="index" class="option_box">
      <h3 :class="el === 'Show more' ? 'option_text blue' : 'option_text'">{{el}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    optionArr: Array,
    img: Boolean,
    aside_img: String
  },
  data() {
    return {
      counter: 0
    };
  }
};
</script>

<style lang="scss">
@import "./Aside_Text.scss";
</style>