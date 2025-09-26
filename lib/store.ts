import { configureStore } from "@reduxjs/toolkit"
import { bannersApi } from "./features/banners/bannersApi"
import { productsApi } from "./features/products/productsApi";

export const makeStore = () => {
    return configureStore({
        reducer: {
            [bannersApi.reducerPath]: bannersApi.reducer,
            [productsApi.reducerPath]: productsApi.reducer,
        },
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(
                bannersApi.middleware,
                productsApi.middleware,
            )
    })
}
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];