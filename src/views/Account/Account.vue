<template>
  <div class="home">
    <div class="wish_box">
      <div class="acc_side">
        <div class="side_up">
          <h3 class="up_text">Mi Cuenta</h3>
        </div>
        <div class="side_up">
          <h3
            @click="changeMenu(el)"
            class="up_text up_fix"
            v-for="(el,index) in arr[0]"
            :key="index"
          >{{el}}</h3>
        </div>
        <div class="side_up">
          <h3
            @click="changeMenu(el)"
            class="up_text up_fix"
            v-for="(el,index) in arr[1]"
            :key="index"
          >{{el}}</h3>
        </div>
      </div>
      <div class="acc_home">
        <Pedidos v-if="menuDis === 'Mis pedidos'" />
      </div>
    </div>
  </div>
</template>

<script>
import { accArr } from "./accArr";
import Pedidos from "./acc_home/pedidos/Pedidos";
export default {
  name: "acc",
  components: {
    Pedidos,
  },
  computed: {
    arr() {
      return accArr;
    },
    menuDis() {
      return this.$store.state.accHomeDis;
    },
  },
  methods: {
    changeMenu(payload) {
      this.$store.dispatch("toogleHomeMenu", payload);
    },
  },
};
</script>

<style lang="scss">
.wish_box {
  width: 90vw;
  min-height: 30vh;
  display: flex;
  margin-top: 3px;
  .acc_side {
    width: 25%;
    min-height: 150px;
    .side_up {
      min-height: 30px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: white;
      box-shadow: $sha;
      padding: 3px 0;
      margin-bottom: 3px;
      .up_text {
        color: black;
        width: 93%;
        margin: auto;
        height: 25px;
        margin: auto;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding-left: 2px;
        font-size: 0.6rem;
        transition: 0.2s ease-in-out;
      }
      .up_text:hover {
        background-color: $_white;
        transition: 0.2s ease-in-out;
      }
      .up_fix {
        border-bottom: 0.5px solid $_white;
        font-weight: 300;
      }
    }
  }
  .acc_home {
    box-shadow: $sha;
    width: 75%;
    margin-left: 5px;
    min-height: 150px;
    background-color: white;
  }
}
</style>