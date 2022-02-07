import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Products',
        component: Products
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router