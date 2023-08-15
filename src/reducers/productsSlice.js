import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const productsAdapter = createEntityAdapter()
const initialState = productsAdapter.getInitialState()

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:()=> '/products',
            transformResponse : (response) => {
                let products = response.map(product=>{
                    product.id = product._id;
                    return product
                })
                return productsAdapter.setAll(initialState,products)
            },
            providesTags:(result,error,arg)=>[
                {type:'Products',id:'LIST'},
                ...result.ids.map(id=>({type:'Products',id}))
            ]
        })
    })
})

export const {useGetProductsQuery} = productsApiSlice;

export const selectProductsResult = productsApiSlice.endpoints.getProducts.select();

const selectProductsData = createSelector(selectProductsResult,(productsResult)=>productsResult.data)

export const {
    selectAll:selectAllProducts,
    selectById:selectProductsById,
    selectIds:selectProductsIds
} = productsAdapter.getSelectors((state)=>selectProductsData(state) ?? initialState)