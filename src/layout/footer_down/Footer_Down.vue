<template>
  <div class="footer_down">
    <div class="social_div">
      <h3 class="social_text">Siguenos</h3>
      <div class="icon_div">
        <i class="fab fa-facebook-f icon_so fb"></i>
        <i class="fab fa-twitter icon_so tw"></i>
        <i class="fab fa-pinterest-p icon_so pinterest"></i>
        <i class="fab fa-instagram icon_so ins"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.footer_down {
  width: 30%;
  height: 45px;
  display: flex;
  margin-bottom: 8px;
  align-items: center;
  justify-content: space-evenly;
  .social_div {
    display: flex;
    flex-direction: column;
    .social_text {
      font-size: 0.5rem;
      color: $m_grey;
    }
    .icon_div {
      display: flex;
      margin-top: 7px;
      .icon_so {
        color: $m_grey;
        margin: 0 7px;
        cursor: pointer;
        font-size: 0.7rem;
        transition: 0.2s ease-in-out;
      }
      .fb:hover {
        color: $facebook;
      }
      .tw:hover {
        color: $tw;
      }
      .pinterest:hover {
        color: $pinterest;
      }
      .ins:hover {
        color: $instagram;
      }
    }
  }
}
</style>