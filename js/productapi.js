const productList = document.querySelector('.product-list');
const url = 'https://crudcrud.com/api/ae7176ab2e374cef96b9d3eab4025666/product';

let products = fetch(url)
    .then(res => res.json())
    .then(data => {
        products = data;
        // Lakukan sesuatu dengan data produk
        console.log(products)
        showProducts(products);
    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });


function showProducts(products) {
    productList.innerHTML = '';
    products.forEach(product => {


        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img class="product-image" src="${product.image}" alt="">
            <h2 class="product-title">${product.name}</h2>
            <p class="product-description">${product.description}</p>
            <p class="product-price">Rp. ${product.price}</p>
            <button class="btn-buy">Beli</button>
        `;
        productList.appendChild(productElement);
    });
}