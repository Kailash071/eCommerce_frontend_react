import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const adminAdapter = createEntityAdapter()

adminAdapter.getInitialState()

export const adminApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
      adminLogin:builder.mutation({
        query:(loginData)=>({
            url:'admin/login',
            method:'POST',
            body:loginData
        }),
        providesTags:[{type:'Admin',id:'LIST'}]
      }),
      getAdminByToken:builder.query({
        query:(adminToken)=>`admin/getAdmin/?adminToken=${adminToken?adminToken:''}`,
        // transformResponse:(responseData)=>{
        //   console.log('repsonse-->',responseData)
        //   //      return adminAdapter.setAll(initialState,responseData)
        // },
        // invalidatesTags:[{type:'Admin',id:'LIST'}]
      }),
       updateProfile: builder.mutation({
        query:(updateData)=>({
             url:'admin/updateProfile',
             method:"POST",
             body:updateData
         }),
        invalidatesTags:[{type:'Admin',id:'LIST'}]
       }),
       updatePassword: builder.mutation({
        query:(updateData)=>({
             url:'admin/updatePassword',
             method:"POST",
             body:updateData
         }),
        invalidatesTags:[{type:'Admin',id:'LIST'}]
       }),
        forgetPassword : builder.mutation({
        query:(data)=>({
          url:'admin/forgetPassword',
          method:"POST",
          body:data
        })
       })
    })
})

export const {useAdminLoginMutation,useGetAdminByTokenQuery,useUpdateProfileMutation,useUpdatePasswordMutation,useForgetPasswordMutation} = adminApiSlice;
