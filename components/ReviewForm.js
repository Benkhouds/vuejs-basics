app.component('review-form', {
   template:
      /*html*/
      `
    <form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a review</h3>

      <label for="name">Name:</label>
      <input id="name" v-model="name">
    
      <label for="review">Review:</label>      
      <textarea id="review" v-model="text"></textarea>

      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
         <label for="recommend">Would you recommend this product ?</label>
      <select  id="recommend" v-model="recommend">
        <option>yes</option>
        <option>no</option>
      </select>
  
      <input class="button" type="submit" value="Submit">  
    
    </form>
  `,
   data() {
      return {
         name: '',
         text: '',
         recommend: '',
         rating: null,
      };
   },
   methods: {
      onSubmit() {
         if (
            this.name === '' ||
            this.text === '' ||
            this.rating === null ||
            this.recommend === ''
         ) {
            alert('Review is incomplete. Please fill out every field.');
            return;
         }

         const review = {
            name: this.name,
            text: this.text,
            rating: this.rating,
            recommend:
               this.recommend === 'yes' ? 'recommended ' : "didn't recommend",
         };
         this.$emit('review-submitted', review);
         this.name = '';
         this.text = '';
         this.recommend = '';
         this.rating = null;
      },
   },
});
