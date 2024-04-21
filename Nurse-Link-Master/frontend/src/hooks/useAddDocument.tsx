import axios from "axios"
import { useRef, useState } from "react"
import { toast, Id } from "react-toastify"

const useAddDocument = () => {
    const toastID = useRef<Id>()
    const [state, setState] = useState<string>("")
    console.log("here in useAddDocument")
    const addDocument = async (
        data: FormData,
        setChanged: React.Dispatch<React.SetStateAction<boolean>>,
        setShow: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        console.log("here in addDocument")
        await axios
            .post(
                import.meta.env.VITE_API_URL + "/api/nurse/edit/addDocument",
                data,
                {
                    withCredentials: true,
                }
            )
            .then((datum) => {
                setState("success")
                toast.update(toastID.current ?? "", {
                    render: datum.data.message,
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    type: "success",
                    isLoading: false,
                })
                setChanged((oldValue) => !oldValue)
                setShow(false)
                return datum.data
            })
            .catch((e) => {
                setState("error")
                console.log(e)
                toast.update(toastID.current ?? "", {
                    render: e.response?.data?.message ?? e.message,
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    type: "error",
                    isLoading: false,
                })
            })
        return state
    }
    return {addDocument }
}

export default useAddDocument