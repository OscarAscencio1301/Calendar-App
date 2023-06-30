import { renderHook, waitFor } from "@testing-library/react"
import { useAuth } from "../../src/hooks"
import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "../../src/store/authSlice/authSlice"
import { Auth, Form, UserResponse } from "../../src/interfaces/auth"
import { Provider } from "react-redux"
import { initialState, initialStateNotAuthenticated } from "../store/authSlice/fixtures/authState"
import { act } from "react-dom/test-utils"
import connectAPI from "../../src/config/axios"


const getStore = (initialState: Auth) => {
    return configureStore({
        reducer: {
            auth: authSlice.reducer
        },
        preloadedState: {
            auth: initialState
        }
    })
}


describe('Testing useAuth', () => {

    beforeEach(() => localStorage.clear())

    test('Valores Iniciales ', () => {

        const newState = getStore(initialState)

        const { result } = renderHook(() => useAuth(), {
            wrapper: ({ children }) => <Provider store={newState}>{children}</Provider>
        })
        expect(result.current).toEqual({
            stateAuth: 'pending',
            error: null,
            user: null,
            startLogin: expect.any(Function),
            startRegister: expect.any(Function),
            validateToken: expect.any(Function),
            startLogout: expect.any(Function)
        })

    })

    test('Start Login, debe de realizar el login correctamente', async () => {

        const testUserLog: Form = {
            email: "oscar11@oscar.com",
            password: "123456"
        }

        const newState = getStore(initialStateNotAuthenticated)

        const { result } = renderHook(() => useAuth(), {
            wrapper: ({ children }) => <Provider store={newState}>{children}</Provider>
        })

        await act(async () => {
            await result.current.startLogin(testUserLog)
        })

        const { stateAuth, user, error } = result.current
        expect({ stateAuth, user, error }).toEqual({
            stateAuth: 'login',
            error: null,
            user: {
                name: 'Oscar Ethian',
                email: 'oscar11@oscar.com',
                status: true,
                id: '649a90acff3dab6f27029c2c'
            }
        })

        expect(localStorage.getItem('jwt')).toBeTruthy()

    })

    test('start login Invalid Credentials', async () => {

        const testUserLoginError: Form = {
            email: "error@oscar.com",
            password: "123456"
        }


        const newState = getStore(initialStateNotAuthenticated)

        const { result } = renderHook(() => useAuth(), {
            wrapper: ({ children }) => <Provider store={newState}>{children}</Provider>
        })

        await act(async () => {
            await result.current.startLogin(testUserLoginError)
        })

        const { stateAuth, error, user } = result.current

        expect({ stateAuth, error, user }).toEqual({
            stateAuth: 'logout',
            error: 'Credenciales Incorrectas',
            user: null
        })

        await waitFor(() => expect(result.current.error).toBe(null))
    })


    test('Start Register, debe de realizar el login correctamente', async () => {

        const testUserLoginError: Form = {
            name: 'OscarTest',
            email: "nuevoUser@oscar.com",
            password: "123456"
        }


        const newState = getStore(initialStateNotAuthenticated)

        const { result } = renderHook(() => useAuth(), {
            wrapper: ({ children }) => <Provider store={newState}>{children}</Provider>
        })

        const spy = jest.spyOn(connectAPI, 'post').mockReturnValue(
            Promise.resolve({

                data: {
                    "ok": true,
                    "msg": "ok",
                    "user": {
                        "name": "Oscarcinho",
                        "email": "oscars1@oscar.com",
                        "status": true,
                        "id": "649e7f324f1c53bb629bdb29"
                    },
                    "token": "valor token"
                }
            })
        )


        await act(async () => {
            await result.current.startRegister(testUserLoginError)
        })



        const { stateAuth, error, user } = result.current

        expect({ stateAuth, error, user }).toEqual({
            stateAuth: 'login',
            error: null,
            user: {
                name: 'Oscarcinho',
                email: 'oscars1@oscar.com',
                status: true,
                id: '649e7f324f1c53bb629bdb29'
            }
        })

        spy.mockRestore()


    });

    test('start register Invalid Credentials', async () => {

        const testUserLog: Form = {
            name: 'oscar',
            email: "oscar11@oscar.com",
            password: "123456"
        }

        const newState = getStore(initialStateNotAuthenticated)

        const { result } = renderHook(() => useAuth(), {
            wrapper: ({ children }) => <Provider store={newState}>{children}</Provider>
        })

        await act(async () => {
            await result.current.startRegister(testUserLog)
        })

        const { stateAuth, error, user } = result.current

        expect({ stateAuth, error, user }).toEqual({
            stateAuth: 'logout',
            error: 'Registro Incorrecta',
            user: null
        })

        await waitFor(() => expect(result.current.error).toBe(null))
    })



    test('validateToken Invalid', async () => {

        const newState = getStore(initialStateNotAuthenticated)

        const { result } = renderHook(() => useAuth(), {
            wrapper: ({ children }) => <Provider store={newState}>{children}</Provider>
        })

        await act(async () => {
            await result.current.validateToken()
        })

        const { stateAuth, error, user } = result.current

        expect({ stateAuth, error, user }).toEqual({
            stateAuth: 'logout',
            error: null,
            user: null
        })

    })

    test('validateToken Invalid', async () => {

        const newState = getStore(initialStateNotAuthenticated)

        const { result } = renderHook(() => useAuth(), {
            wrapper: ({ children }) => <Provider store={newState}>{children}</Provider>
        })

        await act(async () => {
            await result.current.validateToken()
        })

        const { stateAuth, error, user } = result.current

        expect({ stateAuth, error, user }).toEqual({
            stateAuth: 'logout',
            error: null,
            user: null
        })

    })

    test('validateToken', async () => {

        const testUserLog: Form = {
            name: 'oscar',
            email: "oscar11@oscar.com",
            password: "123456"
        }

        const {data} = await connectAPI.post<UserResponse>('/auth/login', testUserLog)

        localStorage.setItem('jwt', data.token)

        const newState = getStore(initialStateNotAuthenticated)

        const { result } = renderHook(() => useAuth(), {
            wrapper: ({ children }) => <Provider store={newState}>{children}</Provider>
        })

        await act(async () => {
            await result.current.validateToken()
        })

        const { stateAuth, error, user } = result.current

        expect({ stateAuth, error, user }).toEqual({
            stateAuth: 'login',
            error: null,
            user: {
              name: 'Oscar Ethian',
              email: 'oscar11@oscar.com',
              status: true,
              id: '649a90acff3dab6f27029c2c'
            }
        })

    })



})