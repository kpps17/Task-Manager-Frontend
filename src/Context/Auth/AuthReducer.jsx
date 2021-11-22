import { CLEAR_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAIL, SIGNUP_SUCCESS } from "../types";

export const AuthReducer = (state, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            return {
                ...state, 
                ...action.payload,
                isAuthenticated: true,
            };
        case LOGIN_FAIL:
        case SIGNUP_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state, 
                ...action.payload,
                isAuthenticated: false,
                user: null,
                token: null,
                error: action.payload,
            };
        case CLEAR_ERROR:
            return {
                ...state, 
                error: null,
            };
    }
}