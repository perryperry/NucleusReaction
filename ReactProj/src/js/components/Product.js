import React from "react";
import { Link } from "react-router";
import {connect} from "react-redux";
import { addCartProduct } from "../actions/cartActions"

@connect((store) => {
  return {
    cart: store.cart.cart,
    user: store.user.user,
  };

})

export default class Product extends React.Component {

  handleClick(loggedIn, product) {
    if(loggedIn) {
      this.props.dispatch(addCartProduct(product));
    } else {
      console.log("User attempted to add product while logged out");
    }
  }

  render() {
    const { product } = this.props;
    const {user} = this.props;
    const url = "https://ccstore-z5ia.oracleoutsourcing.com";

    
      if(product !== undefined) {
        return (
          <div class="col-md-3 shop-item"> 
            <Link to={'/products/'+product.id}>
              <img src={url + product.primaryMediumImageURL}/>
              <div class="detail">
                <h2>{product.displayName}</h2>
                <small class="previous-price">{product.listPrice}</small>
                <p>{product.salePrice}</p>
              </div>
            </Link>
           
          { user.created ?
            <div>
              <select id="productQtyId">
                  <option value="1" >1</option>
                  <option value="2" >2</option>
                  <option value="3" >3</option>
                  <option value="4" >4</option>
                  <option value="5" >5</option>
              </select>
              <button onClick={() => this.handleClick(user.created, product)}>Add to cart</button> 
            </div> : null
          }
          
          </div>
            
        );
    } else {
      return null;
    }
  }
}