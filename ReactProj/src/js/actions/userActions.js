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
