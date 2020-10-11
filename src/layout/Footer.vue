<template>
  <div class="footer">
    <FooterUp />
    <FooterDown />
    <FooterMain />
  </div>
</template>

<script>
import FooterUp from "./footer_up/FooterUp";
import FooterDown from "./footer_down/Footer_Down";
import FooterMain from "./footer_main/FooterMain";
export default {
  components: {
    FooterUp,
    FooterDown,
    FooterMain
  }
};
</script>

<style lang="scss">
.footer {
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 250px;
  margin-top: 10px;
}
</style>
