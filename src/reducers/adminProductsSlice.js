import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const adminProductsAdapter = createEntityAdapter()
const initialState = adminProductsAdapter.getInitialState()

export const adminProductsApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:()=> 'admin/products',
            transformResponse : (response) => {
                let products = response.map(product=>{
                    product.id = product._id;
                    return product
                })
                return adminProductsAdapter.setAll(initialState,products)
            },
            providesTags:(result,error,arg)=>[
                {type:'adminProducts',id:'LIST'},
                ...result.ids.map(id=>({type:'adminProducts',id}))
            ]
        })
    })
})

export const {useGetProductsQuery} = adminProductsApiSlice;

export const selectProductsResult = adminProductsApiSlice.endpoints.getProducts.select();

const selectProductsData = createSelector(selectProductsResult,(productsResult)=>productsResult.data)

export const {
    selectAll:selectAllProducts,
    selectById:selectProductsById,
    selectIds:selectProductsIds
} = adminProductsAdapter.getSelectors((state)=>selectProductsData(state) ?? initialState)