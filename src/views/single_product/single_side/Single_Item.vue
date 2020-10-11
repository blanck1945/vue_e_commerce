<template>
  <div class="single_item">
    <i :class="icon"></i>
    <h3 class="label_text">{{ label }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    label: String,
  },
};
</script>

<style lang="scss">
.single_item {
  height: 45px;
  align-items: center;
  padding-left: 8px;
  display: flex;
  .label_text {
    margin-left: 15px;
    font-size: 0.6rem;
    font-weight: 400;
  }
}
</style>
