import { useDispatch, useSelector } from "react-redux"
import { Global } from "../interfaces/global"
import { Components } from "../interfaces/components"
import { actionModal } from "../store/compontensSlice/componentsSlice"


export const useComponents = () => {
    const dispatch = useDispatch()
    const { isOpenModal } = useSelector<Global, Components>(state => state.components)

    const changeModalView = () => {
        dispatch(actionModal())
    }

    return {
        isOpenModal,
        changeModalView
    }
}


