import { Link } from "react-router-dom"
import { useParams } from "react-router"
import useFetch from "../../hooks/useFetch"
import { Suspense } from "react"
import NurseCard from "../../components/cards/NurseCard"
import RecoCard from "../../components/cards/RecoCard"

const NurseRecoGivePage = () => {
    const { userId } = useParams()
    const { data: nurseId, loading } = useFetch(`/api/nurse/${userId}`)
    return (
        <div className="flex md:p-20 w-full min-h-screen">
            <div className="flex flex-col w-[25%] mr-10">
                <NurseCard nurse={nurseId} />
                <p className="text-2xl mt-8 font-open-sans font-bold">Recommendations</p>
                <Link to={`/nurse/recommendations/receive/${userId}`}>
                    <p className="text-xl mt-3 font-open-sans">Received</p>
                </Link>
                <Link to={`/nurse/recommendations/give/${userId}`}>
                    <p className="text-xl mt-3 font-open-sans text-secondary underline">Given</p>
                </Link>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="flex flex-col w-[75%]">
                    <p className="text-5xl font-open-sans font-bold text-primary mb-8">Given</p>
                    <RecoCard nurse={nurseId} />
                </div>
            </Suspense>
        </div>
    )
}

export default NurseRecoGivePage
