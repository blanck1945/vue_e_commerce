<template>
  <div class="aside_comp">
    <h3 class="comp_label" v-if="label">{{label_text}}</h3>
    <div class="comp_overlay">
      <img :src="img" alt="img" class="img_aside" />
      <h4 v-if="footer" class="comp_footer">{{footer_text}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: Boolean,
    label_text: String,
    img: String,
    footer: Boolean,
    footer_text: String
  }
};
</script>

<style lang="scss">
.aside_comp {
  width: 100%;
  min-height: 80px;
  background-color: white;
  cursor: pointer;
  margin-top: 3px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  .comp_label {
    font-size: 0.6rem;
    width: 95%;
    margin: 7px auto;
    text-align: left;
    color: $_black;
  }
  .img_aside {
    width: 95%;
    background-color: yellowgreen;
  }
  .comp_footer {
    color: $_black;
    width: 95%;
    text-align: left;
    margin: 2px auto;
    font-size: 0.5rem;
    padding-bottom: 2px;
    font-weight: 300;
  }
}
.aside_comp:hover > .comp_overlay {
  background: $_white;
  transition: 0.2 ease-in-out;
}
</style>