import { Link } from "react-router-dom"
import UserType from "../../types/userTypes/userType"

const EditSide = ({ user }: { user: UserType }) => {
    return (
        <div className="invisible md:visible flex flex-col w-1/4 text-outline-text">
            <p className="text-3xl font-bold mb-5">Edit Profile</p>
            <Link to={`/nurse/edit/${user?.id}`}>
                <p className="text-xl mb-2 hover:text-secondary">Personal Information</p>
            </Link>
            <Link to={`/nurse/edit/background/${user?.id}`}>
                <p className="text-xl mb-2 hover:text-secondary">Background</p>
            </Link>
            <Link to={`/nurse/edit/contact/${user?.id}`}>
                <p className="text-xl mb-2 hover:text-secondary">Contact Details</p>
            </Link>
            <Link to={`/nurse/edit/documents/${user?.id}`}>
                <p className="text-xl mb-2 hover:text-secondary">Documents</p>
            </Link>

        </div>
    )
}

export default EditSide
