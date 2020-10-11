<template>
  <div class="corona_box">
    <h3
      class="corona_text"
    >Estamos sufiendo retrasos y cancelaciones en algunos pedidos por el Coronavirus</h3>
    <h3 class="corona_text">Click aquí para información detallada por país ></h3>
  </div>
</template>

<style lang="scss">
.corona_box {
  width: 98%;
  padding: 8px 0;
  min-height: 40px;
  margin-bottom: 5px;
  cursor: pointer;
  padding-left: 3px;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  .corona_text {
    font-size: 0.9rem;
    width: 100%;
    text-align: left;
    color: $corona;
  }
}
.corona_box:hover {
  background-color: $corona;
  transition: 0.2s ease-in-out;
}
.corona_box:hover > .corona_text {
  color: $_white;
  transition: 0.2s ease-in-out;
}
</style>