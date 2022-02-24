import * as actionTypes from "../../../constants/actionTypes";
import { updateObject } from "../../../constants/utility";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const userfetchStart = (state) => {
  return updateObject(state, {
    loading: true,
  });
};

const userfetchSuccess = (state, data) => {
  return updateObject(state, {
    loading: false,
    data: data,
    error: null,
  });
};
const userfetchFail = (state, error) => {
  return updateObject(state, {
    loading: false,
    error: error,
  });
};
const reducer = (state = initialState, action) => {
  const { data, error } = action;
  switch (action.type) {
    case actionTypes.USER_START:
      return userfetchStart(state);
    case actionTypes.USER_SUCCESS:
      return userfetchSuccess(state, data);
    case actionTypes.USER_FAIL:
      return userfetchFail(state, error);
    default:
      return state;
  }
};

export default reducer;
