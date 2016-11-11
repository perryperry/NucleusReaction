import axios from "axios";

export function fetchUser() {
    console.log("fetchUser");

  return {
    type: "FETCH_USER_FULFILLED",
    payload: {
      name: "Will",
      age: 35,
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

export function setUserAge(age) {
    console.log("setUserAge: " + age);
    return {
      type: 'SET_USER_AGE',
      payload: age,
    }

  }

export function createUser(name, age) {
   console.log("**** Creating user ****\nname: " + name + " age: " + age);
  return {
    type: 'CREATE_USER',
    payload:{
      name: name,
      age: age,
      created: true,
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
