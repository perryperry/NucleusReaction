import React from 'react'

import { Field, reduxForm } from 'redux-form'
import {getAuthenticated, fetchUser, setUserPassword, setUserName, createUser, signupUser} from '../actions/userActions';

export class Signup extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
    
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleNameChange(event) {
    // Note: with uncontrolled inputs, you don't
    // have to put the value in the state.
    this.setState({name: event.target.value});
  }

   handlePasswordChange(event) {
    // Note: with uncontrolled inputs, you don't
    // have to put the value in the state.
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    this.props.dispatch(signupUser(this.state.name, this.state.password));
  }

  render() {
    return (
     <div class="col-md-12">
      <div class="row">
        <h3>Signup</h3>
      </div>
      <div class="row">
        <input
          type="text"
          placeholder="First Name"
          value={this.state.name}
          onChange={this.handleNameChange.bind(this)} />
         <br/><br/>
          <input
          type="password"
          placeholder="Password"
           value={this.state.password}
          onChange={this.handlePasswordChange.bind(this)}  />
          <br/><br/>
        <button onClick={this.handleSubmit.bind(this)}>
          Submit
        </button>
      </div>
    </div>
    );
  }
}

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(Signup)