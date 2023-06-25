import { configureStore } from "@reduxjs/toolkit";
import { componenteSlice } from "./compontensSlice/componentsSlice";

export const store = configureStore({
    reducer: {
        components: componenteSlice.reducer
    }
})