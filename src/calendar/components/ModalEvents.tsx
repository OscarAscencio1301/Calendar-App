
import Modal from 'react-modal';
import DatePicker, { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)

import './styles.css'
import "react-datepicker/dist/react-datepicker.css";
import useForm from "../../hooks/useForm";
import { addHours } from "date-fns";
import { FormEvent } from 'react';
import useComponents from '../../hooks/useComponents';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const ModalEvents = () => {

    const { isOpenModal, changeModalView } = useComponents()

    const { form, start, end, title, desc, changeEvent, changeEventDataPicker } = useForm({
        start: new Date(),
        end: addHours(new Date, 2),
        title: '',
        desc: ''
    })

    const sendFormEvent = (e: FormEvent) => {
        e.preventDefault()
        console.log(form)
    }


    return (
        <Modal
            isOpen={isOpenModal}
            onRequestClose={changeModalView}
            style={customStyles}
            className={"modal"}
            closeTimeoutMS={200}
            overlayClassName={"modal-fondo"}
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container" onSubmit={sendFormEvent}>

                <div className="form-group mb-2">
                    <label className="d-block">Fecha y hora inicio</label>
                    <DatePicker timeCaption="Hora" locale={'es'} className="form-control" showTimeSelect selected={start} dateFormat={"Pp"} onChange={(date) => date && changeEventDataPicker('start', date)} />
                </div>

                <div className="form-group mb-2">
                    <label className="d-block">Fecha y hora fin</label>
                    <DatePicker timeCaption="Hora" locale={'es'} className="form-control" showTimeSelect selected={end} dateFormat={"Pp"} minDate={start} onChange={(date) => date && changeEventDataPicker('end', date)} />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Título del evento"
                        value={title}
                        onChange={changeEvent}
                        name="title"
                        autoComplete="off"
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea
                        className="form-control"
                        placeholder="Notas"
                        rows={5}
                        value={desc}
                        onChange={changeEvent}
                        name="desc"
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}

export default ModalEvents
