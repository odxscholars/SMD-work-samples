import { useParams } from "react-router"
import useFetch from "../../hooks/useFetch"
import { useEffect } from "react"
import NurseHeader from "../../components/nursePage/NurseHeader"
import SideContainer from "../../components/nursePage/SideContainer"

const Nurse = () => {
    const { userId } = useParams()
    const { data: nurse, loading } = useFetch(`/api/nurse/${userId}`)

    useEffect(() => {
        //console.log(nurse)
    }, [nurse])
    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="flex flex-col w-full min-h-screen">
                    <NurseHeader nurse={nurse} />
                    <div className="w-full bg-[#EEEEEE] mt-10 py-10 px-20">
                        <SideContainer nurse={nurse} />
                    </div>
                </div>
            )}
        </>
    )
}

export default Nurse
