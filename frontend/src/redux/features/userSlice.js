import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  //userName: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action)=>{
      state.user = action.payload.user
      state.userName = action.payload.userName
      //state.userEmail = action.payload.userEmail
    },
    setUserLogOutState: state => {
      state.user = null
      //state.userName = null
      //state.userEmail = null
    }
  },
});

export const {setActiveUser, setUserLogOutState} = userSlice.actions

export const selectUser = state => state.user.user
export const selectUserName = state => state.user.userName
//export const selectUserEmail = state => state.user.userEmail

export default userSlice.reducer
