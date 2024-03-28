const productContainer = document.querySelector('#data-product');
const path = '../../productapi.json';

let products = fetch(path)
  .then(res => res.json())
  .then(data => {
    products = data;
    console.log(products)
    showProducts(products);
  })
  .catch(error => {
    console.error('Terjadi kesalahan:', error);
  });

function showProducts(products) {
  productContainer.innerHTML = '';
  products.forEach(product => {

    const productElement = document.createElement('div');
    // productElement.classList.add('card');
    productElement.classList.add('col');
    // productElement.classList.add('p-3');
    // productElement.classList.add('m-1');
    // productElement.classList.add('h-25');

    productElement.innerHTML = `
            <div class="card h-auto pl-2">
              <div class="d-flex align-items-center  w-100">
                <div class="w-25">
                  <img class=" card-img-top w-100 rounded-4" src="${product.image}" alt="">
                </div>
                <div class="card-body w-50">
                  <h5 class="fw-bolder">${product.name}</h5>
                  <p class="card-text">${product.description}</p>
                  <p class="card-text">Rp. ${product.price}</p>
                  <button class="btn btn-outline-primary float-right w-50">Detail Product</button>
                </div>
              </div>
            </div>
        `;
    productContainer.appendChild(productElement);
  });
}
