// // 'use strict';

// // import { menuArray } from './data.js';

// // const alertEl = document.querySelector('.alert');
// // const menuContainer = document.querySelector('.menu-container');
// // const orderContainer = document.querySelector('.order');
// // const mealOrderContainer = document.querySelector('.meal-orders');
// // const totalEl = document.querySelector('.total');
// // const cart = [];

// // window.addEventListener('DOMContentLoaded', function () {
// //   displayMeal();
// //   addToCart();
// //   removeFromCart();
// // });

// // function addToCart() {
// //   const addBtn = document.querySelectorAll('.add-cart');
// //   addBtn.forEach(function (btn) {
// //     btn.addEventListener('click', function (e) {
// //       for (let meal of menuArray) {
// //         if (e.currentTarget.dataset.meal === meal.name) {
// //           if (cart.includes(meal)) {
// //             alert('item already in cart', 'danger');
// //           } else {
// //             cart.push(meal);
// //             renderOrder();
// //             alert('meal added to cart', 'success');
// //           }
// //         }
// //       }
// //       //   console.log(e.currentTarget.dataset.meal);
// //     });
// //   });
// // }

// // function removeFromCart() {
// //   orderContainer.addEventListener('click', function (e) {
// //     for (let meal of cart) {
// //       if (e.target.dataset.meal === meal.name) {
// //         cart.pop(meal);

// //         if (cart.length === 0) {
// //           orderContainer.classList.remove('show-order');
// //           alert('no item in cart', 'danger');
// //         } else {
// //           renderOrder();
// //           alert('item removed from cart', 'danger');
// //         }

// //         // renderOrder();
// //         // alert('item removed from cart', 'danger');
// //         // if (cart.length === 0) {
// //         //   orderContainer.classList.remove('show-order');
// //         //   alert('no item in cart', 'danger');
// //         // }
// //       }
// //     }
// //   });
// // }

// // function displayMeal() {
// //   const displayMenu = menuArray
// //     .map(function (menu) {
// //       return ` <article class="meal">
// //               <p class="meal-emoji">${menu.emoji}</p>
// //               <div class="food-details">
// //                 <h3 class="meal-name">${menu.name}</h3>
// //                 <p class="meal-recipe">${menu.ingredients}</p>
// //                 <span class="meal-price">$${menu.price}</span>
// //               </div>
// //               <button class="btn add-cart" data-meal="${menu.name}">
// //                 <i class="fa-solid fa-plus"></i>
// //               </button>
// //             </article>`;
// //     })
// //     .join('');
// //   menuContainer.innerHTML = displayMenu;
// // }

// // function renderOrder() {
// //   mealOrderContainer.innerHTML = cart
// //     .map(function (meal) {
// //       return `<article class="meal-container">
// //                 <h3 class="meal-order-name">${meal.name}</h3>
// //                 <button class="remove-cart" data-meal='${meal.name}'>remove</button>
// //                 <p class="meal-order-price">$${meal.price}</p>
// //               </article>`;
// //     })
// //     .join('');
// //   orderContainer.classList.add('show-order');
// //   checkTotal();
// // }

// // function alert(text, outcome) {
// //   alertEl.textContent = text;
// //   alertEl.classList.add(`alert-${outcome}`);

// //   setTimeout(function () {
// //     alertEl.textContent = '';
// //     alertEl.classList.remove(`alert-${outcome}`);
// //   }, 1000);
// // }

// // function checkTotal() {
// //   let total = 0;

// //   cart.forEach(function (meal) {
// //     total += meal.price;
// //   });
// //   totalEl.textContent = `$${total}`;
// //   return total;
// // }

// // // function getTotalPrice() {
// // //   let totalPrice = checkTotal()
// // // }

// // // Modal
// // const orderbtn = document.querySelector('.complete-order-btn');
// // const modal = document.querySelector('.modal-container');
// // const closeModalBtn = document.querySelector('.close-modal-btn');
// // const form = document.querySelector('.form');
// // const formBtn = document.querySelector('.form-btn');

