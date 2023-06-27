import { useDispatch, useSelector } from "react-redux"
import { Global } from "../interfaces/global"
import { Auth, Form, UserResponse } from "../interfaces/auth"
import { checking, errorView, login, logout } from "../store/authSlice/authSlice"
import connectAPI from "../config/axios"


export const useAuth = () => {

    const { stateAuth, error, user } = useSelector<Global, Auth>(state => state.auth)
    const dispatch = useDispatch()

    const startLogin = async (form: Form) => {
        try {

            dispatch(checking())

            const { data } = await connectAPI.post<UserResponse>('/auth/login', form)

            if (data.ok) {
                dispatch(login(data.user))
                localStorage.setItem('jwt', data.token)
            }

        } catch (error) {
            dispatch(errorView('Credenciales Incorrectas'))

            setTimeout(() => {
                dispatch(logout())
            }, 500);
        }
    }

    const startRegister = async (form: Form) => {
        try {

            dispatch(checking())

            const { data } = await connectAPI.post<UserResponse>('/users', form)

            if (data.ok) {
                dispatch(login(data.user))
                localStorage.setItem('jwt', data.token)
            }

        } catch (error) {
            dispatch(errorView('Registro Incorrecta'))

            setTimeout(() => {
                dispatch(logout())
            }, 500);
        }
    }


    const validateToken = async () => {

        const token = localStorage.getItem('jwt')

        if (!token) return dispatch(logout())
        try {

            dispatch(checking())

            const { data } = await connectAPI.get<UserResponse>('/auth/renew')

            if (data.ok) {
                dispatch(login(data.user))
                localStorage.setItem('jwt', data.token)
            }

        } catch (error) {
            localStorage.clear()
            setTimeout(() => {
                dispatch(logout())
            }, 500);
        }
    }

    const startLogout = async () => {
        localStorage.clear()
        dispatch(logout())
    }


    return {
        stateAuth,
        error,
        user,
        startLogin,
        startRegister,
        validateToken,
        startLogout
    }
}


