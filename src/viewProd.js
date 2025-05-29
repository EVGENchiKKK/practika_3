const adressProd = 'https://dummyjson.com/products/';

fetch(adressProd)
    .then(response => response.json())
    .then(data => {
        let prodItem = '';
        
        data.products.forEach(product => {
            prodItem += `
                <div class="itemProd">
                    <a href="product.html?id=${product.id}">
                        <div class="imgProd">
                            <img src="${product.thumbnail}" alt="${product.title}"/>
                        </div>
                        <div class="textItemProd">
                            <div class="textProd">
                                <h3>${product.title}</h3>
                                <p>$${product.price}</p>
                            </div>
                            <button><img src="./image/icons8-right-100.png"/></button>
                        </div>
                    </a>
                </div>
            `;
        });
        document.getElementById('spisProd').innerHTML = prodItem;
    })