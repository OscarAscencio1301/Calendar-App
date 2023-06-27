import { FormEvent, useEffect } from 'react'
import { useAuth, useForm } from '../../hooks'
import './login.css'
import Swal from 'sweetalert2'

const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
}

const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: '',
}


export const LoginPage = () => {
    const { loginEmail, loginPassword, changeEvent: changeEventLogin } = useForm(loginFormFields)
    const { registerEmail, registerName, registerPassword, registerPassword2, changeEvent: changeEventRegister } = useForm(registerFormFields)
    const { startLogin, startRegister, error } = useAuth()


    const onSubmitLogin = (e: FormEvent) => {
        e.preventDefault()
        startLogin({ email: loginEmail, password: loginPassword })
    }

    const onSubmitRegister = (e: FormEvent) => {
        e.preventDefault()
        if(registerPassword !== registerPassword2) return Swal.fire('Las contraseñas no coinciden', 'Revisa las contraseñas', 'error')
        startRegister({ name: registerName, email: registerEmail, password: registerPassword })
    }

    useEffect(() => {
        if (error) {
            Swal.fire(error, 'Revisa la infromación', 'error')
        }
    }, [error])



    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={onSubmitLogin}>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                name='loginEmail'
                                value={loginEmail}
                                onChange={changeEventLogin}
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='loginPassword'
                                value={loginPassword}
                                onChange={changeEventLogin}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={onSubmitRegister}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name='registerName'
                                value={registerName}
                                onChange={changeEventRegister}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name='registerEmail'
                                value={registerEmail}
                                onChange={changeEventRegister}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='registerPassword'
                                value={registerPassword}
                                onChange={changeEventRegister}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name='registerPassword2'
                                value={registerPassword2}
                                onChange={changeEventRegister}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

