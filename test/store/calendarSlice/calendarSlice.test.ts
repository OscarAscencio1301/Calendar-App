import { activeEvent, addEvent, calendarSlice, cleanEvent, deleteEvent, logoutEvents, updateEvent, viewEvent } from "../../../src/store/calendarSlice/calendarSlice";
import { events, initialStateCalendar, initialStateCalendarActive, initialStateCalendarInitial } from "./fixtures/calendar";

describe('Testing calendarSlice', () => {

    test('Valores Iniciales ', () => {
        expect(calendarSlice.getInitialState()).toEqual(initialStateCalendar)
    })

    test('Valores Iniciales despues de cargarlos ', () => {

        const state = calendarSlice.reducer(initialStateCalendar, viewEvent(events))

        expect(state).toEqual(initialStateCalendarInitial)
    })

    test('Activar un evento', () => {

        const state = calendarSlice.reducer(initialStateCalendarInitial, activeEvent(events[0]))

        expect(state).toEqual(initialStateCalendarActive)
    })

    test('Agregar un Evento', () => {

        const newEvent = {
            id: 123,
            title: 'Evento 1',
            desc: 'Nota',
            start: new Date('2023-11-05 13:00:00'),
            end: new Date('2023-11-05 13:00:00'),
        }

        const state = calendarSlice.reducer(initialStateCalendarInitial, addEvent(newEvent))

        expect(state.events.length).toBe(3)
        expect(state.events).toEqual([...events, newEvent])
    })

    test('Eliminar un Evento', () => {

        const state = calendarSlice.reducer(initialStateCalendarInitial, deleteEvent(123))

        expect(state.events.length).toBe(1)
    })

    test('Actualizar un Event', () => {

        const updateEvents = {
            id: 123,
            title: 'Evento 1',
            desc: 'Nota',
            start: new Date('2023-11-05 13:00:00'),
            end: new Date('2023-11-05 13:00:00'),
        }

        const state = calendarSlice.reducer(initialStateCalendarInitial, updateEvent(updateEvents))

        expect(state.events).toContain(updateEvents)
    })

    test('Limpiar un Evento', () => {

        const state = calendarSlice.reducer(initialStateCalendarActive, cleanEvent())

        expect(state.eventActive).toBeFalsy()
    })

    test('Logout Eventos', () => {

        const state = calendarSlice.reducer(initialStateCalendarInitial, logoutEvents())

        expect(state.events.length).toBe(0)
    })


});