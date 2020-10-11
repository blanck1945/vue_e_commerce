<template>
  <div class="fizz_box">
    <h2>Here is the FizzBuzz</h2>
    <button @click="getResult">GetFizz</button>
    <div class="buzz_box" v-for="el in dataArr" :key="el">
      <h5>{{el}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "fizz",
  data() {
    return {
      num: 0,
      dataArr: []
    };
  },
  methods: {
    getResult() {
      while (this.num < 100) {
        this.num += 1;
        this.dataArr.push(this.num);
      }
      this.getDiv();
    },
    getDiv() {
      const newArr = this.dataArr.map(el =>
        el % 3 === 0 && el % 5 === 0
          ? "FizzBuzz"
          : el % 3 === 0
          ? "Fizz"
          : el % 5 === 0
          ? "Buzz"
          : el
      );
      this.dataArr = newArr;
    }
  }
};
</script>

<style lang="scss">
.fizz_box {
  width: 100%;
  min-height: 80vh;
}
</style>