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
        viewEvent: (state, action) => {
            state.events = action.payload
            state.eventActive = null
        },
        addEvent: (state, action) => {
            state.events.push(action.payload)
            state.eventActive = null
        },
        activeEvent: (state, action) => {
            state.eventActive = action.payload
        },
        updateEvent: (state, action) => {
            state.events = state.events.map(event => event.id === action.payload.id ? action.payload : event)
        },
        deleteEvent: (state, action) => {
            state.events = state.events.filter(event => event.id !== action.payload)
            state.eventActive = null
        },
        cleanEvent: (state) => {
            state.eventActive = null
        },
        logoutEvents: (state) => {
            state.eventActive = null
            state.events = []
        }
    }
})

export const { addEvent, activeEvent, cleanEvent, deleteEvent, updateEvent, viewEvent, logoutEvents } = calendarSlice.actions