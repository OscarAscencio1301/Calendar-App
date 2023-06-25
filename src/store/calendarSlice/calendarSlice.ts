import { createSlice } from "@reduxjs/toolkit";
import { Calendars } from "../../interfaces/calendar";

export const initialState: Calendars = {
    events: [],
    eventActive: null
}


export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        addEvent: (state, action) => {
            state.events.push(action.payload)
        },
        activeEvent: (state, action) => {
            state.eventActive = action.payload
        },
        updateEvent: (state, action) => {
            state.events = state.events.map(event => event.id === action.payload.id ? action.payload : event)
        },
        deleteEvent: (state, action) => {
            state.events = state.events.filter(event => event.id !== action.payload)
        },
        cleanEvent: (state) => {
            state.eventActive = null
        }
    }
})

export const { addEvent, activeEvent, cleanEvent, deleteEvent, updateEvent } = calendarSlice.actions