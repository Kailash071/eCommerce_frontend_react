import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const adminCategorysAdapter = createEntityAdapter()
const initialState = adminCategorysAdapter.getInitialState()

export const adminCategorysApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getCategorys:builder.query({
            query:()=> 'admin/categorys',
            transformResponse : (response) => {
                let categorys = response.map(category=>{
                    category.id = category._id;
                    return category
                })
                return adminCategorysAdapter.setAll(initialState,categorys)
            },
            providesTags:(result,error,arg)=>[
                {type:'adminCategorys',id:'LIST'},
                ...result.ids.map(id=>({type:'adminCategorys',id}))
            ]
        })
    })
})

export const {useGetCategorysQuery} = adminCategorysApiSlice;

export const selectCategorysResult = adminCategorysApiSlice.endpoints.getCategorys.select();

const selectCategorysData = createSelector(selectCategorysResult,(categorysResult)=>categorysResult.data)

export const {
    selectAll:selectAllCategorys,
    selectById:selectCategoryById,
    selectIds:selectCategorysIds
} = adminCategorysAdapter.getSelectors((state)=>selectCategorysData(state) ?? initialState)