import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: null,
    password: ''
  },
  reducers: {
    setUser(state, action){    
      state.email = action.payload.email
      state.password = action.payload.password
    },
    logOut(state){
      state.email = null
      state.password = ''
    }
  },
})

export const { setUser, logOut } = loginSlice.actions
export default loginSlice.reducer