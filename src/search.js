function search(text) {
    fetch(`https://dummyjson.com/products/search?q=${text}`)
        .then(response => response.json())
        .then(data => {
            let resultSearch = '';
        
            data.products.forEach(product => {
                resultSearch += `
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
            document.getElementById('resultSearch').innerHTML = resultSearch;
        })
}

const inpSearch = document.getElementById('inpSearch');

document.getElementById('btnSearch').addEventListener('click', () => {
    search(inpSearch.value);
});