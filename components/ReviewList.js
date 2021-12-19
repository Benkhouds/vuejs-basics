app.component('review-list', {
   props: {
      reviews: {
         type: Array,
         required: true,
      },
   },
   template:
      /* html */
      `
      <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
          <li v-for="(review, index) in reviews">
            {{review.name }} gave this {{review.rating}} stars
            and he/she {{review.recommend}} this product.
            <br/>
            "{{review.review}}"
          </li>
        </ul>
      </div>
    `,
});
