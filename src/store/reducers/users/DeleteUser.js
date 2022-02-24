import * as actionTypes from "../../../constants/actionTypes";
import { updateObject } from "../../../constants/utility";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const deleteUserStart = (state) => {
    return updateObject(state, {
        loading: true,
    });
};

const deleteUserSuccess = (state, data) => {
    return updateObject(state, {
        loading: false,
        data: data,
        error: null,
    });
};
const deleteUserFail = (state, error) => {
    return updateObject(state, {
        loading: false,
        error: error,
    });
};
const reducer = (state = initialState, action) => {
    const { data, error } = action;
    switch (action.type) {
        case actionTypes.DELETE_USER_START:
            return deleteUserStart(state);
        case actionTypes.DELETE_USER_SUCCESS:
            return deleteUserSuccess(state, data);
        case actionTypes.DELETE_USER_FAIL:
            return deleteUserFail(state, error);
        default:
            return state;
    }
};

export default reducer;
