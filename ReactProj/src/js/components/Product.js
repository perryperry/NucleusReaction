import React from "react";
import { Link } from "react-router";

export default class Product extends React.Component {
  render() {
    const { product } = this.props;
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
          
          
            

          </div>
            
        );
    } else {
      return null;
    }
  }
}