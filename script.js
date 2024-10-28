// Simple JavaScript to handle button clicks, e.g., adding to cart
const addToCartButton = document.querySelector('button');

addToCartButton.addEventListener('click', () => {
  alert('Product added to cart!');
  // You can implement more complex logic here, like updating a cart in local storage or sending a request to a server.
});