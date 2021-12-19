const app = Vue.createApp({
   data() {
      return {
         cart: 0,
         product: 'Socks',
         brand: 'Vue Mastery',
         selected: 0,
         onSale: true,
         details: ['50% cotton', '30% wool', '20% polyester'],
         variants: [
            {
               id: 2234,
               quantity: 50,
               color: 'green',
               image: './assets/images/socks_green.jpg',
            },
            {
               id: 2235,
               color: 'blue',
               quantity: 0,
               image: './assets/images/socks_blue.jpg',
            },
         ],
      };
   },
   methods: {
      addToCart() {
         this.cart += 1;
      },
      updateVariant(index) {
         this.selected = index;
      },
   },
   computed: {
      title() {
         return this.brand + ' ' + this.product + ' is on sale';
      },
      image() {
         return this.variants[this.selected].image;
      },
      inStock() {
         return this.variants[this.selected].quantity;
      },
   },
});
