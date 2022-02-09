<template>
  <div>
    <div class="products">
      <div class="card" v-for="(product, index) in products" :key="index">
        <img class="photo" :src="product.image" />      
          <h3>{{ product.name }}</h3>
          <div class="block_container">
          <div class="cost" id="bloc1">{{ product.cost }}</div>
          <h4 class="glow" id="bloc2">{{product.off}}</h4>
          </div>
        <h5>
          <a href="">{{ product.about }}</a>
        </h5>

        <div class="rating" ><h4>{{ product.rating}}<i class="fas fa-star"></i></h4></div>
          
          <button
            class="button" v-on:click="addItemToCart(product)">
            Add to cart
          </button>
          
        
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