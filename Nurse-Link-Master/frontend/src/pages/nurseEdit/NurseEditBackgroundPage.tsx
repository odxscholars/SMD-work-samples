import { useParams } from "react-router"
import EditSide from "../../components/nurseEdit/EditSide"
import { useAuth } from "../../hooks/useAuth"
import UserType from "../../types/userTypes/userType"
import { Suspense } from "react"
import NurseEditBackground from "../../components/nurseEdit/NurseEditBackground.tsx"

const NurseEditBackgroundPage = () => {
    const { user } = useAuth()
    const { userId } = useParams()
    return (
        <div className="flex p-20 gap-20 w-full min-h-screen">
            <EditSide user={user as UserType} />
            <Suspense fallback={<div>Loading...</div>}>
                <NurseEditBackground userId={userId as string} />
            </Suspense>
        </div>
    )
}

export default NurseEditBackgroundPage
