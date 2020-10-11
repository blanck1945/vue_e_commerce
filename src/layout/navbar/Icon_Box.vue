<template>
  <div :class="bor_none ? 'icon_box bor_none' : 'icon_box'">
    <i :class="icon_class"></i>
    <h4 class="icon_text">{{ label }}</h4>
  </div>
</template>

<script>
export default {
  name: "Icon_Box",
  props: {
    icon_class: String,
    label: String,
    bor_none: Boolean,
  },
};
</script>

<style lang="scss">
.icon_box {
  height: 100%;
  border-left: 1px solid $p_grey;
  padding: 0 8px;
  min-width: 20px;
  display: flex;
  cursor: pointer;
  align-items: center;
  .icon_fix {
    color: $m_grey;
    font-size: 0.8rem;
  }
  .icon_text {
    font-size: 0.6rem;
    margin-left: 5px;
    color: $m_grey;
    font-weight: 300;
  }
}
.icon_box:hover > .icon_text {
  color: white;
  transition: 0.2s ease-in-out;
}
.bor_none {
  border-left: none;
}
</style>
