const productContainer = document.querySelector('#data-product');

const dataProduct = [
  {
    "product_id": "P001",
    "name": "Laptop ASUS ZenBook 14",
    "category": "Electronics",
    "price": 9999000,
    "stock": 50,
    "description": "14-inch Full HD laptop with Intel Core i7 processor, 16GB RAM, and 512GB SSD storage.",
    "image": "https://asset.kompas.com/crops/YGIETGqNp5QrqEH197htRWNAol4=/0x100:600x500/750x500/data/photo/2021/03/28/6060134be935d.jpg"
  },
  {
    "product_id": "P002",
    "name": "Samsung Galaxy S20",
    "category": "Electronics",
    "price": 15087000,
    "stock": 30,
    "description": "6.2-inch Quad HD+ smartphone with 64MP camera, 128GB storage, and 5G connectivity.",
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc2546-1581438664.jpeg"
  },
  {
    "product_id": "P003",
    "name": "Nike Air Zoom Pegasus 37",
    "category": "Fashion",
    "price": 462769,
    "stock": 100,
    "description": "Men's running shoes with Nike React foam, Zoom Air units, and lightweight design.",
    "image": "https://www.ncrsport.com/img/storage/large/BQ9646-011-1.jpg?2024-03-01%2007:23:06"
  },
  {
    "product_id": "P004",
    "name": "Canon EOS Rebel T7i",
    "category": "Electronics",
    "price": 12619226,
    "stock": 20,
    "description": "24.2 Megapixel DSLR camera with DIGIC 7 Image Processor and built-in Wi-Fi, NFC, and Bluetooth.",
    "image" : "https://images-cdn.ubuy.co.id/635fdb4b499c6f51b13693f4-canon-eos-rebel-t7i-dslr-camera-with.jpg"
  },
  {
    "product_id": "P005",
    "name": "Apple Watch Series 6",
    "category": "Electronics",
    "price": 5729071,
    "stock": 40,
    "description": "GPS + Cellular smartwatch with Always-On Retina display, ECG app, and water resistance.",
    "image" : "https://cdn.eraspace.com/media/catalog/product/a/w/aws-6-44mm-gps-blue-deep-navy-sport-band-1_2.jpg"
  },
  {
    "product_id": "P006",
    "name": "Levi's Men's 505 Regular Fit Jeans",
    "category": "Fashion",
    "price": 989910,
    "stock": 80,
    "description": "Classic straight-leg jeans made from 100% cotton denim.",
    "image" : "https://levi.co.id/cdn/shop/products/levis-mens-505-regular-jeans-005052836_01_Front_3558X2000.progressive.jpg?v=1705686522"
  },
  {
    "product_id": "P007",
    "name": "Sony WH-1000XM4 Wireless Headphones",
    "category": "Electronics",
    "price": 3472102,
    "stock": 25,
    "description": "Noise-canceling headphones with Dual Noise Sensor technology and up to 30 hours of battery life.",
    "image" : "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-8006356/sony_-sony-hav--sony-wh-1000xm4-wireless-noise-canceling-headphones_full09.jpg"
  },
  {
    "product_id": "P008",
    "name": "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    "category": "Home & Kitchen",
    "price": 638000,
    "stock": 60,
    "description": "7-in-1 multi-functional cooker: pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and warmer.",
    "image" : "https://myhartono.com/images/detailed/365/7IN1PRESSURECOOKER-r.jpg"
  },
  {
    "product_id": "P009",
    "name": "Fitbit Charge 4 Fitness Tracker",
    "category": "Electronics",
    "price": 2299000,
    "stock": 35,
    "description": "Water-resistant fitness tracker with built-in GPS, heart rate monitor, and sleep tracking.",
    "image" : "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//108/MTA-68901695/oem_oem_full01.jpg"
  },
  {
    "product_id": "P010",
    "name": "Amazon Echo Dot (4th Gen)",
    "category": "Electronics",
    "price": 989436,
    "stock": 50,
    "description": "Smart speaker with Alexa, compact design, and improved sound quality.",
    "image" : "https://images.tokopedia.net/img/cache/700/OJWluG/2023/7/15/02fff453-fb76-45fb-806d-6fb271394249.jpg.webp?ect=4g"
  }
]

dataProduct.forEach((data) => {
  const productElement = document.createElement('div');
  productElement.classList.add('col');
  productElement.innerHTML = `
            <div class="card h-auto pl-2">
              <div class="d-flex align-items-center  w-100">
                <div class="w-25">
                  <img class=" card-img-top w-100 rounded-4" src="${data.image}" alt="">
                </div>
                <div class="card-body w-50">
                  <h5 class="fw-bolder">${data.name}</h5>
                  <p class="card-text">${data.description}</p>
                  <p class="card-text">Rp. ${data.price}</p>
                  <button class="btn btn-outline-primary float-right w-50">Detail Product</button>
                </div>
              </div>
            </div>
        `;
  productContainer.appendChild(productElement);
})
