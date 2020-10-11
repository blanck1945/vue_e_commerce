<template>
  <div class="single_box">
    <div class="single_up">
      <div class="box_data">
        <img :src="single.product_img" alt="product_img" class="data_img" />
        <div class="data_text">
          <h2 class="text_header">{{ single.product_name }} {{ single.product_volume }}</h2>
          <div class="data_score">
            <div></div>
            <div class="format_box">
              <p class="format_text">{{ single.product_format }}</p>
              <p class="format_text top">|</p>
              <p class="format_text">{{ single.product_name }}</p>
              <p class="format_text top">|</p>
              <p class="format_text">{{ single.product_languaje }}</p>
            </div>
            <div class="format_box">
              <p class="format_text">By (author)</p>
              <p class="format_text">{{ single.product_author }}</p>
            </div>
            <div class="format_box">
              <p class="format_text mar_tp">Compartir</p>
              <a
                href="mailto:?subject=Sharing a book&body=I saw this book at Book Depository and thought you might like it:%0D%0A%0D%0Ahttps://www.bookdepository.com/es/Berserk-1-Kentaro-Miura/9781593070205"
              >
                <i class="far fa-envelope icon_te icon_mail icon_t"></i>
              </a>
              <a href="https://www.facebook.com/BookDepository">
                <i class="fab fa-facebook icon_te icon_fb icon_t"></i>
              </a>
              <i class="fab fa-twitter icon_te icon_tw"></i>
              <i class="fab fa-pinterest-p icon_te icon_pinterest"></i>
            </div>
            <div class="format_box">
              <p class="text_para">{{ single.product_desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <SingleSide />
    </div>
    <SingleCenter />
  </div>
</template>

<script>
import SingleCenter from "./single_center/Single_Center";
export default {
  name: "Single_Product",
  components: {
    SingleCenter,
  },
  props: ["id"],
  computed: {
    single() {
      return this.$store.state.single_p;
    },
  },
  mounted() {
    this.$store.dispatch("setSingleProduct", this.id);
  },
  destroyed() {
    this.$store.dispatch("clearSingleProduct");
  },
};
</script>

<style lang="scss">
@import "./Single_Product.scss";
</style>
