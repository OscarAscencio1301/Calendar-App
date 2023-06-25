import { useState } from 'react'
import { Calendar, View } from 'react-big-calendar'
import { localizer } from '../../helpers/calendarLocalizer'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { ButtonAdd, ButtonDelete, CalendarEvent, ModalEvents, Navbar } from ".."
import { getMessages } from '../../helpers/messages'
import { useCalendar, useComponents } from '../../hooks'
import { Event } from '../../interfaces/calendar'


export const CalendarPage = () => {

  const [viewCurrent, setviewCurrent] = useState<View>('month')
  const { events, startActiveEvent } = useCalendar()
  const { changeModalView } = useComponents()

  const onViewChange = (view: View) => {
    localStorage.setItem('view', view)
    setviewCurrent(view)
  }

  const onDoubleClick = (event: Event) => {
    startActiveEvent(event)
    changeModalView()
  }

  const onSelect = (event: Event) => {
    startActiveEvent(event)
  }



  return (
    <>
      <Navbar />
      <ButtonAdd />
      <ButtonDelete />
      <ModalEvents />
      <Calendar
        culture={'es'}
        localizer={localizer}
        defaultView={viewCurrent}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={getMessages()}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
        style={{ height: 'calc(100vh - 80px)' }}
        components={{
          event: CalendarEvent
        }}
      />
    </>
  )
}


