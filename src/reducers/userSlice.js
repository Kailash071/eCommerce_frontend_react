import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const userAdapter = createEntityAdapter()

const initialState = userAdapter.getInitialState()

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
      register: builder.mutation({
       query:(registerData)=>({
            url:'/register',
            method:"POST",
            body:registerData
        })
      }),
      login:builder.mutation({
        query:(loginData)=>({
            url:'/login',
            method:'POST',
            body:loginData
        }),
        providesTags:[{type:'User',id:'LIST'}]
      }),
      getUser:builder.query({
        query:(userId)=>`getUser/?userId=${userId}`,
        transformResponse:(responseData)=>{
            return userAdapter.setAll(initialState,responseData)
        },
        invalidatesTags:[{type:'User',id:'LIST'}]
      }),
    })
})

export const {useGetUserQuery,useLoginMutation,useRegisterMutation} = userApiSlice;
