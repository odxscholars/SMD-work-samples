import React, { createContext, useEffect, useReducer, ReactNode } from "react"
import UserType from "../types/userTypes/userType"

export const AuthContext = createContext<{
    user: null | UserType
    dispatch: React.Dispatch<Action> | undefined
}>({ user: null, dispatch: undefined })

export type Action = { type: "LOGIN"; payload: UserType } | { type: "LOGOUT" }

const authReducer = (
    state: { user: null | UserType },
    action: Action
): { user: null | UserType } => {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload }
        case "LOGOUT":
            localStorage.removeItem("user")
            return { user: null }
        default:
            return state
    }
}

type AuthContextProviderProps = {
    children: ReactNode
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
    children,
}: AuthContextProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
    })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user") as string)
        if (user) {
            dispatch({ type: "LOGIN", payload: user })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user: state.user, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
