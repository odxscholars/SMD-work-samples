import { useParams } from "react-router"
import useFetch from "../../hooks/useFetch"
import { useEffect } from "react"
import ConnectionRequestCard from "../../components/connectionComponents/connectionRequestReceivedCard"
import NurseCard from "../../components/others/NurseCard"
import RequestCard from "../../components/others/RequestCard"
import { useAuth } from "../../hooks/useAuth";


const ConnectionRequestReceived = () => {
    const { userId } = useParams()
    const { user } = useAuth()
    const { data: nurse, loading } = useFetch(`/api/nurse/${userId}`)

    useEffect(() => {
        //console.log(nurse.connections)
    }, [nurse])
    const isAuthorized = user?.id === userId;

    return (
        <>
            {isAuthorized ? (
                <>
                    {loading ? (
                        <div>loading...</div>
                    ) : (
                        <div className="flex flex-row md:p-20 gap-10 w-full min-h-screen">
                            <div className="sidebar w-1/4 min-h-screen"> 
                                <NurseCard nurse={nurse}/>
                                <RequestCard nurse={nurse} highlighted="Connections"/>
                            </div>
                            <div className="flex flex-col main-section w-3/4">
                                <div className="mb-5">
                                    <p style={{ fontFamily: "Poppins", color: "#053B50", fontSize: "3rem", fontWeight: 900}}>
                                        {nurse?.connectionReceived?.length} Connections Requests
                                    </p>
                                </div>
                                <div className="grid grid-cols-3 gap-4 w-100">
                                    {nurse?.connectionReceived?.map((connectionId, index) => (
                                        <ConnectionRequestCard key={index} nurseId={connectionId} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div className="text-4xl flex justify-center">
                    Sorry, you cannot access this page.
                </div>
            )}
        </>
    )
}

export default ConnectionRequestReceived