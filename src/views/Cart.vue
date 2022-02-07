<template>
  <div>
    <div class="products">
      <div class="card" v-for="(product, index) in cart" :key="index">
        <h3>{{ product.name }}</h3>
        <img :src="product.image" />
        <div>{{ product.cost }}</div>
        <p>Count: {{ product.count }}</p>
        <!-- <button v-on:click="removeItemFromCart(product)">Remove from cart</button> -->
        <button class="increment-item">+</button>
        <button class="decrement-item">-</button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
//  Try the increment and decrement on your own!
export default {
  name: "Cart",
  data() {
    return {
    };
  },
  methods: {
    removeItemFromCart(product) {},
  },
  computed: {
    cart() {
      return store.cart;
    },
  },
};
/* 
    IF Product[id] IN Cart:
        Product[id].count++;
    ELSE
        Cart.push(Product)
*/
</script>

<style>
</style> 