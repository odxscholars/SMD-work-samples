import { NurseType } from "../../types/nurseTypes/nurseType"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router"
import { PiFileBold } from "react-icons/pi";

const ResumeCard = ({ nurse }: { nurse: NurseType }) => {
    const { user } = useAuth()
    const nav = useNavigate()

    const renderResumeCard = () => {
        return (
            nurse?.credentials.document.some(doc => doc.type === 'resume') && nurse?.credentials.document.length >= 1 && (
                <div className="recoCard flex flex-col w-full py-8 px-8 rounded-lg font-open-sans bg-white border mb-5">
            <div className="headerContainer ">
                <p className="textHeader font-bold text-xl text-left">
                    Resume
                </p>
            </div>
            <div className="nameVerified flex justify-center items-center mt-5 gap-2">
                <PiFileBold className="w-6 h-full inline-flex text-out-line-text" />
                    <div className="fullName font-bold w-full text-base text-left text-outline-text ">
                        <a href={nurse?.credentials.document.find(doc => doc.type === 'resume')?.link} className="underline">
                            {nurse?.firstName} {nurse?.lastName}
                        </a>
                    </div>
            </div>
        </div >
        )
        )
    }

    return renderResumeCard()
}

export default ResumeCard

