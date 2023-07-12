const plus = document.querySelector(".plus"),
  minus = document.querySelector(".minus"),
  num = document.querySelector(".num"),
  cart = document.querySelector(".cart-page"),
  addTotal = document.getElementById("total");

let i = 1;
let price = 500;

function plusButton() {
  i++;
  num.textContent = i;
  price += 500;
  addTotal.textContent = price;
}

function minusButton() {
  if (i > 1) {
    i--;
    num.textContent = i;
    price -= 500;
    addTotal.textContent = price;
  }
}
