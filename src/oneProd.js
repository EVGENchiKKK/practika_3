function getProductId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

const productId = getProductId();

fetch(`https://dummyjson.com/products/${productId}`)
    .then(response => response.json())
    .then(product => {
        document.getElementById('prodContent').innerHTML = `
            <div class="oneProd">
                <div class="imgOneProd">
                    <img src="${product.thumbnail}" alt="${product.title}"/>
                </div>
                <div class="textOneProd">
                    <h2>${product.title}</h2>
                    <hr/>
                    <h3>$${product.price}</h3>
                    <hr/>
                    <h3>Категория товара:</h3>
                    <p>${product.category}</p>
                    <hr/>
                    <h3>Рейтинг товара:</h3>
                    <p>${product.rating}</p>
                    <hr/>
                    <h3>Описание</h3>
                    <p>${product.description}</p>
                </div>
            </div>
        `
    })