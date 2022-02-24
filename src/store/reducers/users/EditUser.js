import * as actionTypes from "../../../constants/actionTypes";
import { updateObject } from "../../../constants/utility";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const userEditStart = (state) => {
    return updateObject(state, {
        loading: true,
    });
};

const userEditSuccess = (state, data) => {
    return updateObject(state, {
        loading: false,
        data: data,
        error: null,
    });
};
const userEditFail = (state, error) => {
    return updateObject(state, {
        loading: false,
        error: error,
    });
};
const reducer = (state = initialState, action) => {
    const { data, error } = action;
    switch (action.type) {
        case actionTypes.EDIT_USER_START:
            return userEditStart(state);
        case actionTypes.EDIT_USER_SUCCESS:
            return userEditSuccess(state, data);
        case actionTypes.EDIT_USER_FAIL:
            return userEditFail(state, error);
        default:
            return state;
    }
};

export default reducer;
