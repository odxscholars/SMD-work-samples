import { useState, useEffect } from "react"
import axios from "axios"
//this is for getting data
const useDynamicFetch = (url: string, state: any) => {
    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState<boolean>()
    const [error, setError] = useState<any>()
    useEffect(() => {
        const fetchData = async (url: string) => {
            try {
                setLoading(true)

                const response = await axios.get(
                    import.meta.env.VITE_API_URL + url,
                    {
                        withCredentials: true,
                    }
                )

                if (response.status === 200) {
                    setData(response.data)
                    setLoading(false)
                } else {
                    setError(true)
                    setLoading(false)
                }
            } catch (error) {
                setError(true)
                setLoading(false)
            }
        }
        fetchData(url)
    }, [url, state])
    return { data, loading, error }
}

export default useDynamicFetch
