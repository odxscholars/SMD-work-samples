import { useState, useEffect } from "react"
import { useLocation } from "react-router"
import RegisterLayout from "./registerLayout/RegisterLayout"
import MainLayout from "./mainLayout/MainLayout"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const Layout = () => {
    const location = useLocation()
    const [noNavbar, setnoNavbar] = useState<Boolean>(false)
    useEffect(() => {
        if (location.pathname.includes("register")) {
            setnoNavbar(true)
        } else {
            setnoNavbar(false)
        }
    }, [location])
    return (
        <>
            {noNavbar ? <RegisterLayout /> : <MainLayout />}
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default Layout
