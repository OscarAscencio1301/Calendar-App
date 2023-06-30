
import { actionModal, componenteSlice } from "../../../src/store/compontensSlice/componentsSlice"

describe('Pruebas en uiSlice', () => {
    test('debe retornar el estado por defecto ', () => {
        expect(componenteSlice.getInitialState().isOpenModal).toBe(false)
    })

    test('debe modificar el estado de una propiedad', () => {

        const initialState = componenteSlice.getInitialState();

        const state = componenteSlice.reducer(initialState, actionModal());
      
        expect(state.isOpenModal).toBe(true);
    });
    
})
