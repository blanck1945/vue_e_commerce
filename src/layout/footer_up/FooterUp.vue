<template>
  <div class="footer_up">
    <div class="footer_email">
      <img
        src="https://d3ogvdx946i4sr.cloudfront.net/assets/v2.19.13/img/newsletter-icon.svg"
        alt="mail"
        class="email_img"
      />
      <div class="footer_text">
        <h4 class="text_he">Learn about new offers and get more</h4>
        <h4 class="text_he">deals by joining our newsletter</h4>
      </div>
    </div>
    <div class="footer_btn">
      <input class="ad_btn fix fix_input" type="text" placeholder="Correo electrónico" />
      <button class="search_btn fix">Sign up now</button>
    </div>
  </div>
</template>


<style lang="scss">
.footer_up {
  height: 45px;
  display: flex;
  margin-top: 4px;
  width: 50%;
  align-items: center;
  border-bottom: 0.5px solid $s_grey;
  justify-content: center;
  padding-bottom: 5px;
  .footer_email {
    display: flex;
    min-width: 40%;
    .email_img {
      width: 25px;
    }
    .footer_text {
      font-size: 0.5rem;
      color: $_black;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      margin-left: 3px;
      .text_he {
        font-weight: 300;
      }
    }
  }
  .footer_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    .fix {
      min-width: 60%;
    }
    .fix_input {
      padding-left: 4px;
      cursor: text;
    }
    .fix_input::placeholder {
      text-align: center;
    }
    .fix_input:hover {
      border: 0.5px solid $s_grey;
    }
    .fix_input:focus {
      border: 0.5px solid $_black;
    }
  }
}
</style>