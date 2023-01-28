'use strict';

import { menuArray } from './data.js';

// console.log(menuArray);

const alertEl = document.querySelector('.alert');
const menuContainer = document.querySelector('.menu-container');
const orderContainer = document.querySelector('.order');
const mealOrderContainer = document.querySelector('.meal-orders');
const totalEl = document.querySelector('.total');
let cart = [];

window.addEventListener('DOMContentLoaded', function () {
  displayMeal();
  addToCart();
  removeFromCart();
});

function displayMeal() {
  const displayMenu = menuArray
    .map(function (menu) {
      return ` <article class="meal">
              <p class="meal-emoji">${menu.emoji}</p>
              <div class="food-details" id="food-details">
                <h3 class="meal-name">${menu.name}</h3>
                <p class="meal-recipe">${menu.ingredients}</p>
                <span class="meal-price">$${menu.price}</span>
              </div>
              <button class="btn add-cart" data-meal="${menu.name}">
                <i class="fa-solid fa-plus"></i>
              </button>
            </article>`;
    })
    .join('');
  menuContainer.innerHTML = displayMenu;
}

function addToCart() {
  const addBtn = document.querySelectorAll('.add-cart');
  addBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      for (let meal of menuArray) {
        if (e.currentTarget.dataset.meal === meal.name) {
          if (cart.includes(meal)) {
            // alert('item already in cart', 'danger');
            meal.amount++;
            renderOrder();
          } else {
            cart.push(meal);
            renderOrder();
            alert('meal added to cart', 'success');
          }
        }
      }
    });
  });
}

function renderOrder() {
  mealOrderContainer.innerHTML = cart
    .map(function (meal) {
      return `<article class="meal-container">
                <h3 class="meal-order-name">${meal.name}</h3>
                <button class="remove-cart" data-meal='${
                  meal.name
                }'>remove</button>
                <p>(x<span class="amount">${meal.amount}</span>)</p>

                <p class="meal-order-price">$${meal.price * meal.amount}</p>
              </article>`;
    })
    .join('');
  orderContainer.classList.add('show-order');
  checkTotal();
}

function checkTotal() {
  let total = 0;
  cart.forEach(function (meal) {
    total += meal.price * meal.amount;
  });
  totalEl.textContent = `$${total}`;
  return total;
}

function alert(text, outcome) {
  alertEl.textContent = text;
  alertEl.classList.add(`alert-${outcome}`);

  setTimeout(function () {
    alertEl.textContent = '';
    alertEl.classList.remove(`alert-${outcome}`);
  }, 1000);
}

function removeFromCart() {
  orderContainer.addEventListener('click', function (e) {
    for (let meal of cart) {
      if (e.target.dataset.meal === meal.name) {
        if (meal.amount > 1) {
          meal.amount--;
          checkTotal();
        } else if (meal.amount === 1) {
          cart = cart.filter(function (food) {
            return food.name !== e.target.dataset.meal;
          });
          renderOrder();
        }
        if (cart.length === 0) {
          orderContainer.classList.remove('show-order');
          alert('no item in cart', 'danger');
        } else {
          renderOrder();
          //   alert('item removed from cart', 'danger');
        }

        // renderOrder();
        // alert('item removed from cart', 'danger');
        // if (cart.length === 0) {
        //   orderContainer.classList.remove('show-order');
        //   alert('no item in cart', 'danger');
        // }
      }
    }
  });
}

// modal
const orderbtn = document.querySelector('.complete-order-btn');
const modal = document.querySelector('.modal-container');
const closeModalBtn = document.querySelector('.close-modal-btn');
const form = document.querySelector('.form');
const formBtn = document.querySelector('.form-btn');

const modalEl = document.querySelector('.modal');
const priceValue = document.querySelector('.price-value');

orderbtn.addEventListener('click', function () {
  modal.classList.add('show-modal');
  let totalPrice = checkTotal();
  priceValue.textContent = `${totalPrice}.00`;
  formBtn.textContent = `Pay $${totalPrice}.00`;
});

closeModalBtn.addEventListener('click', function () {
  modal.classList.remove('show-modal');
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('clicked');
  let totalPrice = checkTotal();
  checkTotal();
  modalEl.innerHTML = `<div class="success">
  <div>
  <i class="fa-regular fa-circle-check order-success"></i>
  <p class="successful-pay">Payment Successful</p>
  <p class="success-text">You paid $${totalPrice}.00 to Bolu's dinner</p>
  </div>
</div>`;

  setTimeout(function () {
    alert('Order Successful', 'success');
    window.location.reload();
  }, 3000);
});
