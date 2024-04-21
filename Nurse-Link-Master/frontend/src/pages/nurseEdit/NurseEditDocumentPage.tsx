import { useParams } from "react-router"
import EditSide from "../../components/nurseEdit/EditSide"
import { useAuth } from "../../hooks/useAuth"
import UserType from "../../types/userTypes/userType"
import { Suspense } from "react"
import NurseEditDocument from "../../components/nurseEdit/NurseEditDocument.tsx"

const NurseEditDocumentPage = () => {
    const { user } = useAuth()
    const { userId } = useParams()
    return (
        <div className="flex p-20 gap-20 w-full min-h-screen">
            <EditSide user={user as UserType} />
            <Suspense fallback={<div>Loading...</div>}>
                <NurseEditDocument userId={userId as string} />
            </Suspense>
        </div>
    )
}

export default NurseEditDocumentPage
