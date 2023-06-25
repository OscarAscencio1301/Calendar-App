import { useDispatch, useSelector } from "react-redux"
import { Global } from "../interfaces/global"
import { Calendars, Event } from "../interfaces/calendar"
import { activeEvent, addEvent, cleanEvent, deleteEvent, updateEvent } from "../store/calendarSlice/calendarSlice"


export const useCalendar = () => {
    const { events, eventActive } = useSelector<Global, Calendars>(state => state.calendar)
    const dispatch = useDispatch()

    const startEvent = async (event: Event) => {
        try {

            if (event.id) {
                dispatch(updateEvent(event))
            } else {
                dispatch(addEvent({ id: Date.now(), ...event }))

            }

        } catch (error) {
            console.log(error)
        }
    }

    const startActiveEvent = async (event: Event) => {

        dispatch(activeEvent(event))
    }


    const startDeleteEvent = async (id: number) => {
        try {
            dispatch(deleteEvent(id))
        } catch (error) {
            console.log(error)
        }
    }

    const startCleanEvent = async () => {
        dispatch(cleanEvent())

    }

    return {
        events,
        eventActive,
        viewDelete: !!eventActive,
        startActiveEvent,
        startCleanEvent,
        startDeleteEvent,
        startEvent
    }
}


