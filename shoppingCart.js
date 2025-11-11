console.log('Exportin module:');

const shippingCost = 10;
const cart = [];

const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product}  added to the cart`);
};

export { cart, addToCart };
