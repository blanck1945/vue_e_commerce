<template>
  <div class="home">
    <div class="login_div">
      <div class="left_div">
        <h2 class="login_header">Iniciar Sesión</h2>
        <h3 class="login_fo">¿Has olvidado la contraseña?</h3>
        <input
          type="email"
          class="input_field"
          v-model="loginUser.loginName"
          name="email"
          placeholder="E-mail"
          id
        />
        <input
          :type="showPass1 ? 'text' : 'password'"
          name="password"
          placeholder="Contraseña de Book Depository"
          id
          v-model="loginUser.loginPass"
          class="input_field"
        />
        <div class="check_box">
          <input type="checkbox" name="contraseña" @click="toogleCheck(1)" class="input_check" />
          <label for="contraseña" class="check_label">Mostrar contraseña</label>
        </div>
        <div class="check_box">
          <input type="checkbox" name="recuerdame" class="input_check" />
          <label for="recuerdame" class="check_label">Recuerdame</label>
        </div>
        <button class="search_btn" @click="loginUserFunc">Iniciar sesión</button>
      </div>
      <div class="left_div">
        <h2 class="login_header">Regístrate</h2>
        <input
          type="text"
          v-model="registerUser.registerName"
          placeholder="Nombre"
          name="nombre"
          class="input_field"
        />
        <input
          type="email"
          v-model="registerUser.registerEmail"
          placeholder="Correo electrónico"
          name="email"
          class="input_field"
        />
        <input
          :type="showPass2 ? 'text' : 'password'"
          placeholder="Contraseña"
          name="password"
          v-model="registerUser.registerPass"
          class="input_field"
        />
        <h5 class="reminder">La contraseña debe tener 6 caracteres como mínimo.</h5>
        <div class="check_box">
          <input type="checkbox" name="contraseña" @click="toogleCheck(2)" class="input_check" />
          <label for="contraseña" class="check_label">Mostrar contraseña</label>
        </div>
        <button class="search_btn" @click="registerUserFunc">Crea tu cuenta</button>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import { url, book1 } from "../../utils/url";
export default {
  data() {
    return {
      showPass1: false,
      showPass2: false,
      registerUser: {
        registerName: "",
        registerEmail: "",
        registerPass: "",
      },
      loginUser: {
        loginName: "",
        loginPass: "",
      },
    };
  },
  computed: {
    url() {
      return url;
    },
  },
  methods: {
    toogleCheck(num) {
      if (num === 1) {
        this.showPass1 = !this.showPass1;
      } else {
        this.showPass2 = !this.showPass2;
      }
    },
    registerUserFunc() {
      const { registerName, registerEmail, registerPass } = this.registerUser;
      const newUser = {
        username: registerName,
        email: registerEmail,
        password: registerPass,
      };

      Axios({
        method: "post",
        data: newUser,
        url: url.auth + "/add",
      })
        .then(() => {
          this.$router.push("/congratz");
        })
        .catch((err) => console.log(err.response.data));
    },
    loginUserFunc() {
      /*const { loginName, loginPass } = this.loginUser;
      const user = {
        username: loginName,
        password: loginPass,
      };*/
      console.log("using this route");
      Axios({
        method: "post",
        data: book1,
        url: url.book + "/add",
      })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.response));
    },
  },
};
</script>


<style lang="scss">
@import "./Login_Page.scss";
</style>