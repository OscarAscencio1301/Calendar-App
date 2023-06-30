import { useCalendar } from "../../hooks"


export const ButtonDelete = () => {

  const { startDeleteEvent, eventActive, viewDelete } = useCalendar()

  const deleteEvent = () => {
    startDeleteEvent(eventActive?.id || 0)

  }

  return (
    <button aria-label="btn-delete" style={{ display: `${viewDelete ? '' : 'none'}` }} className="btn btn-danger buttonStyle2" onClick={deleteEvent}><i className="fas fa-trash"></i> Eliminar</button>
  )
}


