import React from "react";
import { Link } from "react-router";
import {connect} from "react-redux";

@connect((store) => {
  return {
    user: store.user.user,
  };

})

export default class Profile extends React.Component {
  render() {
    const {user} = this.props;

    return (
      <div class="col-md-3 shop-item"> 
        <h3>Your profile:</h3>
        <hr/>
        <ul>
          <li><strong>Name:</strong> {user.name}</li>
          <li><strong>Age:</strong> {user.age}</li>
        </ul>
      </div> 
    );
  }
}