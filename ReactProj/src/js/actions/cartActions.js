export function addCartProduct(product) {
  console.log("Adding to cart: ", product.displayName);
  return {
    type: 'ADD_CART_PRODUCT',
    payload: product
  }
}