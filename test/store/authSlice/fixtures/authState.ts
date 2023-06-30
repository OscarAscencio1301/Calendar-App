import { Auth, Form } from "../../../../src/interfaces/auth";

export const initialState: Auth = {
    stateAuth: 'pending',
    user: null,
    error: null
}


export const initialStateAuthenticated: Auth = {
    stateAuth: 'login',
    user: {
        id: '123',
        name: 'Oscar',
        email: 'oscar@gmal.com',
        status: true
    },
    error: null
}


export const initialStateNotAuthenticated: Auth = {
    stateAuth: 'logout',
    user: null,
    error: null
}

export const testUserLogin: Form = {
    email: "oscar11@oscar.com",
    password: "123456"
}

