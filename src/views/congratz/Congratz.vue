<template>
  <div class="home">
    <div class="congratz_box">
      <h3>Gracias por registrarse.</h3>
      <h3>Redirigiendo en {}</h3>
      <div class="route_box">
        <button>Home</button>
        <button>Iniciar Sesión</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.congratz_box {
  display: flex;
  flex-direction: column;
  .route_box {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
}
</style>