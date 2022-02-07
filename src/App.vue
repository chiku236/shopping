<template>
  <div>
    <header>
      <!-- <button v-on:click="navigateTo('products')">View products</button>
      {{cart.length}} in cart -->
      <!-- <button  v-on:click="navigateTo('cart')">View Cart</button> -->
      <h2 v-if="$route.path === '/'">Products</h2>
      <h2 v-if="$route.path === '/cart'">Your Cart</h2>
      <div class="icons">
        <i class="fas fa-user-circle"></i>
        <router-link to="/cart" class="btn" @test="test">
          <i class="fas fa-shopping-cart"></i>
        </router-link>
      </div>
    </header>

    <!-- <div v-if="page === 'cart'">
      <Cart v-on:removeItemFromCart="removeItemFromCart" :cart="cart" />
    </div>

    <div v-if="page === 'products'">
      <Products v-on:addItemToCart="addItemToCart" />
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Products from "./views/Products.vue";
import Cart from "./views/Cart.vue";
import axios from "axios";
import store, { mutations } from "./store";

export default {
  name: "App",
  data() {
    return {};
  },

  methods: {
    test(data) {
      console.log(data);
    },
    // addItemToCart(product) {
    //   const itemIndex = this.cart.findIndex((item) => item.id === product.id);

    //   if (itemIndex > -1) {
    //     this.cart[itemIndex].count += 1;
    //   } else {
    //     const p = {
    //       ...product,
    //       count: 1,
    //     };
    //     this.cart.push(p);
    //   }
    //   //Save
    //   console.log(this.cart);
    // },
    // removeItemFromCart(product) {
    //   this.cart.splice(this.cart.indexOf(product), 1);
    // },
    // navigateTo(page) {
    //   this.page = page;
    // },
  },
  beforeCreate() {
    mutations.getProducts();
    console.log(store)
    // this.getProducts();
  },

  components: { Products, Cart },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: grey;
  padding: 10px;
}
i {
  height: 50px;
}
.photo {
  width: 100%;
  height: auto;
  color-adjust: none;
}
.cost {
  color: orangered;
  text-decoration: cadetblue;
  grid-template-columns: 1fr 1fr;
}
.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-left: 2cm;
  padding-top: 2cm;
}
.products button {
  padding: 6px;
  background-color: blue;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
}

header {
  /* border: 21px,solid,grey; */
  height: 60px;
  box-shadow: 2px 2px 5px blue;
  background-color: navajowhite;
  text-align: right;
  font-size: 30px;
  padding-top: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
header h2 {
  margin: 0;
}
header .btn {
  padding: 10px;
  border: none;
  cursor: pointer;
  color: blue;

  text-decoration: none;
}
.card {
  position: relative;
  background-color: whitesmoke;
  width: 300px;
  height: 430px;
  border-radius: 10px;
  image-orientation: inherit;
  box-shadow: black;
  text-decoration: lightseagreen;
  text-align: center;
}
img {
  float: center;
  width: auto;
  height: auto;
  object-fit: cover;
}
#block_container {
  display: flex;
  justify-content: space-evenly;
}
#bloc1 {
  padding-left: 1cm;
}
#bloc2 {
  align-items: center;
}
</style>