import { configureStore } from "@reduxjs/toolkit"
import { bannersApi } from "./features/banners/bannersApi"
import { productsApi } from "./features/products/productsApi";
import { userApi } from "./features/user/userApi";

export const makeStore = () => {
    return configureStore({
        reducer: {
            [bannersApi.reducerPath]: bannersApi.reducer,
            [productsApi.reducerPath]: productsApi.reducer,
            [userApi.reducerPath]: userApi.reducer,
        },
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(
                bannersApi.middleware,
                productsApi.middleware,
                userApi.middleware,
            )
    })
}
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];