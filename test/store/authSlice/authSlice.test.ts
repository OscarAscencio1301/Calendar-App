import { authSlice, errorView, login, logout } from "../../../src/store/authSlice/authSlice"
import { initialState, initialStateAuthenticated, initialStateNotAuthenticated } from "./fixtures/authState"

describe('Test authSlice', () => {
  test('Estado Inicial', () => {
    expect(authSlice.getInitialState()).toEqual(initialState)
  })

  test('Realizar un login', () => {
    const state = authSlice.reducer(initialState, login(initialStateAuthenticated.user))
    expect(state).toEqual(initialStateAuthenticated)
  })

  test('Realizar un logout', () => {

    const state = authSlice.reducer(initialStateAuthenticated, logout())
    expect(state).toEqual(initialStateNotAuthenticated)
  })

  test('Realizar un errorView', () => {

    const state = authSlice.reducer(initialStateAuthenticated, errorView('Error de Credenciales'))
    expect(state.error).toBe('Error de Credenciales')
  })


})
