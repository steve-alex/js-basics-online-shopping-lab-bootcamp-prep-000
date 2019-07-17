var cart = [];

function addToCart(item){
  var cartItem = new Object({itemName:[item], itemPrice: Math.floor(Math.random()*100)});
  cart.push(cartItem);
  return `${cartItem.itemName} has been added to your cart.`
}

function viewCart(){
  if (cart.length === 0){
    return "Your shopping cart is empty."
  } else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var items = "In your cart, you have ";
    for (var i=0; i<(cart.length - 1); i++) {
      items += `${cart[i].itemName} at ${cart[i].itemPrice}, `;
    }
    items += `and ${cart[cart.length - 1].itemName} at ${cart[cart.length - 1].itemPrice}`
  }
}

function total(){
  var totalPrice = 0;
  for (var i=0; i<cart.length; i++){
    totalPrice += parseInt(cart[i].itemPrice);
  }
  return totalPrice
}

function removeFromCart(name){
  for (var i=0; i<cart.length; i++){
    if (cart[i].itemName === name){
      cart.splice(i, 1);
      return cart
    }
  }
}

function placeOrder(creditCardNumber){
  if (typeOf(creditCardNumber) === 'undefined'){
    return "Sorry, we don't have a credit card on file for you"
  } else {
    cart = [];
    return `Your total cost is ${totalPrice()}, which will be charged to the card ${creditCardNumber}.`
  }
}

function setCart(c) {
  cart = c;
  return cart;
}

function getCart() {
 return cart;
}