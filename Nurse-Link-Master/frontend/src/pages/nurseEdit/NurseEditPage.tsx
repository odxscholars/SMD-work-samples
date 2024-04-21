import { useParams } from "react-router"
import EditSide from "../../components/nurseEdit/EditSide"
import NurseEditComponent from "../../components/nurseEdit/NurseEditComponent"
import { useAuth } from "../../hooks/useAuth"
import UserType from "../../types/userTypes/userType"
import { Suspense } from "react"

const NurseEditPage = () => {
    const { user } = useAuth()
    const { userId } = useParams()
    return (
        <div className="flex p-20 gap-20 w-full min-h-screen">
            <EditSide user={user as UserType} />
            <Suspense fallback={<div>Loading...</div>}>
                <NurseEditComponent userId={userId as string} />
            </Suspense>
        </div>
    )
}

export default NurseEditPage
