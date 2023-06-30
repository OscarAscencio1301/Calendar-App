import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { CalendarPage } from "../calendar"
import { useAuth } from "../hooks"
import { useEffect } from "react"




const AppRoutes = () => {

  const { stateAuth, validateToken } = useAuth()

  useEffect(() => {
    validateToken()
  }, [])


  if (stateAuth === 'pending') return (<h1>Cargando....</h1>)


  return (
    // <BrowserRouter>
      <Routes>
        {
          stateAuth === 'logout' ?
            <>
              <Route path="/auth/*" element={<LoginPage />} />
              <Route path="/*" element={<Navigate to={'/auth/login'} />} />

            </>
            :
            <>
              <Route path="/" element={<CalendarPage />} />
              <Route path="/*" element={<Navigate to={'/'} />} />

            </>
        }
      </Routes>
    // </BrowserRouter>
  )
}

export default AppRoutes
