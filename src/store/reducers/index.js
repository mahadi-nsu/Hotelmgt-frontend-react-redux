import { combineReducers } from "redux";
import usersReducer from "./users/users";
import newUserAddReducer from "./users/AddNewUser";
import deleteUserReducer from "./users/DeleteUser";
import editUserReducer from "./users/EditUser";

const reducers = combineReducers({
  users: usersReducer,
  newUserAdd: newUserAddReducer,
  deleteUser: deleteUserReducer,
  editUser: editUserReducer,
});

export default reducers;
