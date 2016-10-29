import axios from "axios";

export function fetchProducts() {
  return function(dispatch) {
    axios.get("https://crossorigin.me/https://ccstore-z5ia.oracleoutsourcing.com/ccstoreui/v1/products?totalResults=true&totalExpandedResults=true&catalogId=&offset=0&limit=60&categoryId=HomePageFeatured&includeChildren=true&storePriceListGroupId=defaultPriceGroup")
      .then((response) => {
        dispatch({type: "FETCH_PRODUCTS_FULFILLED", payload: response.data.items})
      })
      .catch((err) => {
        dispatch({type: "FETCH_PRODUCTS_REJECTED", payload: err})
      })
  }
}

export function addProduct(id, text) {
  return {
    type: 'ADD_PRODUCT',
    payload: {
      id,
      text,
    },
  }
}

export function updateProduct(id, text) {
  return {
    type: 'UPDATE_PRODUCT',
    payload: {
      id,
      text,
    },
  }
}

export function deleteProduct(id) {
  return { type: 'DELETE_PRODUCT', payload: id}
}