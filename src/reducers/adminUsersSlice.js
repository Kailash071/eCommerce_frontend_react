import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const adminUsersAdapter = createEntityAdapter()
const initialState = adminUsersAdapter.getInitialState()

export const adminUsersApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getUsers:builder.query({
            query:()=> 'admin/users',
            transformResponse : (response) => {
                console.log('admin/users',response)
                let users = response.map(user=>{
                    user.id = user._id;
                    return user
                })
                return adminUsersAdapter.setAll(initialState,users)
            },
            providesTags:(result,error,arg)=>[
                {type:'adminUsers',id:'LIST'},
                ...result.ids.map(id=>({type:'adminUsers',id}))
            ]
        })
    })
})

export const {useGetUsersQuery} = adminUsersApiSlice;

export const selectUsersResult = adminUsersApiSlice.endpoints.getUsers.select();

const selectUsersData = createSelector(selectUsersResult,(usersResult)=>usersResult.data)

export const {
    selectAll:selectAllUsers,
    selectById:selectUsersById,
    selectIds:selectUsersIds
} = adminUsersAdapter.getSelectors((state)=>selectUsersData(state) ?? initialState)