import Swal from "sweetalert2"
import { useCalendar } from "../../hooks"


export const ButtonDelete = () => {

  const { startDeleteEvent, eventActive, viewDelete } = useCalendar()

  const deleteEvent = () => {
    Swal.fire({
      title: '¿Estás seguro de eliminar el evento?',
      text: "No podŕa recuperarlo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await startDeleteEvent(eventActive?.id || 0)
        Swal.fire(
          'Eliminado!',
          'El vento se ha eliminado',
          'success'
        )
      }
    })
  }

  return (
    <button style={{ display: `${viewDelete ? '' : 'none'}` }} className="btn btn-danger buttonStyle2" onClick={deleteEvent}><i className="fas fa-trash"></i> Eliminar</button>
  )
}


