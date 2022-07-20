import { combineReducers } from "redux";
import counter from "./counter";
import student from "./student";
const allReducers = combineReducers({
    counter,
    student
})
export default allReducers