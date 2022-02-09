<template>
  <div>
    <div class="products">
      <div class="" v-for="(product, index) in cart" :key="index">
        <h2>{{ product.name }}</h2>
        <img :src="product.image" />
        <div>{{ product.cost }}</div>
        <p>count: {{ product.count }}</p>
         <button v-on:click="removeItem(product.id)">Remove</button> 
        
      </div>
    </div>
  </div>
</template>

<script>
import store, {mutations} from "../store";

export default {
  name: "Cart",
  data() {
    return {
    };
  },
  methods: {
    removeItemFromCart(product) {},
    removeItem: mutations.removeItem
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