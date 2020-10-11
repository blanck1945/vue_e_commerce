<template>
  <div class="home home_add">
    <h3 class="add_text">Add Book</h3>
    <form class="add_form" @submit.prevent="postBook">
      <AddInput
        addText="Product Name"
        @input="
          (value) => {
            product.product_name = value;
          }
        "
        :value="product.product_name"
      />
      <AddInput
        addText="Product Volume"
        @input="
          (value) => {
            product.product_volume = value;
          }
        "
        :value="product.product_volume"
      />
      <div class="add_input_box">
        <label class="add_text">Product Price</label>
        <input
          class="add_input"
          type="text"
          placeholder="Product Price"
          v-model="product.product_price"
        />
      </div>
      <div class="add_input_box">
        <label class="add_text">Product Author</label>
        <input
          class="add_input"
          type="text"
          placeholder="Product Author"
          v-model="product.product_author"
        />
      </div>
      <div class="add_input_box">
        <label class="add_text">Product Img</label>
        <input
          class="add_input"
          type="text"
          placeholder="Product Image"
          v-model="product.product_img"
        />
      </div>
      <div class="add_input_box">
        <label class="add_text">Product Format</label>
        <input
          class="add_input"
          type="text"
          placeholder="Product Format"
          v-model="product.product_format"
        />
      </div>
      <div class="add_input_box">
        <label class="add_text">Product Img</label>
        <input
          class="add_input"
          type="text"
          placeholder="Product Image"
          v-model="product.product_img"
        />
      </div>
      <div class="add_input_box">
        <label class="add_text">Product Pages</label>
        <input
          class="add_input"
          type="text"
          placeholder="Product Pages"
          v-model="product.product_pages"
        />
      </div>
      <div class="add_input_box">
        <label class="add_text">Product Publish Day</label>
        <input
          class="add_input"
          type="text"
          placeholder="Product Publish Day"
          v-model="product.product_publish_day"
        />
      </div>
      <div class="add_input_box">
        <label class="add_text">Product Editor</label>
        <input
          class="add_input"
          type="text"
          placeholder="Product Editor"
          v-model="product.product_editor"
        />
      </div>
      <div class="add_input_box">
        <label class="add_text">Product Publish Location</label>
        <input
          class="add_input"
          type="text"
          placeholder="Product Publish Locations"
          v-model="product.product_publish_location"
        />
      </div>

      <div class="add_input_box">
        <label class="add_text">Languaje</label>
        <select
          name="languaje"
          id
          v-model="product.product_languaje"
          class="add_input"
        >
          <option value="español">Español</option>
          <option value="ingles">Ingles</option>
        </select>
      </div>
      <div class="add_input_box">
        <label class="add_text">ISBN10</label>
        <input
          class="add_input"
          type="text"
          placeholder="ISBN10"
          v-model="product.product_ISBN10"
        />
      </div>
      <div class="add_input_box">
        <label class="add_text">ISBN13</label>
        <input
          class="add_input"
          type="text"
          placeholder="ISBN13"
          v-model="product.product_ISBN13"
        />
      </div>
      <div class="add_input_box">
        <label class="add_text">Seller</label>
        <select
          name="seller"
          id
          v-model="product.product_seller"
          class="add_input"
        >
          <option v-for="el in sellerId" :key="el" :value="el">{{ el }}</option>
        </select>
      </div>
      <div class="add_input_box">
        <label class="add_text">Category</label>
        <select name="categories" id class="add_input">
          <option value="yuri">Yuri</option>
        </select>
      </div>
      <div class="add_input_box area">
        <label class="add_text">Description</label>
        <textarea
          name="product_desc"
          class="text_area add_input"
          v-model="product.product_desc"
        ></textarea>
      </div>
      <button class="search_btn">Post</button>
    </form>
  </div>
</template>

<script>
import { sellerId, ProductModel } from "../../utils/models";
import AddInput from "./add_input/Add_Input";
export default {
  components: {
    AddInput,
  },
  data() {
    return {
      product: ProductModel,
      sellerId: sellerId,
    };
  },
  methods: {
    postBook() {
      const data = {
        ...this.product,
        product_add: false,
        product_rank: 0,
        product_selling_rank: 0,
        product_similar: [],
        product_percentage: 0,
        product_total_sell: 0,
      };
      console.log(data);
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
@import "./Add_Book.scss";
</style>
