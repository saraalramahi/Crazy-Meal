"use strict ;"
function Order(mealName, mealPrice, mealImage) {
  this.mealName = mealName;
  this.mealPrice = mealPrice;
  this.mealImage = mealImage;
}


let orders = [];


const table = document.getElementById("ordersTable");

const form = document.getElementById("orderForm");  
form.addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("mealName").value;
  let price = document.getElementById("mealPrice").value;
  let image = document.getElementById("mealImage").value;

  let newOrder = new Order(name, price, image);

  orders.push(newOrder);

  renderTable();

  form.reset();
});


function renderTable() {
  table.innerHTML = "";
  orders.forEach((order) => {
    let row = document.createElement("tr");
    row.innerHTML =
    ` <td>${order.mealName}</td>
      <td>${order.mealPrice}</td>
      <td><img src="${order.mealImage}" " width="100"></td>
    ;` 
    table.appendChild(row);
  });
  
}

const clearBtn = document.getElementById("clearOrders");
clearBtn.addEventListener("click", function() {
  orders.length = 0;
  renderTable();
});