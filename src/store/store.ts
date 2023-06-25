import { configureStore } from "@reduxjs/toolkit";
import { componenteSlice } from "./compontensSlice/componentsSlice";
import { calendarSlice } from "./calendarSlice/calendarSlice";

export const store = configureStore({
    reducer: {
        components: componenteSlice.reducer,
        calendar: calendarSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})