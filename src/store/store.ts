import { configureStore } from "@reduxjs/toolkit";
import { componenteSlice } from "./compontensSlice/componentsSlice";
import { calendarSlice } from "./calendarSlice/calendarSlice";
import { authSlice } from "./authSlice/authSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        components: componenteSlice.reducer,
        calendar: calendarSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})