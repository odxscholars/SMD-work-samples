import { useRef, useState } from "react"
import axios from "axios"
import { Id, toast } from "react-toastify"
import { useAuth } from "./useAuth"

const useRegister = () => {
    const [state, setState] = useState<string | null>(null)
    const { dispatch } = useAuth()
    const toastID = useRef<Id>()

    const registerNurse = async (
        username: string,
        password: string,
        email: string,
        firstname: String,
        lastname: String,
        birthdate: String,
        gender: String,
        country: String,
        city: String
    ) => {
        toastID.current = toast.loading("Registering...")
        //ported to axios
        console.log(import.meta.env.VITE_API_URL)
        await axios({
            method: "post",
            data: {
                username,
                password,
                email,
                firstname,
                lastname,
                birthdate,
                gender,
                country,
                city,
                userType: "nurse",
            },
            withCredentials: true,
            url: import.meta.env.VITE_API_URL + "/api/auth/register",
        })
            // for registering: surmount this thingy
            .then((data) => {
                setState("Success")
                console.log(data)
                localStorage.setItem("user", JSON.stringify(data.data))
                dispatch?.({ type: "LOGIN", payload: data.data })
                toast.update(toastID.current ?? "", {
                    render: "Successfully Logged in!",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    type: "success",
                    isLoading: false,
                })
            })
            .catch((e) => {
                const res = e.response.data.message
                toast.update(toastID.current ?? "", {
                    render: res,
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    type: "error",
                    isLoading: false,
                })
                setState("Error")
            })
    }

    const registerInstitute = async (
        username: string,
        password: string,
        email: string,
        instituteName: String,
        country: String,
        city: String
    ) => {
        toastID.current = toast.loading("Registering...")
        //ported to axios
        await axios({
            method: "post",
            data: {
                instituteName,
                username,
                password,
                email,
                country,
                city,
                userType: "institute",
            },
            withCredentials: true,
            url: import.meta.env.VITE_API_URL + "/api/auth/register",
        })
            // for registering: surmount this thingy
            .then((data) => {
                setState("Success")
                console.log(data)
                localStorage.setItem("user", JSON.stringify(data.data))
                dispatch?.({ type: "LOGIN", payload: data.data })
                toast.update(toastID.current ?? "", {
                    render: "Successfully Logged in!",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    type: "success",
                    isLoading: false,
                })
            })
            .catch((e) => {
                const res = e.response.data.message
                toast.update(toastID.current ?? "", {
                    render: res,
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    type: "error",
                    isLoading: false,
                })
                setState("Error")
            })
    }

    return { registerNurse, registerInstitute, state }
}

export default useRegister
