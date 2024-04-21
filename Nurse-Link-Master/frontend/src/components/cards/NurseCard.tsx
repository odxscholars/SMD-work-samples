import { NurseType } from "../../types/nurseTypes/nurseType"
import { BsPeopleFill } from "react-icons/bs"
import { BsBriefcaseFill } from "react-icons/bs"
import { BsFillCheckCircleFill } from "react-icons/bs"
import { useAuth } from "../../hooks/useAuth"

const NurseCard = ({ nurse }: { nurse: NurseType }) => {
    const { user } = useAuth()
    return (
        <div className="invisible md:visible rounded-lg p-8 shadow-md">
            <div className="flex items-center mb-5">
                <img
                    src={nurse?.profilePicture}
                    className="object-cover rounded-full border-white border-4 w-1/3 drop-shadow"
                    alt="Nurse's Profile Picture"
                />
                <div className="flex flex-col text-left ml-5">
                    <p className="font-poppins font-black text-xl">{nurse?.firstName} {nurse?.lastName}</p>
                    <p className="font-pt-sans italic text-sm">{nurse?.country}, {nurse?.city}</p>
                </div>
            </div>
            <div className="flex items-center text-lg font-pt-sans mb-3">
                <p className="text-xl mr-4">
                    <BsPeopleFill />
                </p>
                <p>Connections</p>
                {/*user.connections.length*/}
                <p className="ml-auto">6</p>
            </div>
            <div className="flex items-center text-lg font-pt-sans mb-3">
                <p className="text-xl mr-4">
                    <BsBriefcaseFill />
                </p>
                <p>Saved Jobs</p>
                <p className="ml-auto">3</p>
            </div>
            <div className="flex items-center text-lg font-pt-sans">
                <p className="text-xl mr-4">
                    <BsFillCheckCircleFill />
                </p>
                <p>Fast Pass</p>
                <p className="ml-auto">Unverified</p>
            </div>
        </div>
    )
}

export default NurseCard