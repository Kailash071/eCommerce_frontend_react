import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const categorysAdapter = createEntityAdapter()
const initialState = categorysAdapter.getInitialState()

export const categorysApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getCategorys:builder.query({
            query:()=> '/categorys',
            transformResponse : (response) => {
                let categorys = response.map(category=>{
                    category.id = category._id;
                    return category
                })
                return categorysAdapter.setAll(initialState,categorys)
            },
            providesTags:(result,error,arg)=>[
                {type:'categorys',id:'LIST'},
                ...result.ids.map(id=>({type:'categorys',id}))
            ]
        })
    })
})

export const {useGetCategorysQuery} = categorysApiSlice;

export const selectCategorysResult = categorysApiSlice.endpoints.getCategorys.select();

const selectCategorysData = createSelector(selectCategorysResult,(categorysResult)=>categorysResult.data)

export const {
    selectAll:selectAllCategorys,
    selectById:selectCategoryById,
    selectIds:selectCategorysIds
} = categorysAdapter.getSelectors((state)=>selectCategorysData(state) ?? initialState)