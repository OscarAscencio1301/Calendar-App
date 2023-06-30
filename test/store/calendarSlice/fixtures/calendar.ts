import { Calendars, Event } from "../../../../src/interfaces/calendar";

export const events:Event[] = [
    {
        id: 123,
        title: 'Evento 1',
        desc: 'Nota',
        start: new Date('2023-11-05 13:00:00'),
        end: new Date('2023-11-05 13:00:00'),
    },
    {
        id: 456,
        title: 'Evento 2',
        desc: 'Nota',
        start: new Date('2023-11-09 13:00:00'),
        end: new Date('2023-11-09 13:00:00'),
    },
]


export const initialStateCalendar: Calendars = {
    events: [],
    eventActive: null
}

export const initialStateCalendarInitial: Calendars = {
    events: [...events],
    eventActive: null
}

export const initialStateCalendarActive: Calendars = {
    events: [...events],
    eventActive: events[0]
}