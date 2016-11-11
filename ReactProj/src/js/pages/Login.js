import React from 'react'

import { Field, reduxForm } from 'redux-form'
import {getAuthenticated, fetchUser, setUserAge, setUserName, createUser, login} from '../actions/userActions';

export class Login extends React.Component {
  
    componentWillMount() {
        this.props.dispatch(fetchUser())
    }

    constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
    };
    
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleNameChange(event) {
    // Note: with uncontrolled inputs, you don't
    // have to put the value in the state.
    this.setState({name: event.target.value});
  }

   handleAgeChange(event) {
    // Note: with uncontrolled inputs, you don't
    // have to put the value in the state.
    this.setState({age: event.target.value});
  }

  handleSubmit(event) {
    this.props.dispatch(createUser(this.state.name, this.state.age));
  }

  render() {
    return (
     <div class="col-md-12">
      <div class="row">
        <h3>Login</h3>
      </div>
      <div class="row">
        <input
          type="text"
          placeholder="First Name"
          value={this.state.name}
          onChange={this.handleNameChange.bind(this)} />
         <br/><br/>
          <input
          type="text"
          placeholder="Age"
           value={this.state.age}
          onChange={this.handleAgeChange.bind(this)}  />
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
})(Login)

