import user from "./usersSlice";
import doctor from "./doctorSlice";
import appointment from "./appointment";
import { combineReducers } from "redux";

export default combineReducers({ user, doctor, appointment });
