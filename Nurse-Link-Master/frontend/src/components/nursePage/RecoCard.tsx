import { NurseType } from "../../types/nurseTypes/nurseType"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router"

const RecoCard = ({ nurse }: { nurse: NurseType }) => {
    const { user } = useAuth()
    const nav = useNavigate()

    return (
        <div className="recoCard flex flex-col w-full pt-8 rounded-lg font-open-sans bg-white border mb-5">
            <div className="headerContainer px-8">
                <p className="textHeader font-bold text-xl text-left">
                    Recommended by
                </p>
            </div>
            <div className="recoUsers pt-5 justify-center items-center">

            </div>
            <div className="recoBtn border-t w-full text-center py-3">
                <button className="button cursor-pointer font-bold" onClick={() => nav(`/nurse/recommendations/receive/${user!.id}`)}>
                    Recommendations
                </button>
            </div>
        </div >
    )
}

export default RecoCard