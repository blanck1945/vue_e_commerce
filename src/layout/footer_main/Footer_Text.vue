<template>
  <div class="footer_text_do">
    <h2 class="text_label">{{label}}</h2>
    <div class="footer_div_te" v-for="(el, index) in footerArr" :key="index">
      <h3 class="arr_text">{{el}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    footerArr: Array
  }
};
</script>

<style lang="scss">
.footer_text_do {
  width: 24%;
  height: 150px;
  color: $_white;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  .text_label {
    font-size: 0.5rem;
    width: 60%;
    margin-bottom: 8px;
  }
  .footer_div_te {
    width: 60%;
    height: 15px;
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid $p_grey;
    margin: 4px 0;
    .arr_text {
      font-size: 0.5rem;
      font-weight: 300;
      padding-bottom: 8px;
    }
  }
}
</style>