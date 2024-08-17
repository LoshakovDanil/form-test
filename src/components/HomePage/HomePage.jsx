import { useDispatch, useSelector } from "react-redux"
import { logOut } from "../../redux-toolkit/loginSlice"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const HomePage = () =>{
  const email = useSelector(state => state.login.email)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const click = () =>{
    dispatch(logOut())
  }
  useEffect(()=> {
    if(!email){
      navigate('/login')
    }
  }, [email])
  
  return (
    <div>
      <div>
        Добро пожаловать, {email}
      </div>
      <button onClick={click}>
      Logout
      </button>
    </div>
  )
}