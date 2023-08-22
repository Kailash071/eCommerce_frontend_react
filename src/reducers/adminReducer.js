import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const adminReducer = createSlice({
    name: "admin",
    initialState,
    reducers:{
        setAdminData(state,action){
            state.admin = action.payload
            state.adminToken = action.payload.adminToken
            localStorage.setItem('adminToken',action.payload.adminToken)
        },
        clearAdminAndToken(state) {
            // console.log('called clear admin and token')
              state.admin = null
              state.adminToken = null
              localStorage.removeItem('adminToken')
              console.log('state now after clear',state.admin,state.adminToken)
        },
        UpdateAdminData(state,action){
            console.log('UpdateUserData action.payload',action.payload)
            state.admin = action.payload
        },
        // getAdminData(state){
        //     let adminToken = localStorage.getItem('adminToken')
        //     console.log('admin',admin,'adminToken',adminToken)
        //     if (admin && admin!== 'undefined' && adminToken  !== '' ){
        //         state.admin = admin;
        //         state.adminToken= adminToken
        //     }else{
        //         state.admin = {}
        //         state.adminToken = ''
        //     }
        // }
    }
})
export const useAdminSelector = (state)=> state.adminReducer.admin
export const useAdminTokenSelector = (state)=> state.adminReducer.adminToken
export const {setAdminData,clearAdminAndToken,getAdminData,UpdateAdminData} = adminReducer.actions
export default adminReducer.reducer