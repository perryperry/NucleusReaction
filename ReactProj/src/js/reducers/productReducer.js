export default function reducer(state={
    products: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_PRODUCTS": {
        return {...state, fetching: true}
      }
      case "FETCH_PRODUCTS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_PRODUCTS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          products: action.payload,
        }
      }
      case "ADD_PRODUCT": {
        return {
          ...state,
          products: [...state.products, action.payload],
        }
      }
      case "UPDATE_PRODUCT": {
        const { id, text } = action.payload
        const newProducts = [...state.products]
        const tweetToUpdate = newProducts.findIndex(tweet => tweet.id === id)
        newProducts[tweetToUpdate] = action.payload;

        return {
          ...state,
          products: newProducts,
        }
      }
      case "DELETE_PRODUCT": {
        return {
          ...state,
          products: state.products.filter(tweet => tweet.id !== action.payload),
        }
      }
    }

    return state
}