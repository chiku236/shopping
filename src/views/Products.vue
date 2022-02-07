<template>
  <div>
    <div class="products">
      <div class="card" v-for="(product, index) in products" :key="index">
        <h3>{{ product.name }}</h3>
        <img class="photo" :src="product.image" />
        <h5>
          <a href="">{{ product.about }}</a>
        </h5>
        <div id="block_container">
          <div class="cost" id="bloc1">{{ product.cost }}</div>
          <button
            class="button"
            id="bloc2"
            v-on:click="addItemToCart(product)"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store, { mutations } from "../store";

export default {
  name: "Products",
  data() {
    return {};
  },

  methods: {
    addItemToCart(product) {
      mutations.addToCart(product);
    },
  },
  computed: {
    products() {
      return store.products;
    },
  },
  watch: {
    // storeProducts(){
    //   this.products = [...store.products]
    // }
  },
  mounted() {
    // console.log(this.products)
  },
};
</script>

<style>
</style>