import React from 'react'
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form'
import {setUserName, setUserAge} from '../actions/userActions';

// const Login = (props) => {
//   const { handleSubmit, pristine, reset, submitting } = props
//   return (
//     <form onSubmit={handleSubmit(setUserName)}>
//       <div>
//         <label>First Name</label>
//         <div>
//           <Field name="name" component="input" type="text" placeholder="First Name"/>
//         </div>
//       </div>
//       <div>
//         <button type="submit" disabled={pristine || submitting}>Submit</button>
//         <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
//       </div>
//     </form>
//   )
// }

// export default reduxForm({
//   form: 'simple'  // a unique identifier for this form
// })(Login)


export class Login extends React.Component {
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
    setUserName(this.state.name);
    
    setUserAge(this.state.age);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="First Name"
          value={this.state.name}
          onChange={this.handleNameChange} />
         
          <input
          type="text"
          placeholder="Age"
           value={this.state.age}
          onChange={this.handleAgeChange}  />

        <button onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(Login)

