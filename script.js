// console.log('Importing module:');

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('phones', 16);

// console.log(`${ShoppingCart.cart[0].quantity} ${ShoppingCart.cart[0].product}`);

console.log('Start Fetching');

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json()
// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

// const lastPost = getLastPost() //todo: not gonna work becoause it returnes promise
// console.log(lastPost); //todo: pending promise

//todo: So we need to do this
// lastPost.then(last => console.log(last)); // todo: but not very clean

// so we will use top level await
const lastPost2 = await getLastPost();
console.log(lastPost2);
