import { NurseType } from "../../types/nurseTypes/nurseType"
import { PiCheckCircleBold } from "react-icons/pi"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router"

const ProgressCard = ({ nurse }: { nurse: NurseType }) => {
    const { user } = useAuth()
    const nav = useNavigate()

    const outerStyle = {
        "--value": `${nurse?.progress}`,
        "--size": "12rem",
        "--thickness": "8px",
    } as React.CSSProperties

    const profileProg = [
        {
            name: "Initial Details",
            done: true,
        },
        {
            name: "Technical Skill",
            done: nurse?.technicalSkill.length >= 1,
        },
        {
            name: "Education",
            done: nurse?.credentials.education.length >= 1,
        },
        {
            name: "Experience",
            done: nurse?.credentials.experience.length >= 1,
        },
        {
            name: "Volunteers",
            done: nurse?.credentials.volunteering.length >= 1,
        },
        {
            name: "Document",
            done: nurse?.credentials.document.length >= 1,
        },
    ]

    return (
        <div className="progressCard flex flex-col justify-center items-center w-full pt-8 rounded-lg font-open-sans bg-white border mb-5">
            <div className="textContainer px-8">
                <p className="textHeader font-bold text-xl text-left">
                    Your profile is making progress!
                </p>
                <p className="textBody text-left text-base pt-4">
                    Check out what else you can add to complete your profile.
                </p>
            </div>
            <div className="progressContainer pt-5 items-center text-center">
                <div
                    className="relative radial-progress transition-all ease-in duration-150 text-secondary"
                    style={outerStyle}
                >
                    <div
                        className="flex flex-col items-center justify-center border-8 rounded-full"
                        style={{
                            width: "12rem",
                            height: "12rem",
                        }}
                    >
                        <p className="percentage font-bold text-3xl text-secondary">
                            {nurse?.progress}%
                        </p>
                        <p className="complete text-xl text-secondary mt-2 font-bold">COMPLETE</p>
                    </div>
                </div>
                <div className="progressChecklist px-8 py-6">
                    {profileProg.map((prog) => (
                        <div
                            className={`flex ${prog.done
                                ? "text-primary"
                                : "text-outline-text opacity-30"
                                }`}
                        >
                            <div className="progressName flex items-center gap-2 mt-2">
                                <PiCheckCircleBold className="w-8 h-8" />
                                <p className="w-44 text-left">{prog.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="editProfileBtn border-t py-3">
                    <button className="button cursor-pointer font-bold" onClick={() => nav(`/nurse/edit/${user!.id}`)}>
                        Edit Profile
                    </button>
                </div>
            </div>
        </div >
    )
}

export default ProgressCard
