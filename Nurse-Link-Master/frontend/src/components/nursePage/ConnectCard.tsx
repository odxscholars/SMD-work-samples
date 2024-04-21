import { NurseType } from "../../types/nurseTypes/nurseType"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router"

const ConnectCard = ({ nurse }: { nurse: NurseType }) => {
    const { user } = useAuth()
    const nav = useNavigate()

    return (
        <div className="connectCard flex flex-col w-full pt-8 rounded-lg font-open-sans bg-white border">
            <div className="headerContainer px-8">
                <p className="textHeader font-bold text-xl text-left">
                    People you may know
                </p>
            </div>
            <div className="connectUsers pt-5 justify-center items-center">

            </div>
            <div className="connectBtn border-t w-full text-center py-3">
                <button className="button cursor-pointer font-bold" onClick={() => nav(`/nurse/edit/${user!.id}`)}>
                    Find Connections
                </button>
            </div>
        </div >
    )
}

export default ConnectCard