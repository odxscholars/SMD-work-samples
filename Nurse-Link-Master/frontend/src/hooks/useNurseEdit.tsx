import { useRef } from "react"
import { Id, toast } from "react-toastify"
import axios from "axios"

const useNurseEdit = () => {
    const toastID = useRef<Id>()
    const editDetails = async (details: object) => {
        toastID.current = toast.loading("Updating your profile now...")

        axios
            .post(
                import.meta.env.VITE_API_URL + "/api/nurse/edit/details",
                details,
                {
                    withCredentials: true,
                }
            )
            .then((res) => {
                toast.update(toastID.current ?? "", {
                    render: res.data.message,
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    type: "success",
                    isLoading: false,
                })
            })
            .catch((e) => {
                toast.update(toastID.current ?? "", {
                    render: e.response?.data?.message ?? e.message,
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    type: "error",
                    isLoading: false,
                })
            })
    }
    return { editDetails }
}


export default useNurseEdit