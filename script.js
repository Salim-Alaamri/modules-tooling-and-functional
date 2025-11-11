console.log('Importing module:');

import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('phones', 16);

console.log(`${ShoppingCart.cart[0].quantity} ${ShoppingCart.cart[0].product}`);
