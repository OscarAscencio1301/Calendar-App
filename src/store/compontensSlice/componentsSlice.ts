import { createSlice } from "@reduxjs/toolkit";
import { Components } from "../../interfaces/components";

const initialState: Components = {
    isOpenModal: true
}


export const componenteSlice = createSlice({
    name: 'components',
    initialState,
    reducers: {
        actionModal: (state) => {
            state.isOpenModal = !state.isOpenModal
        }
    }
})

export const { actionModal } = componenteSlice.actions