// external imports
import { combineReducers } from "redux";

// internal imports
import authReducer from "./auth/auth";

// error modal reducer
import errorModalReducer from "./errorModal/errorModal";

import usersReducer from "./users/users";
import newUserAddReducer from "./users/AddNewUser";
import deleteUserReducer from "./users/DeleteUser";
import editUserReducer from "./users/EditUser";

const reducers = combineReducers({
  auth: authReducer,
  users: usersReducer,
  newUserAdd: newUserAddReducer,
  errorModal: errorModalReducer,
  deleteUser: deleteUserReducer,
  editUser: editUserReducer
});

export default reducers;
