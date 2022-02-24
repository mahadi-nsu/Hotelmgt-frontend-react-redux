import * as actionTypes from "../../../constants/actionTypes";
import { getUsers } from "../api";

const userStart = () => {
  return {
    type: actionTypes.USER_START,
  };
};
const userSuccess = (data) => {
  return {
    type: actionTypes.USER_SUCCESS,
    data: data,
  };
};

const userFail = (error) => {
  return {
    type: actionTypes.USER_FAIL,
    error: error,
  };
};

export const allUsersData = () => {
  return async (dispatch) => {
    dispatch(userStart());
    try {
      let response = await getUsers();
      dispatch(userSuccess(response.data));
    } catch (err) {
      dispatch(userFail({ message: err.message }));
    }
  };
};
