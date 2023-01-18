// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;

  const subtotal = parseFloat(price) * parseFloat(quantity);
  const subtotalEl = product.querySelector(".subtotal");
  subtotalEl.innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  const allProducts = document.querySelectorAll(".product");

  // ITERATION 3
  const allSubtotals = [];
  allProducts.forEach((product) => allSubtotals.push(updateSubtotal(product)));
  let total = allSubtotals.reduce((acc, cur) => acc + cur, 0);
  const totalEl = document.querySelector("#total-value span");
  totalEl.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
  console.log(target.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const cart = document.querySelector("#cart tbody");
  const product = document.querySelector("#cart tbody tr");
  const newProduct = product.cloneNode(true);

  const name = newProduct.querySelector(".name span");
  const newName = document.querySelector(".create-product td input");
  name.innerText = newName.value;

  const price = newProduct.querySelector(".price span");
  const newPrice = document.querySelectorAll(".create-product td input")[1];
  price.innerText = newPrice.value;

  cart.appendChild(newProduct);

  const removeBtn = newProduct.querySelector(".btn-remove");
  removeBtn.addEventListener("click", removeProduct);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", removeProduct);
  });

  const createBtn = document.getElementById("create");
  createBtn.addEventListener("click", () => {
    createProduct();
    const inputName = document.querySelector(".create-product td input");
    inputName.value = "";
    const inputPrice = document.querySelectorAll(".create-product td input")[1];
    inputPrice.value = 0;
    inputName.focus();
  });
});
