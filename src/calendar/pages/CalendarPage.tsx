import { Calendar, View } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { localizer } from '../../helpers/calendarLocalizer'



import { Navbar } from ".."
import { getMessages } from '../../helpers/messages'
import CalendarEvent, { PropsEvent } from '../components/CalendarEvent'
import { useState } from 'react'
import ModalEvents from '../components/ModalEvents'

const myEventsList = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2023, 3, 10),
    end: new Date(2023, 3, 10),
    user: {
      id: 1234,
      username: 'Oscaer'
    }
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2023, 3, 10),
    end: new Date(2023, 3, 10),
    user: {
      id: 1234,
      username: 'Oscaer'
    }
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2023, 3, 10),
    end: new Date(2023, 3, 10),
    user: {
      id: 1234,
      username: 'Oscaer'
    }
  },
]

const onDoubleClick = (event: PropsEvent) => {
  console.log({ dobule: event })
}

const onSelect = (event: PropsEvent) => {
  console.log({ select: event })
}








export const CalendarPage = () => {

  const [viewCurrent, setviewCurrent] = useState<View>('month')

  const onViewChange = (view: View) => {
    localStorage.setItem('view', view)
    setviewCurrent(view)
    console.log(view)
  }


  return (
    <>
      <Navbar />
      <ModalEvents />
      <Calendar
        culture={'es'}
        localizer={localizer}
        defaultView={viewCurrent}
        events={myEventsList}
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


