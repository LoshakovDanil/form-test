import { Navigate, Route, Routes } from "react-router-dom"
import { LoginForm } from "./components/LoginForm/LoginForm"
import { HomePage } from "./components/HomePage/HomePage"

export const RouterPage = () =>{
  return(
    <Routes>
      <Route index element={<Navigate to={'login'} />} />
      <Route path={'/login'} element={<LoginForm />} />
      <Route path={'/home'} element={<HomePage />} />
    </Routes>
  )
}