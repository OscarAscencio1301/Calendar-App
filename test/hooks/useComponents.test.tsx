import { act, renderHook } from '@testing-library/react'
import { useComponents } from '../../src/hooks';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { componenteSlice } from '../../src/store/compontensSlice/componentsSlice';
import { Components } from '../../src/interfaces/components';

const getStore = (initialValues: Components) => {
    return configureStore({
        reducer: {
            components: componenteSlice.reducer
        },
        preloadedState: {
            components: { ...initialValues }
        }

    })

}

describe('Testing useComponents', () => {
    test('Regresar valores por defecto ', () => {

        const newStore = getStore({ isOpenModal: false })

        const { result } = renderHook(() => useComponents(), {
            wrapper: ({ children }) => <Provider store={newStore}>{children}</Provider>
        })
        expect(result.current).toEqual( { isOpenModal: false, changeModalView: expect.any(Function)})
    });

    test('Se debe de colocar el isOpenModal en true', () => {

        const newStore = getStore({ isOpenModal: false })

        const { result } = renderHook(() => useComponents(), {
            wrapper: ({ children }) => <Provider store={newStore}>{children}</Provider>
        })
        
        const {changeModalView} = result.current

        act(() => {
            changeModalView()
        })
        expect(result.current.isOpenModal).toBeTruthy()
    });

    test('Se debe de colocar el isOpenModal en false', () => {

        const newStore = getStore({ isOpenModal: false })

        const { result } = renderHook(() => useComponents(), {
            wrapper: ({ children }) => <Provider store={newStore}>{children}</Provider>
        })
        
        const {changeModalView} = result.current

        act(() => {
            changeModalView()
            changeModalView()
        })
        expect(result.current.isOpenModal).toBeFalsy()
    });
});