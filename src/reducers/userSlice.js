import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const userAdapter = createEntityAdapter()

userAdapter.getInitialState()

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
      getUserByToken:builder.query({
        query:(userToken)=>`getUser/?userToken=${userToken?userToken:''}`,
        // transformResponse:(responseData)=>{
        //   console.log('repsonse-->',responseData)
        //   //      return userAdapter.setAll(initialState,responseData)
        // },
        // invalidatesTags:[{type:'User',id:'LIST'}]
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
       }),
       deleteAccount : builder.mutation({
        query:(data)=>({
          url:'/userDelete',
          method:"POST",
          body:data
        })
       }),
       sendLoginOtp : builder.mutation({
        query:(data)=>({
          url:'/sendLoginOtp',
          method:"POST",
          body:data
        })
       }),
       verifyLoginOtp : builder.mutation({
        query:(data)=>({
          url:'/verifyLoginOtp',
          method:"POST",
          body:data
        })
       }),
       forgetPassword : builder.mutation({
        query:(data)=>({
          url:'/forgetPassword',
          method:"POST",
          body:data
        })
       })
    })
})

export const {useGetUserQuery,useLoginMutation,useRegisterMutation,useUpdateProfileMutation,useUpdatePasswordMutation,useGoogleAuthMutation,useDeleteAccountMutation,useGetUserByTokenQuery,useSendLoginOtpMutation,useVerifyLoginOtpMutation,useForgetPasswordMutation} = userApiSlice;
