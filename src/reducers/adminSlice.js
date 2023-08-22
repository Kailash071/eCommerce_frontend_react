import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const adminAdapter = createEntityAdapter()

adminAdapter.getInitialState()

export const adminApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
      adminLogin:builder.mutation({
        query:(loginData)=>({
            url:'/login',
            method:'POST',
            body:loginData
        }),
        providesTags:[{type:'Admin',id:'LIST'}]
      }),
      getAdminByToken:builder.query({
        query:(adminToken)=>`getAdmin/?adminToken=${adminToken?adminToken:''}`,
        // transformResponse:(responseData)=>{
        //   console.log('repsonse-->',responseData)
        //   //      return adminAdapter.setAll(initialState,responseData)
        // },
        // invalidatesTags:[{type:'Admin',id:'LIST'}]
      }),
    })
})

export const {useAdminLoginMutation,useGetAdminByTokenQuery} = adminApiSlice;
