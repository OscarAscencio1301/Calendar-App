import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "../../interfaces/auth";

export const initialState: Auth = {
    stateAuth: 'pending',
    user: null,
    error: null
}

export const authSlice = createSlice({
    name: 'auth Slice',
    initialState,
    reducers: {
        checking: (state) => {
            state.stateAuth = 'pending'
            state.user = null
            state.error = null
        },
        login: (state, action) => {
            state.stateAuth = 'login'
            state.user = action.payload
        },
        logout: (state) => {
            state.stateAuth = 'logout'
            state.user = null
            state.error = null
        },
        errorView: (state, action) => {
            state.stateAuth = 'logout'
            state.user = null
            state.error = action.payload
        },

    }
})


export const { checking, login, logout, errorView } = authSlice.actions