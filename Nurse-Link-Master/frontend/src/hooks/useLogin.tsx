import { useRef, useState } from "react"
import axios from "axios"
import { Id, toast } from "react-toastify"
import { useAuth } from "./useAuth"
import { useNavigate } from "react-router"

const useLogin = () => {
    const [state, setState] = useState<string | null>(null)
    const { dispatch } = useAuth()
    const toastID = useRef<Id>()
    const router = useNavigate()

    const login = async (username: string, password: string) => {
        toastID.current = toast.loading("Logging in...")
        //ported to axios
        await axios({
            method: "post",
            data: {
                username,
                password,
            },
            withCredentials: true,
            url: import.meta.env.VITE_API_URL + "/api/auth/login",
        })
            .then((data) => {
                setState("Success")
                localStorage.setItem("user", JSON.stringify(data.data));
                dispatch?.({type: "LOGIN", payload: data.data})
                toast.update(toastID.current ?? "", {
                    render: "Successfully Logged in!",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    type: "success",
                    isLoading: false,
                })
                router(`/nurse/${data.data.id}`)
            })
            .catch((e) => {
                toast.update(toastID.current ?? "", {
                    render: e.response?.data?.message ?? e.message ,
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    type: "error",
                    isLoading: false,
                })
                setState("Error")
            })
    }
    return { login, state }
}

export default useLogin
