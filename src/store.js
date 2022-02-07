import Vue from "vue";
import axios from "axios";

const store = Vue.observable({
    cart: [],
    products: []
});

export const mutations = {
    async getProducts() {
        try {
            const response = await axios.get("http://localhost:3000/product");
            const { data } = response;
            store.products = [...data];
        }
        catch (error) { }
    },
    addToCart(product) {
        const { id } = product;
        const isProductInCart = store.cart.findIndex(p => p.id === id);
        if (isProductInCart > -1)
            store.cart[isProductInCart].count++
        else
            store.cart.push({ ...product, count: 1 })
    },
    removeFromCart(product) {
        const { id } = product;
        const isProductInCart = store.cart.findIndex(p => p.id === id);
        if (isProductInCart > -1) {
            if (store.cart[isProductInCart].count > 1) store.cart[isProductInCart].count--
            else store.cart.splice(isProductInCart, 1)
        }
    }
}
export default store;