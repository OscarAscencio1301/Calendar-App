import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { CalendarPage } from "../calendar"




const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/auth/*" element={<LoginPage />}/>
        <Route path="/*" element={<CalendarPage />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
