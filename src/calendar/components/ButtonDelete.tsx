import Swal from "sweetalert2"
import { useCalendar } from "../../hooks"


export const ButtonDelete = () => {

  const { startDeleteEvent, eventActive, startCleanEvent } = useCalendar()

  const deleteEvent = () => {
    Swal.fire({
      title: '¿Estás seguro de eliminar el evento?',
      text: "No podŕa recuperarlo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        startDeleteEvent(eventActive?.id || 0)
        startCleanEvent()
        Swal.fire(
          'Eliminado!',
          'El vento se ha eliminado',
          'success'
        )
      }
    })
  }

  return (
    <button className="btn btn-danger buttonStyle2" onClick={deleteEvent}><i className="fas fa-trash"></i> Eliminar</button>
  )
}


