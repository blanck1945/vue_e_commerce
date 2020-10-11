<template>
  <div class="center_item">
    <h3 class="item_text">{{ header }}</h3>
    <h3 class="item_vol">{{ header_text }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    header: String,
    header_text: String,
  },
};
</script>

<style lang="scss">
.center_item {
  height: 15px;
  display: flex;
  margin-top: 5px;
  .item_text {
    font-size: 0.5rem;
    color: black;
    font-weight: 700;
  }
  .item_vol {
    color: black;
    margin-left: 5px;
    font-size: 0.5rem;
    font-weight: 300;
  }
}
</style>
