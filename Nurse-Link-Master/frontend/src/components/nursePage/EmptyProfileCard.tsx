import { NurseType } from "../../types/nurseTypes/nurseType"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"

const EmptyProfileCard = ({ nurse }: { nurse: NurseType }) => {
    const { user } = useAuth()
    const nav = useNavigate()

    const [imageLink, setImageLink] = useState<string>('https://res.cloudinary.com/dlr2cz5f3/image/upload/v1699267874/nzqnxccvmeudbal3s8xt.jpg')
    const [isOwnProfile, setIsOwnProfile] = useState<boolean>(false)

    useEffect(() => {
        if (user?.id === nurse?.userId) {
            setImageLink('https://res.cloudinary.com/dialvcsco/image/upload/v1699261841/r1rizqeoij5yify2cut0.jpg');
            setIsOwnProfile(true)
        }
        console.log("IsOwnProfile:", isOwnProfile);
    }, [user, nurse]);

    return (
        <div className="flex flex-col justify-center items-center w-full border-2 rounded-lg bg-white">
            <img src={imageLink} className="w-1/2 py-10" ></img>
            {isOwnProfile ? (
                <div className="flex flex-col justify-center items-center pb-10">
                    <div className="font-bold text-2xl mb-3"> Fill out a section in your profile! </div>
                    <div> Access 'Edit Profile' in the top right to </div>
                    <div> complete your details.</div>
                </div>
            ) : (
                <div className="font-bold text-2xl pb-10">Building Profile, One Detail at a Time!</div>
            )}
        </div>

    )
}

export default EmptyProfileCard
