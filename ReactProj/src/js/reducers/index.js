import { combineReducers } from "redux"
import {reducer as formReducer} from 'redux-form';

import user from "./userReducer"
import products from "./productReducer"
import cart from "./cartReducer"

export default combineReducers({
	user,
	products,
	cart,
})