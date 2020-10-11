<template>
  <div class="home">
    <div class="aside_box">
      <AsideComp
        :label="true"
        label_text="Graphic Novels Store"
        :footer="true"
        footer_text="Your favorite comic book series"
        :img="image.img1"
      />
      <AsideComp :footer="true" footer_text="Black Lives Matter" :img="image.img2" />
      <AsideComp
        :label="true"
        label_text="10% Descuento en Libros en Español"
        :footer="true"
        footer_text="Codigo 10% Descuento - REGALO10"
        :img="image.img3"
      />
      <AsideComp
        :label="true"
        label_text="¡Manga!"
        :footer="true"
        footer_text="Hasta 30% de descuento!"
        :img="image.img4"
      />
      <AsideComp
        :label="true"
        label_text="Libros Infantiles"
        :footer="true"
        footer_text="Hasta -30% de descuento"
        :img="image.img5"
      />
      <AsideComp
        :label="true"
        label_text="Quedate en casa"
        :footer="true"
        footer_text="Quedate en casa - Libros"
        :img="image.img6"
      />
      <AsideComp :footer="true" footer_text="Technology and Politics" :img="image.img7" />
      <AsideText label="Best Ever Book Lists" :optionArr="options[0]" />
      <AsideText label="Popular Pages" :optionArr="options[1]" />
      <AsideText
        label="Bestsellers by Language"
        :img="true"
        :aside_img="image.img8"
        :optionArr="options[2]"
      />
      <AsideText label="Learning English" :optionArr="options[3]" />
    </div>
    <div class="product_box">
      <div class="product_div"></div>
      <HomeHeader />
      <CoronaVirus />
      <BookCarro
        label="Up to 40% off these bestsellers"
        :header_down="true"
        label_down="Click the banner above for more great deals"
      />
      <BookCarro label="Related to items you´ve viewwed" :dataArr="userArr" />
    </div>
  </div>
</template>

<script>
import AsideComp from "../components/aside_box/Aside_Comp";
import AsideText from "../components/aside_box/Aside_Text";
import BookCarro from "../components/book_carro/Book_Carro";
import CoronaVirus from "../components/corona_virus/Corona_Virus";
import HomeHeader from "../components/home_header/Home_Header";
import { imgObj } from "../components/aside_box/imag_arr";
import { Options } from "../components/aside_box/optionsArr";
//import { db } from "../main";
import Axios from "axios";

export default {
  name: "Home",
  components: {
    AsideComp,
    AsideText,
    BookCarro,
    CoronaVirus,
    HomeHeader,
  },
  data() {
    return {
      image: imgObj,
      options: Options,
      data: [],
    };
  },
  methods: {
    axiosDataFunc() {
      this.$store.dispatch("fetchUserData");
    },
    getDB() {
      if (this.dataArr.length === 0) {
        console.log("using this route");
        Axios({
          method: "get",
          url: "https://node-db-tutorial1945.herokuapp.com/api/books/all",
        })
          .then((res) => this.$store.dispatch("storeData", res.data))
          .catch((err) => console.log(err));
      } else {
        return "Data in State";
      }
      /*db.collection("products")
        .get()
        .then((res) => {
          res.docs.forEach((doc) => this.data.push(doc.data()));
          this.$store.dispatch("storeData", this.data);
        });*/
    },
  },
  computed: {
    axiosData() {
      return this.$store.state.axiosData;
    },
    dataArr() {
      return this.$store.state.products;
    },
    userArr() {
      return this.$store.state.userArr;
    },
  },
  mounted() {
    this.getDB();
    console.log(this.dataArr);
  },
};
</script>

<style lang="scss">
.home {
  width: 80%;
  background-color: $_white;
  min-height: 20vh;
  margin: auto;
  margin-top: 2px;
  display: flex;
  .aside_box {
    width: 25%;
    display: flex;
    flex-direction: column;
    min-height: 70vh;
    .filter_box {
      width: 80%;
      display: flex;
      flex-direction: column;
      min-height: 20px;
      margin: 9px 0;
    }
  }
  .product_box {
    width: 90%;
    margin-top: 3px;
    margin-left: 5px;
    min-height: 220px;
    justify-content: space-evenly;
  }
}
</style>