// // const modalEl = document.querySelector('.modal');
// // const priceValue = document.querySelector('.price-value');

// // orderbtn.addEventListener('click', function () {
// //   modal.classList.add('show-modal');
// //   let totalPrice = checkTotal();
// //   priceValue.textContent = `${totalPrice}.00`;
// //   formBtn.textContent = `Pay ${totalPrice}.00`;
// // });

// // closeModalBtn.addEventListener('click', function () {
// //   modal.classList.remove('show-modal');
// // });

// // form.addEventListener('submit', function (e) {
// //   e.preventDefault();
// //   console.log('clicked');
// //   let totalPrice = checkTotal();
// //   checkTotal();
// //   modalEl.innerHTML = `<div class="success">
// //   <div>
// //   <i class="fa-regular fa-circle-check order-success"></i>
// //   <p class="successful-pay">Payment Successful</p>
// //   <p class="success-text">You paid $${totalPrice}.00 to Bolu's dinner</p>
// //   </div>
// // </div>`;

// //   setTimeout(function () {
// //     alert('Order Successful', 'success');
// //     window.location.reload();
// //   }, 3000);
// // });

// 'use strict';

// import { menuArray } from './data.js';

// const alertEl = document.querySelector('.alert');
// const menuContainer = document.querySelector('.menu-container');
// const orderContainer = document.querySelector('.order');
// const mealOrderContainer = document.querySelector('.meal-orders');
// const totalEl = document.querySelector('.total');
// let cart = [];

// window.addEventListener('DOMContentLoaded', function () {
//   displayMeal();
//   addToCart();
//   removeFromCart();
// });

// function addToCart() {
//   const addBtn = document.querySelectorAll('.add-cart');
//   addBtn.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//       for (let meal of menuArray) {
//         if (e.currentTarget.dataset.meal === meal.name) {
//           cart.push(meal);
//           checkTotal();
//         }
//       }

//       const meal = e.currentTarget.dataset.meal;
//       const parent = e.currentTarget.previousSibling.previousSibling;
//       const price = parent.querySelector('.meal-price');
//       let priceValue = Number(price.textContent.slice(1));
//       const element = document.createElement('figure');
//       element.innerHTML = `<h3 class="meal-order-name">${meal}</h3>
//                 <button class="remove-cart" data-meal='${meal}'>remove</button>
//                 <p>(x${meal.amount})</p>
//                 <p class="meal-order-price">$<span class="prices">${priceValue}</span></p>`;
//       mealOrderContainer.append(element);
//       orderContainer.classList.add('show-order');

//       // console.log(e.currentTarget.previousSibling.previousSibling);

//       // for (let meal of menuArray) {
//       //   if (e.currentTarget.dataset.meal === meal.name) {
//       //     if (cart.includes(meal)) {
//       //       alert('item already in cart', 'danger');
//       //     } else {
//       //       cart.push(meal);
//       //       renderOrder();
//       //       alert('meal added to cart', 'success');
//       //     }
//       //   }
//       // }

//       // console.log(e.currentTarget.dataset.meal);
//     });
//   });
// }

// // function removeFromCart() {
// //   orderContainer.addEventListener('click', function (e) {
// //     console.log(cart);
// //     checkTotal();

// //     if (e.target.dataset.meal) {
// //       console.log(e.target.parentElement);
// //       const child = e.target.parentElement;
// //       mealOrderContainer.removeChild(child);
// //     }

// //     if (mealOrderContainer.children.length === 0) {
// //       orderContainer.classList.remove('show-order');
// //     }
// //   });
// // }

// function removeFromCart() {
//   orderContainer.addEventListener('click', function (e) {
//     const figures = document.querySelectorAll('.prices');
//     console.log(figures);

//     if (e.target.dataset.meal) {
//       // console.log(e.target.parentElement);
//       const child = e.target.parentElement;
//       mealOrderContainer.removeChild(child);
//     }

