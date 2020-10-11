<template>
  <div class="star_div">
    <i
      :class="
              el >= 1
                ? 'fas fa-star star_icon yell'
                : 'far fa-star star_icon'
            "
    ></i>
    <i
      :class="
              el >= 2
                ? 'fas fa-star star_icon yell'
                : 'far fa-star star_icon'
            "
    ></i>
    <i
      :class="
              el >= 3
                ? 'fas fa-star star_icon yell'
                : 'far fa-star star_icon'
            "
    ></i>
    <i
      :class="
              el>= 4
                ? 'fas fa-star star_icon yell'
                : 'far fa-star star_icon'
            "
    ></i>
    <i
      :class="
              el === 5
                ? 'fas fa-star star_icon yell'
                : 'far fa-star star_icon'"
    ></i>
  </div>
</template>

<script>
export default {
  props: {
    el: Number
  }
};
</script>

<style lang="scss">
.star_div {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 3px 0;
  .star_icon {
    margin-top: 2px;
    font-size: 0.5rem;
    color: $s_grey;
  }
  .yell {
    color: gold;
  }
}
</style>