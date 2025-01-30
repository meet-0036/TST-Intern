"use strict";

const products = [
  {
    id: 1,
    name: "Casual T-Shirt",
    img: "assets/black.png",
    price: 19.99,
  },
  {
    id: 2,
    name: "Denim Jeans",
    img: "assets/white.png",
    price: 49.99,
  },
  {
    id: 3,
    name: "Formal Shirt",
    img: "assets/black.png",
    price: 29.99,
  },
  {
    id: 4,
    name: "Chinos",
    img: "assets/white.png",
    price: 39.99,
  },
  {
    id: 5,
    name: "Hoodie",
    img: "assets/black.png",
    price: 59.99,
  },
  {
    id: 6,
    name: "Leather Jacket",
    img: "assets/white.png",
    price: 99.99,
  },
  {
    id: 7,
    name: "Polo Shirt",
    img: "assets/black.png",
    price: 24.99,
  },
  {
    id: 8,
    name: "Sweatpants",
    img: "assets/white.png",
    price: 34.99,
  },
  {
    id: 9,
    name: "Winter Coat",
    img: "assets/black.png",
    price: 119.99,
  },
  {
    id: 10,
    name: "Shorts",
    img: "assets/white.png",
    price: 29.99,
  },
  {
    id: 11,
    name: "Summer Dress",
    img: "assets/black.png",
    price: 45.99,
  },
  {
    id: 12,
    name: "Blazer",
    img: "assets/white.png",
    price: 79.99,
  },
  {
    id: 13,
    name: "Cargo Pants",
    img: "assets/black.png",
    price: 44.99,
  },
  {
    id: 14,
    name: "Tracksuit",
    img: "assets/white.png",
    price: 69.99,
  },
  {
    id: 15,
    name: "Cardigan",
    img: "assets/black.png",
    price: 55.99,
  },
];

// Elements
const searchBtn = document.querySelector(".btn--search");
const homeBtn = document.querySelector(".btn--home");
const cartBtn = document.querySelector(".btn--cart");
const addToCartBtn = document.querySelector(".btn--addToCart");
const contectUsBtn = document.querySelector(".btn--ContectUs");
const productList = document.querySelector(".product-list");
const productCard = document.querySelector(".product-card");
const input = document.querySelector(".search-input");
const productCart = document.querySelector(".cart-items");
const productCartList = productCart.querySelector("ul");
const countCart = document.querySelector(".cart-count");
const suggetions = document.querySelector(".suggest");

// initializers
let cartProducts = [];
let searchInput;

// functions
const displayCard = function (product) {
  const markup = `
    <div class="product-card" >
          <img src="${product.img}" class="product--img" alt="product-card" />
          <div class="product-no">${product.id}</div>
          <div class="product-name">${product.name}</div>
          <div class="product-price">₹ ${product.price} /-</div>
          <button class="btn--addToCart" data-id=${product.id}>Add to Cart</button>
        </div>`;

  productList.insertAdjacentHTML("beforeend", markup);
};

function debounce(func, timeout = 1000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const addInput = function (text) {
  searchInput = input.value = text.innerHTML;
  suggetions.innerHTML = "";
};

const generateSuggetion = function (inputValue) {
  if (!inputValue) {
    suggetions.innerHTML = "";
    return;
  }

  const filterProducts = products.filter((product) =>
    product.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  console.log("filter :", filterProducts);

  if (filterProducts.length !== 0) {
    filterProducts.forEach((product) => {
      suggetions.insertAdjacentHTML(
        "beforeend",
        `<div onclick=addInput(this)>${product.name}</div>`
      );
      input.value;
    });
  } else {
    suggetions.innerHTML = "";
  }
};

const searchProduct = function () {
  let inputValue = searchInput;

  productList.innerHTML = "";

  if (!inputValue) {
    alert("Please write a product name");
    return;
  }
  console.log(inputValue);
  const filterProducts = products.filter((product) =>
    product.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  // console.log("filter :", filterproducts);

  filterProducts === []
    ? alert("Product not found")
    : filterProducts.forEach((product) => displayCard(product));
};

const displayCart = function () {
  productCart.style.opacity = productCart.style.opacity == 0 ? 1 : 0;

  // console.log(cartProducts);
  productCartList.innerHTML = "";

  cartProducts.forEach((product) => {
    productCartList.insertAdjacentHTML(
      "beforeend",
      `<li>${products[product.id - 1].name}, q : ${product.quantity}</li>`
    );
  });
};

const updateCart = function (id) {
  let temp = {
    id: 0,
    quantity: 1,
  };

  let existProduct = cartProducts.find((p) => p.id === Number(id));

  // console.log(existProduct);

  if (existProduct) existProduct.quantity++;
  else {
    temp.id = Number(id);
    cartProducts.push(temp);
    countCart.innerHTML = `${cartProducts.length}`;
  }
  localStorage.setItem("cart", JSON.stringify(cartProducts));

  // console.log(cartProducts);
};

// event listeners

homeBtn.addEventListener("click", () =>
  products.forEach((p) => displayCard(p))
);

input.addEventListener(
  "input",
  debounce((e) => {
    generateSuggetion(e.target.value);
  }, 100)
);

searchBtn.addEventListener("click", searchProduct);

// add to cart
productList.addEventListener("click", function (e) {
  e.preventDefault();

  // console.log(e.target);

  // Matching strategy
  if (e.target.classList.contains("btn--addToCart")) {
    const _id = e.target.dataset.id;
    console.log("Selected Id : ", _id);

    updateCart(_id);

    // console.log(cartProducts);
  }
});

cartBtn.addEventListener("click", displayCart);

// store in localStorage
window.addEventListener("beforeunload", () => {
  localStorage.setItem("cart", JSON.stringify(cartProducts));
});

// Fatch from localStorage
window.addEventListener("load", () => {
  const storedCart = localStorage.getItem("cart");

  if (storedCart) {
    cartProducts = JSON.parse(storedCart);
    countCart.innerHTML = `${cartProducts.length}`;
  }
});