//     if (mealOrderContainer.children.length === 0) {
//       orderContainer.classList.remove('show-order');
//     }

//     checkTotal();
//   });
// }

// function displayMeal() {
//   const displayMenu = menuArray
//     .map(function (menu) {
//       return ` <article class="meal">
//               <p class="meal-emoji">${menu.emoji}</p>
//               <div class="food-details" id="food-details">
//                 <h3 class="meal-name">${menu.name}</h3>
//                 <p class="meal-recipe">${menu.ingredients}</p>
//                 <span class="meal-price">$${menu.price}</span>
//               </div>
//               <button class="btn add-cart" data-meal="${menu.name}">
//                 <i class="fa-solid fa-plus"></i>
//               </button>
//             </article>`;
//     })
//     .join('');
//   menuContainer.innerHTML = displayMenu;
// }

// // function renderOrder() {
// //   mealOrderContainer.innerHTML = cart
// //     .map(function (meal) {
// //       return `<article class="meal-container">
// //                 <h3 class="meal-order-name">${meal.name}</h3>
// //                 <button class="remove-cart" data-meal='${meal.name}'>remove</button>
// //                 <p class="meal-order-price">$${meal.price}</p>
// //               </article>`;
// //     })
// //     .join('');
// //   orderContainer.classList.add('show-order');
// //   checkTotal();
// // }

// function alert(text, outcome) {
//   alertEl.textContent = text;
//   alertEl.classList.add(`alert-${outcome}`);

//   setTimeout(function () {
//     alertEl.textContent = '';
//     alertEl.classList.remove(`alert-${outcome}`);
//   }, 1000);
// }

// function checkTotal() {
//   let total = 0;
//   cart.forEach(function (meal) {
//     total += meal.price;
//   });
//   totalEl.textContent = `$${total}`;
// }

// // Modal
// // const orderbtn = document.querySelector('.complete-order-btn');
// // const modal = document.querySelector('.modal-container');
// // const closeModalBtn = document.querySelector('.close-modal-btn');
// // const formBtn = document.querySelector('.form-btn');
// // const nameValue = document.querySelector('.name-input');
// // let name;

// // orderbtn.addEventListener('click', function () {
// //   modal.classList.add('show-modal');
// // });

// // closeModalBtn.addEventListener('click', function () {
// //   modal.classList.remove('show-modal');
// // });

// // formBtn.addEventListener('click', function (e) {
// //   e.preventDefault();
// //   //   console.log(nameValue.value);
// //   name = nameValue.value;
// //   modal.classList.remove('show-modal');
// //   orderContainer.innerHTML = `<p class="notification">Thanks ${name}!, your order is on its way</p>`;
// //   alert('Order Successful', 'success');
// //   window.location.reload();
// // });

// // // Modal
// const orderbtn = document.querySelector('.complete-order-btn');
// const modal = document.querySelector('.modal-container');
// const closeModalBtn = document.querySelector('.close-modal-btn');
// const form = document.querySelector('.form');
// const formBtn = document.querySelector('.form-btn');

// const modalEl = document.querySelector('.modal');
// const priceValue = document.querySelector('.price-value');

// orderbtn.addEventListener('click', function () {
//   modal.classList.add('show-modal');
//   let totalPrice = checkTotal();
//   priceValue.textContent = `${totalPrice}.00`;
//   formBtn.textContent = `Pay ${totalPrice}.00`;
// });

// closeModalBtn.addEventListener('click', function () {
//   modal.classList.remove('show-modal');
// });

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   console.log('clicked');
//   let totalPrice = checkTotal();
//   checkTotal();
//   modalEl.innerHTML = `<div class="success">
//   <div>
//   <i class="fa-regular fa-circle-check order-success"></i>
//   <p class="successful-pay">Payment Successful</p>
//   <p class="success-text">You paid $${totalPrice}.00 to Bolu's dinner</p>
//   </div>
// </div>`;

//   setTimeout(function () {
//     alert('Order Successful', 'success');
//     window.location.reload();
//   }, 3000);
// });
