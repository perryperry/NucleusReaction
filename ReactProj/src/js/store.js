import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./reducers";


const middleware = applyMiddleware(thunk, logger());

export default createStore(reducer, middleware);



/*store.dispatch((dispatch) => {
	dispatch({type: "FETCH_USERS_START"});
	axios.get("http://rest.learertncode.academy/api/wstern/users")
		.then((response) => {
			dispatch({ type: "RECEIVE_USERS", payload: response.data})
		})
		.catch((e) => {
			dispatch({type: "FETCH_USERS_ERROR", payload: e})
		})
})*/