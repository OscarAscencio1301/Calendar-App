import { useComponents } from "../../hooks"



export const ButtonAdd = () => {

    const {changeModalView} = useComponents()

    return (
       <button className="btn btn-primary buttonStyle" onClick={changeModalView}><i className="fas fa-plus"></i> Agregar</button>
    )
}


