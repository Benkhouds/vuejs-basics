const app = Vue.createApp({
   data() {
      return {
         product: 'Socks',
         image: './assets/images/socks_blue.jpg',
         inStock: true,
         details: ['50% cotton', '30% wool', '20% polyester'],
         sizes: [39, 40, 41, 42, 43, 44, 45, 46],
      };
   },
});
