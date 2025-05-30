const adressProd = 'https://dummyjson.com/products/'; 

fetch(adressProd)
  .then(response => response.json())
  .then(data => {
    let prodCommentItem = '';

    data.products.forEach(product => {
      product.reviews.forEach(review => {
        prodCommentItem += `
          <div class="itemCommentProd">
            <a href="product.html?id=${product.id}">
              <div class="textProd">
                <h3>${review.reviewerName}</h3>
                <h4>${review.reviewerEmail}</h4>
                <p>${review.comment}</p>
              </div>
              <div class="raitingProd">
                <h3>Рейтинг</h3>
                <p>${review.rating}</p>
              </div>
            </a>
          </div>
        `;
      });
    });

    document.getElementById('commentResult').innerHTML = prodCommentItem;
  })
  .catch(error => {
    console.error('Ошибка при загрузке данных:', error);
  });