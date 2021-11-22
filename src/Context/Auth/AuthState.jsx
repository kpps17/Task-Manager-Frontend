import axios from "axios";
import { useReducer } from "react";
import { CLEAR_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAIL, SIGNUP_SUCCESS } from "../types";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";

const AuthState = ({children}) => {

    const initState = {
        user: null,
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        error: null,
    }

    const [state, dispatch] = useReducer(AuthReducer, initState);

    const signup = async (userDetails) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        try {
            const res = await axios('/user', userDetails, config);
            if (res.data.token) {
                localStorage.setItem('token',res.data.token);
                dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
            } else {
                dispatch({ type: SIGNUP_FAIL, payload: res.data.error });
            }
        } catch (err) {
            dispatch({ type: SIGNUP_FAIL, payload: err.response.data.msg });
        }
    }

    const login = async (userDetails) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        try {
            const res = await axios('/user/login', userDetails, config);
            if (res.data.token) {
                localStorage.setItem('token',res.data.token);
                dispatch({ type: LOGIN_SUCCESS, payload: res.data });
            } else {
                dispatch({ type: LOGIN_FAIL, payload: res.data.error });
            }
        } catch (err) {
            dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
        }
    }

    const logout = () => {
        dispatch({ type: LOGOUT });
    }

    const clearError = () => {
        dispatch({ type: CLEAR_ERROR })
    }

    const value = {
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        signup, 
        login,
        logout,
        clearError 
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthState;