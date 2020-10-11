<template>
  <div class="home_header">
    <router-link to="/discount" class="img_link">
      <img :src="discountImg" alt="img" class="discount_img" />
    </router-link>
    <div class="watch_box">
      <div class="watch_header">
        <h3>Watch people shop</h3>
        <h3 class="watch_down">Big view</h3>
      </div>
      <div class="watch_map"></div>
    </div>
  </div>
</template>

<script>
import discountImg from "../../assets/discount_logo/1112x223_CTA(1).jpg";
export default {
  data() {
    return {
      discountImg: discountImg
    };
  }
};
</script>

<style lang="scss">
.home_header {
  width: 98%;
  min-height: 85px;
  margin-bottom: 4px;
  display: flex;
  .img_link {
    width: 75%;
    margin-right: 4px;
    cursor: pointer;
    .discount_img {
      width: 100%;
      height: 100%;
      margin-right: 4px;
    }
  }
  .watch_box {
    width: 35%;
    background-color: white;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    .watch_header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 7px;
      margin-top: 2px;
      font-size: 0.6rem;
      .watch_down {
        font-size: 0.5rem;
        font-weight: 300;
        cursor: pointer;
        margin-top: 2px;
      }
      .watch_down:hover {
        text-decoration: underline;
      }
    }
    .watch_map {
      width: 95%;
      height: 72%;
      margin: auto;
      margin-top: 2px;
      background-color: lightskyblue;
    }
  }
}
</style>