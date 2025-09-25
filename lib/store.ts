import { configureStore } from "@reduxjs/toolkit"
import { bannersApi } from "./features/banners/bannersApi"

export const makeStore = () => {
    return configureStore({
        reducer: {
            [bannersApi.reducerPath]: bannersApi.reducer,
        },
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(
                bannersApi.middleware
            )
    })
}
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];