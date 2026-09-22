 import { createApi } from "@reduxjs/toolkit/query/react";
 import type { Product } from "../../app/models/product";
 import { baseQuerywithErrorHandling } from "../../app/api/baseApi";

 //Redux Toolk Kit
 export const catalogApi = createApi ({
    reducerPath: 'catalogApi',
    baseQuery: baseQuerywithErrorHandling,
    endpoints: (builder) => ({
        fetchProducts: builder.query<Product[], void>({
            query: () => ({url: 'products'})
        }),
        fetchProductDetails: builder.query<Product, number>({
            query:(productId) => `products/${productId}`
        })
    })
 });

 export const{useFetchProductDetailsQuery, useFetchProductsQuery} = catalogApi;
