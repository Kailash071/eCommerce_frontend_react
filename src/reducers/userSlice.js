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
      getUserById:builder.query({
        query:(userId)=>`getUser/?userId=${userId}`,
        transformResponse:(responseData)=>{
            return userAdapter.setAll(initialState,responseData)
        },
        invalidatesTags:[{type:'User',id:'LIST'}]
      }),
      updateProfile: builder.mutation({
        query:(updateData)=>({
             url:'/updateProfile',
             method:"POST",
             body:updateData
         }),
        invalidatesTags:[{type:'User',id:'LIST'}]
       }),
       updatePassword: builder.mutation({
        query:(updateData)=>({
             url:'/updatePassword',
             method:"POST",
             body:updateData
         }),
        invalidatesTags:[{type:'User',id:'LIST'}]
       }),
       googleAuth : builder.mutation({
        query:(authData)=>({
          url:'/auth/google',
          method:"POST",
          body:authData
        })
       })
    })
})

export const {useGetUserQuery,useLoginMutation,useRegisterMutation,useUpdateProfileMutation,useUpdatePasswordMutation,useGoogleAuthMutation} = userApiSlice;
