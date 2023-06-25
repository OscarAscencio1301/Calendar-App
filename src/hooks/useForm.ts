import { ChangeEvent, useState } from "react"


export const useForm = <T>(initialState: T) => {

    const [form, setform] = useState(initialState)

    const changeEvent = ({ target: { name, value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        setform({
            ...form,
            [name]: value
        })

    }

    const changeEventDataPicker = (name: string, value: Date) => {
        setform({
            ...form,
            [name]: value
        })
    }

    const resetValues = () => {
        setform(initialState)
    }

    return {
        ...form,
        form,
        setform,
        changeEvent,
        changeEventDataPicker,
        resetValues
    }
}


