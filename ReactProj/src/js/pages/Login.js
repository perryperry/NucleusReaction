import React from 'react'
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form'
import {setUserAge, setUserName, fetchUser} from '../actions/userActions';

@connect((store) => {
  return {
    user: store.user.user,
  };

})

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
    // alert('Text field value is: ' + this.state.value);
    this.props.dispatch(setUserName(this.state.name));
    
    this.props.dispatch(setUserAge(this.state.age));
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="First Name"
          value={this.state.name}
          onChange={this.handleNameChange.bind(this)} />
         
          <input
          type="text"
          placeholder="Age"
           value={this.state.age}
          onChange={this.handleAgeChange.bind(this)}  />

        <button onClick={this.handleSubmit.bind(this)}>
          Submit
        </button>
      </div>
    );
  }
}

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(Login)

