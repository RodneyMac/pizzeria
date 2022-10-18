import { combineReducers } from "redux";
import shopReducer from "./actions/shopReducer";

const rootReducer = combineReducers({
  shop: shopReducer,
});

export default rootReducer;