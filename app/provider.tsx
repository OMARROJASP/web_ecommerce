"use client"


import { makeStore } from "@/lib/store"
import { Provider } from "react-redux"

export default function ReduxProvider({children}: {children: React.ReactNode}) {
    return <Provider store={makeStore()}>{children}</Provider>
}
