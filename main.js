const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            premium: true

        }
    },
    // computed: {
    //     title() {
    //         return this.brand + ' ' + this.product + (this.onSale ? " On Sale" : "")
    //     },
    //     image() {
    //         return this.variants[this.selectedVariant].image
    //     },
    //     inStock() {
    //         return this.variants[this.selectedVariant].quantity
    //     }
    // },

    // methods: {
    //     addToCart() {
    //         this.cart += 1
    //     },
    //     updateImage(variantImage) {
    //         this.image = variantImage
    //     },
    //     updateVariant(index) {
    //         this.selectedVariant = index;
    //     }
    // }
})