import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const userReducer = createSlice({
    name: "user",
    initialState,
    reducers:{
        setUserData(state,action){
            console.log('action.payload',action.payload)
            state.user = action.payload
            state.userToken = action.payload.userToken
            localStorage.setItem('user',JSON.stringify(action.payload))
            localStorage.setItem('userToken',action.payload.userToken)
        },
        clearUserAndToken(state) {
            // console.log('called clear user and token')
              state.user = null
              state.userToken = null
              localStorage.removeItem('user')
              localStorage.removeItem('userToken')
              console.log('state now after clear',state.user,state.userToken)
        },
        UpdateUserData(state,action){
            console.log('UpdateUserData action.payload',action.payload)
            state.user = action.payload
            localStorage.setItem('user',JSON.stringify(action.payload))
        },
        // getUserData(state){
        //     let user = localStorage.getItem('user')
        //     let userToken = localStorage.getItem('userToken')
        //     console.log('user',user,'userToken',userToken)
        //     if (user && user!== 'undefined' && userToken  !== '' ){
        //         state.user = user;
        //         state.userToken= userToken
        //     }else{
        //         state.user = {}
        //         state.userToken = ''
        //     }
        // }
    }
})
export const useUserSelector = (state)=> state.userReducer.user
export const useUserTokenSelector = (state)=> state.userReducer.userToken
export const {setUserData,clearUserAndToken,getUserData,UpdateUserData} = userReducer.actions
export default userReducer.reducer