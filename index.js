var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = parseInt(Math.floor(Math.random()*100)+1);
  
  cart.push({[itemName] : itemPrice});
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  
  var items = [];
    for ( var i=0; i < cart.length; i++) {
      for (var itemName in cart[i]) {
        items.push( `${itemName} at $${cart[i][itemName]}`)
      }
    }
  
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  } else if (cart.length === 1) {
    console.log(`In your cart, you have ${items}.`)
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${items.slice(0, items.length - 1)} and ${items.slice(-1)}.`)
  } else {
    var b = [];
    b=items.slice(0, items.length - 1);
    console.log(`In your cart, you have ${b.join(`, `)}, and ${items.slice(-1)}.`)
  }
  console.log();
}

function total() {
  
  var totalCost=0;
    for ( var i=0; i < cart.length; i++) {
      for (var itemName in cart[i]) {
        totalCost += cart[i][itemName]
      }
    }
  return totalCost
}

function removeFromCart(item) {
  
  for ( var i=0; i < cart.length; i++) {
      for (var itemName in cart[i]) {
        if (itemName === item) {
          delete cart[i];
        } else {
            return cart
        }
      }
  }
  return cart
//  console.log("That item is not in your cart.")
//  console.log();
}

function placeOrder(cardNumber) {
  // write your code here
}
