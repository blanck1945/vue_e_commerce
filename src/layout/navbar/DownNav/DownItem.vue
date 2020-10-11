<template>
  <div class="nav_category" @mouseover="hover = true" @mouseleave="hover = false">
    <h4 class="link_text_bot">{{ label }}</h4>
    <i :class="icon_class"></i>
    <LanguajeMenu v-if="lang" :hover="hover" />
  </div>
</template>

<script>
import LanguajeMenu from "./hidden_menu/Languaje_Menu";
export default {
  components: {
    LanguajeMenu
  },
  props: {
    label: String,
    icon_class: String,
    lang: Boolean
  },
  data() {
    return {
      hover: false,
      up_arr: "fas fa-chevron-up"
    };
  }
};
</script>

<style lang="scss">
.nav_category {
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  font-size: 0.5rem;
  margin: 0 4px;
  .link_text_bot {
    font-weight: 300;
  }
  .link_icon {
    margin-left: 4px;
    margin-top: 3px;
    font-size: 0.5rem;
  }
}
</style>
