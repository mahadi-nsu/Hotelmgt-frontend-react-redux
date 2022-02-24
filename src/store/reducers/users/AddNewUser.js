import * as actionTypes from "../../../constants/actionTypes";
import { updateObject } from "../../../constants/utility";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const userAddStart = (state) => {
  return updateObject(state, {
    loading: true,
  });
};

const userAddSuccess = (state, data) => {
  return updateObject(state, {
    loading: false,
    data: data,
    error: null,
  });
};
const userAddFail = (state, error) => {
  return updateObject(state, {
    loading: false,
    error: error,
  });
};
const reducer = (state = initialState, action) => {
  const { data, error } = action;
  switch (action.type) {
    case actionTypes.ADD_NEW_USER_START:
      return userAddStart(state);
    case actionTypes.USER_SUCCESS:
      return userAddSuccess(state, data);
    case actionTypes.USER_FAIL:
      return userAddFail(state, error);
    default:
      return state;
  }
};

export default reducer;
