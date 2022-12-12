import user from "./usersSlice";
import doctor from "./doctorSlice";
import { combineReducers } from "redux";

export default combineReducers({ user, doctor });
