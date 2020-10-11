<template>
  <div class="footer_main">
    <FooterText label="Descubre" :footerArr="data[0]" />
    <FooterText label="¿En qué podemos ayudarte?" :footerArr="data[1]" />
    <FooterText label="Trabaja con nosotros" :footerArr="data[2]" />
    <FooterText label="Información importante" :footerArr="data[3]" />
  </div>
</template>

<script>
import FooterText from "../footer_main/Footer_Text";
import { footerArr } from "./footerArr";
export default {
  components: {
    FooterText
  },
  data() {
    return {
      data: footerArr
    };
  }
};
</script>

<style lang="scss">
.footer_main {
  width: 100%;
  height: 100%;
  background-color: $up_nav;
  display: flex;
}
</style>