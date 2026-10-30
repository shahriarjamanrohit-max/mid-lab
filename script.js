function showOffer() {
  document.getElementById("offerText").innerHTML = "Use code SHOE20 to get 20% off your first order!";
}

var cartCount = 0;
function addToCart(shoeName) {
  cartCount = cartCount + 1;
  document.getElementById("cart").innerHTML = "Items in cart: " + cartCount;
  alert(shoeName + " added to cart!");
}