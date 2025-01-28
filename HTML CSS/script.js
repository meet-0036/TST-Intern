"use strict";

const product1 = {
  id: 1,
  name: "Casual T-Shirt",
  img: "assets/black.png ",
  price: 19.99,
};

const product2 = {
  id: 2,
  name: "Denim Jeans",
  img: "assets/white.png ",
  price: 49.99,
};

const product3 = {
  id: 3,
  name: "Formal Shirt",
  img: "assets/black.png ",
  price: 29.99,
};

const product4 = {
  id: 4,
  name: "Chinos",
  img: "assets/white.png ",
  price: 39.99,
};

const product5 = {
  id: 5,
  name: "Hoodie",
  img: "assets/black.png",
  price: 59.99,
};

const product6 = {
  id: 6,
  name: "Leather Jacket",
  img: "assets/white.png ",
  price: 99.99,
};

const product7 = {
  id: 7,
  name: "Polo Shirt",
  img: "assets/black.png",
  price: 24.99,
};

const product8 = {
  id: 8,
  name: "Sweatpants",
  img: "assets/white.png",
  price: 34.99,
};

const product9 = {
  id: 9,
  name: "Winter Coat",
  img: "assets/black.png ",
  price: 119.99,
};

const product10 = {
  id: 10,
  name: "Shorts",
  img: "assets/white.png ",
  price: 29.99,
};

const product11 = {
  id: 11,
  name: "Summer Dress",
  img: "assets/black.png ",
  price: 45.99,
};

const product12 = {
  id: 12,
  name: "Blazer",
  img: "assets/white.png ",
  price: 79.99,
};

const product13 = {
  id: 13,
  name: "Cargo Pants",
  img: "assets/white.png ",
  price: 44.99,
};

const product14 = {
  id: 14,
  name: "Tracksuit",
  img: "assets/black.png",
  price: 69.99,
};

const product15 = {
  id: 15,
  name: "Cardigan",
  img: "assets/white.png",
  price: 55.99,
};

const products = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
];

// Elements
const searchBtn = document.querySelector(".btn--search");
const homeBtn = document.querySelector(".btn--home");
const cartBtn = document.querySelector(".btn--cart");
const addToCartBtn = document.querySelector(".btn--addToCart");
const contectUsBtn = document.querySelector(".btn--ContectUs");
const productCard = document.querySelector(".product-card");
const productList = document.querySelector(".product-list");
const input = document.querySelector(".search-input");

const cartProducts = [];

// functions
const displayCard = function (product) {
  const markup = `
    <div class="product-card" data-id=${product.id}>
          <img src="${product.img}" class="product--img" alt="product-card" />
          <div class="product-no">${product.id}</div>
          <div class="product-name">${product.name}</div>
          <div class="product-price">₹ ${product.price} /-</div>
          <button class="btn--addToCart">Add to Cart</button>
        </div>`;

  productList.insertAdjacentHTML("beforeend", markup);
};

products.forEach(p => displayCard(p));

const searchProduct = function () {
  const inputValue = input.value.toLowerCase();

  if (inputValue === "") {
    alert("Please write a product name");
    return;
  }

  input.value = "";

  productList.innerHTML = "";

  const filteredProducts = products.filter(
    (product) => product.name.toLowerCase() === inputValue
  );
  filteredProducts.forEach(displayCard);
};


// const addProduct = 


// event listeners
searchBtn.addEventListener("click", searchProduct);

    productList.addEventListener('click', function (e) {
    e.preventDefault();
  
    console.log(e.target);
  
    // Matching strategy
    if (e.target.classList.contains('product-card')) {
      const id = e.target.dataset.id;
  
      console.log('Selected Id : ', id);
    }
  
    products.forEach(product => {
        if (product.id === id) {
        

                cartProducts.push(product);
        } else {
            
        }
    });

  });