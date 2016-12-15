import axios from "axios";
import cookie from 'react-cookie';

export function fetchUser() {
    console.log("fetchUser");

  return {
    type: "FETCH_USER_FULFILLED",
    payload: {
      name: "Will",
      password: "password",
    }
  }
}

export function setUserName(name) {
  console.log("setUserName: " + name);

  return {
    type: 'SET_USER_NAME',
    payload: name,
  }
}

export function setUserPassword(password) {
    console.log("setUserPassword: " + password);
    return {
      type: 'SET_USER_PASSWORD',
      payload: password,
    }

  }

export function createUser(name, password) {
  console.log("**** Creating user ****\nname: " + name + " password: " + password);

  var oldName = cookie.load('userName');

  if(name !== oldName) {
    alert("They don't match!");
  } else {
    alert("Oh, but they do match.");
  }
  cookie.save('userName', name, {path: '/'});

  return {
    type: 'CREATE_USER',
    payload:{
      name: name,
      password: password,
      created: true,
    }
  }
}

export function signupUser(name, password) {
  console.log("Signing up: \nname: " + name + " password: " + password);
  cookie.save('userName', name, {path: '/'});
  cookie.save('userPassword', password, {path: '/'});
  return {
    type: 'CREATE_USER',
    payload:{
      name: name,
      password: password,
      created: true,
    }
  }
}



export function signOutUser() {
  console.log("**** User signing out ****");

  alert(cookie.load('userName'));

  return {
    type: 'SIGN_OUT_USER',
    payload:{
      name: "",
      password: "",
      created: false,
      cart:[],
    }
  }
}

export function loginUser(name, password) {
  console.log("Attempting to log in");
  var storedName = cookie.load('userName');
  var storedPassword = cookie.load('userPassword');

  if(name === storedName && password === storedPassword) {
    console.log("login successful!");
    return {
        type: 'LOGIN_SUCCESS_USER',
        payload:{
          name: name,
          password: password,
          created: true,
        }
    }
  } else {
      console.log("Access denied!");
      return {
        type: 'LOGIN_DENY_USER',
      }
  }
}



// get the current user from the oracle commerce cloud
export function getCurrentUser() {
  // return function(dispatch) {
  //   axios.get("https://crossorigin.me/https://ccstore-z5ia.oracleoutsourcing.com/ccstoreui/v1/profiles/current")
  //     .then((response) => {
  //       dispatch({type: "FETCH_PRODUCTS_FULFILLED", payload: response.data})
  //     })
  //     .catch((err) => {
  //       dispatch({type: "FETCH_PRODUCTS_REJECTED", payload: err})
  //     })
  // }
}

export function getAuthenticated() {

  return function(dispatch) {
       // axios.post('https://ccadmin-z5ia.oracleoutsourcing.com/ccadmin/v1/login',

       // {'grant_type=password&username=jconaty@commerce-architects.com&password=hespeT3s'})
       //     .then((response) => {
            
       //      alert(response.data);


       //    }) .catch((err) => {
       //     alert("Axios Error creating user: ", err.status);
       //    })
  }
}
