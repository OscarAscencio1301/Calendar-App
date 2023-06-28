import { useDispatch, useSelector } from "react-redux"
import { Global } from "../interfaces/global"
import { Calendars, Event, EventResponse, EventResponseMultiple } from "../interfaces/calendar"
import { activeEvent, addEvent, cleanEvent, deleteEvent, updateEvent, viewEvent } from "../store/calendarSlice/calendarSlice"
import connectAPI from "../config/axios"


export const useCalendar = () => {
    const { events, eventActive } = useSelector<Global, Calendars>(state => state.calendar)
    const dispatch = useDispatch()

    const startEvent = async (event: Event) => {
        try {

            if (event.id) {
                const { data } = await connectAPI.put<EventResponse>(`/events/${event.id}`, event)

                if (data.ok) {
                    dispatch(updateEvent({ ...event, id: data.event.id }))
                }

                return

            }



            const { data } = await connectAPI.post<EventResponse>('/events', event)

            if (data.ok) {
                dispatch(addEvent({ ...event, id: data.event.id }))
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

            const { data } = await connectAPI.delete<EventResponse>(`/events/${id}`)
            if (data.ok) {
                dispatch(deleteEvent(id))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const startView = async () => {
        try {

            const { data } = await connectAPI.get<EventResponseMultiple>(`/events`)

            if (data.ok) {
                const eventsDates = data.events.map(ev => ({
                    id: ev.id,
                    start: new Date(ev.start),
                    end: new Date(ev.end),
                    title: ev.title,
                    desc: ev.desc
                }))

                dispatch(viewEvent(eventsDates))
            }
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
        startEvent,
        startView
    }
}


