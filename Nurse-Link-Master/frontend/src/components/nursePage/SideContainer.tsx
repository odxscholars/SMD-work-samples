import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import { NurseType } from "../../types/nurseTypes/nurseType"

import ProgressCard from "./ProgressCard"
import ResumeCard from "./ResumeCard"
import RecoCard from "./RecoCard"
import ConnectCard from "./ConnectCard"
import EmptyProfile from "./EmptyProfileCard"
import ProfileDetails from "./ProfileDetails"

const SideContainer = ({ nurse }: { nurse: NurseType }) => {
    const { user } = useAuth()
    const [isSearcher, setIsSearcher] = useState<boolean>(false)
    const [isAboutVisible, setIsAboutVisible] = useState<string>("none")
    const [isEmpty, setIsEmpty] = useState<boolean>(true)

    useEffect(() => {
        if (user?.id === nurse?.userId) {
            setIsSearcher(true)
        } else {
            setIsSearcher(false)
        }

        if (
            nurse?.technicalSkill.length >= 1 ||
            nurse?.credentials.education.length >= 1 ||
            nurse?.credentials.experience.length >= 1 ||
            nurse?.credentials.volunteering.length >= 1 ||
            nurse?.credentials.document.length >= 1
        ) {
            setIsEmpty(false)
        }

        console.log("Is Searcher:", isSearcher)
    }, [user, nurse])

    return (
        <div className="flex w-full">
            <div className="leftContainer w-[28%]">
                {user?.id === nurse?.userId && <ProgressCard nurse={nurse} />}
                <ResumeCard nurse={nurse} />
                <RecoCard nurse={nurse} />
                <ConnectCard nurse={nurse} />
            </div>
            <div className="rightContainer pl-10 w-[72%]">
                {isEmpty ? (
                    <div className="isEmpty">
                        <EmptyProfile nurse={nurse} />
                    </div>
                ) : (
                    <div className="isNotEmpty">
                        <ProfileDetails nurse={nurse} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default SideContainer
