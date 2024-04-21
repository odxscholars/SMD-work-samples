import { useEffect } from "react"
import axios from "axios"
import { useAuth } from "./hooks/useAuth"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"
import usePing from "./hooks/usePing"
import Layout from "./layouts/Layout"

function App() {
    const { pingServer } = usePing()

    useEffect(() => {
        const interval = setInterval(() => {
            // pingServer()
        }, 10000)
        return () => clearInterval(interval)
    }, [])
    return (
        <>
            <Layout />
        </>
    )
}

export default App
