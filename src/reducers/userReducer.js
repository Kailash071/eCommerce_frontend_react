import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const userReducer = createSlice({
    name: "user",
    initialState,
    reducers:{
        setUserData(state,action){
            console.log('action.payload',action.payload)
            state.user = action.payload.user;
            state.userToken = action.payload.userToken
            sessionStorage.setItem('user',action.payload.user)
            sessionStorage.setItem('userToken',action.payload.user)
        },
        clearUser(state) {
              state.user = initialState
        },
        getUserData(state){
            let user = sessionStorage.getItem('user')
            let userToken = sessionStorage.getItem('userToken')
            if (user && user!== 'undefined' && userToken  !== '' ){
                state.user = user;
                state.userToken= userToken
            }else{
                state.user = {}
                state.userToken = ''
            }
        }
    }
})
export const {setUserData,clearUser,getUserData} = userReducer.actions
export default userReducer.reducer