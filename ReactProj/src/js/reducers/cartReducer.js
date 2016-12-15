export default function reducer(state={
   cart: []
  }, action) {

    switch (action.type) {
     
      case "ADD_CART_PRODUCT": {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        }
      }
      case "SIGN_OUT_USER": {
        return {
          ...state,
          cart: action.payload,
        }
      }
    }

    return state
}