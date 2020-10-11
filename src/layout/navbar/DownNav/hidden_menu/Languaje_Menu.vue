<template>
  <div :class="hover ? 'lenguaje_box dis' : 'lenguaje_box'">
    <div class="dis_up">
      <h3 class="up_text">Idiomas</h3>
      <i class="fas fa-times"></i>
    </div>
    <div class="option_dis">
      <h4 class="option_text">Inglés (English)</h4>
      <h4 class="option_text">Español</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hover: Boolean
  }
};
</script>

<style lang="scss">
.lenguaje_box {
  position: absolute;
  top: 100px;
  height: 60px;
  border-bottom: 1px solid $m_grey;
  width: 90px;
  border-top: 2px solid $_book;
  background-color: white;
  visibility: hidden;
  .dis_up {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4px;
    padding: 0 8px;
    .up_text {
      font-weight: 400;
      line-height: 15px;
      border-bottom: 1px solid $m_grey;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .option_dis {
    display: flex;
    flex-direction: column;
    padding: 4px 0;
    .option_text {
      font-weight: 300;
      margin: 2px 0;
      width: 100%;
      text-align: left;
      padding-left: 8px;
      height: 12px;
    }
    .option_text:hover {
      background-color: $_white;
      transition: 0.2s ease-in-out;
    }
  }
}
.dis {
  visibility: visible;
}
</style>