import * as actionTypes from '../../../constants/actionTypes';
import { editUser } from "../api";

const editUserStart = () => {
    return {
        type: actionTypes.EDIT_USER_START
    };
}
const editUserSuccess = (data) => {
    return {
        type: actionTypes.EDIT_USER_SUCCESS,
        data: data,
    };
}

const editUserFail = (error) => {
    return {
        type: actionTypes.EDIT_USER_FAIL,
        error: error,
    };
}

export const editUserAction = (formData, userId) => {
    return async (dispatch) => {
        dispatch(editUserStart());
        try {
            let response = await editUser(formData, userId);
            return dispatch(editUserSuccess(response.data));
        } catch (err) {
            return dispatch(editUserFail({ message: err.message }));
        }
    };
}