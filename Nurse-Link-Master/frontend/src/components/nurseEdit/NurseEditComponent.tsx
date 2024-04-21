import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import { ChangeBannerPhoto, ChangeProfilePhoto } from "../modals/editProfileModals"
import { BsFillImageFill } from "react-icons/bs"
import { motion } from "framer-motion"
import useDynamicFetch from "../../hooks/useDynamicFetch"
import useNurseEdit from "../../hooks/useNurseEdit"

const NurseEditComponent = ({ userId }: { userId: string }) => {
    const [changed, setChanged] = useState<boolean>(false)
    const { data: nurse, loading } = useDynamicFetch(
        `/api/nurse/${userId}`,
        changed
    )
    const { editDetails } = useNurseEdit()
    const [firstName, setFirstName] = useState<string>(nurse?.firstName)
    const [lastName, setLastName] = useState(nurse?.lastName)
    const [specialization, setSpecialization] = useState(nurse?.lastName)
    const [city, setCity] = useState(nurse?.city)
    const [showProfileModal, setShowProfileModal] = useState<boolean>(false)
    const [showBannerModal, setShowBannerModal] = useState<boolean>(false)
    const [hoverProfile, setHoverProfile] = useState<boolean>(false)
    const [hoverBanner, setHoverBanner] = useState<boolean>(false)

    useEffect(() => {
        setFirstName(nurse?.firstName)
        setLastName(nurse?.lastName)
        setSpecialization(nurse?.specialization ?? "")
        setCity(nurse?.city ?? "")
    }, [loading])

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setSpecialization("");
        setCity("");
    };

    const handleSubmit = async () => {
        await editDetails({
            specialization,
            firstName,
            lastName,
            city,
        })
    }

    return (
        <div id="nurse-edit-container" className="w-full h-fit flex flex-col">

            {/*Title*/}
            <div id="nurse-edit-title-container" className="text-4xl font-bold text-primary mb-8">
                Personal Information
            </div>

            {/*Profile Banner and Image*/}
            <div id="nurse-edit-img-container" className="flex flex-col rounded-2xl drop-shadow-lg h-[450px] mb-5 bg-white">
                <div
                    className="relative w-full h-2/3 flex cursor-pointer justify-center items-center"
                    onMouseEnter={() => setHoverBanner(true)}
                    onMouseLeave={() => setHoverBanner(false)}
                >
                    {hoverBanner && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeIn" }}
                            className="absolute bg-primary/50 flex flex-col justify-center items-center w-full h-full rounded-t-2xl"
                            onClick={() => setShowBannerModal(true)}
                        >
                            <BsFillImageFill className="text-white text-4xl" />
                            <p className="text-white font-semibold mt-2">
                                Edit Profile Banner
                            </p>
                        </motion.div>
                    )}
                    <img
                        src={nurse?.bannerPicture}
                        className="object-cover w-full h-full rounded-t-2xl"
                    />
                </div>
                <div
                    id="nurse-edit-profile"
                    className="absolute bottom-5 left-20 mb-10"
                >
                    <div
                        onMouseEnter={() => setHoverProfile(true)}
                        onMouseLeave={() => setHoverProfile(false)}
                        className="border-8 border-white shadow-b-2xl flex justify-center bg-white items-center rounded-full cursor-pointer"
                    >
                        {hoverProfile && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeIn",
                                }}
                                onClick={() => setShowProfileModal(true)}
                                className="absolute bg-[#053B50]/50 flex flex-col justify-center items-center w-full h-full rounded-full"
                            >
                                <BsFillImageFill className="text-white text-4xl" />
                                <p className="text-white font-semibold mt-2">
                                    Edit Profile Photo
                                </p>
                            </motion.div>
                        )}
                        <img
                            src={nurse?.profilePicture}
                            className="w-full h-full rounded-full"
                        />
                    </div>
                </div>
            </div>

            {/*Profile Information*/}
            <div id="nurse-edit-details" className="flex flex-col w-full mt-3">

                {/*Name*/}
                <div className="flex justify-between w-full gap-8">
                    <div className="w-full">
                        <label className="label relative text-outline-text text-sm w-[100px] h-5 bg-white ml-3 justify-center">
                            First Name
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="bg-transparent border-outline-text border-solid border rounded-md w-full"
                            style={{ paddingLeft: '15px', padding: '10px', height: '45px', marginTop: '-10px' }}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <label className="label relative text-outline-text text-sm w-[100px] h-5 bg-white ml-3 justify-center">
                            Last Name
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="bg-transparent border-outline-text border-solid border rounded-md w-full"
                            style={{ paddingLeft: '15px', padding: '10px', height: '45px', marginTop: '-10px' }}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>

                {/*Specialization and City*/}
                <div className="flex justify-between w-full gap-8 mt-5">
                    <div className="w-full">
                        <label className="label relative text-outline-text text-sm w-[120px] h-5 bg-white ml-3 justify-center">
                            Specialization
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="bg-transparent border-outline-text border-solid border rounded-md w-full"
                            style={{ paddingLeft: '15px', padding: '10px', height: '45px', marginTop: '-10px' }}
                            value={specialization}
                            onChange={(e) => setSpecialization(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <label className="label relative text-outline-text text-sm w-[60px] h-5 bg-white ml-3 justify-center">
                            City
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="bg-transparent border-outline-text border-solid border rounded-md w-full"
                            style={{ paddingLeft: '15px', padding: '10px', height: '45px', marginTop: '-10px' }}
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                </div>

                {/*Recommendations*/}
                <div className="flex my-8 w-full">
                    <small className="mr-5">
                        Do you want your recommendations to be shown in your profile?{" "}
                    </small>
                    <input
                        type="radio"
                        name="radio-1"
                        className="radio"
                    />
                    <small className="ml-2 mr-4">
                        Yes{" "}
                    </small>
                    <input
                        type="radio"
                        name="radio-1"
                        className="radio "
                    />
                    <small className="ml-2">
                        No{" "}
                    </small>
                </div>

                <div className="flex justify-center w-full">
                    <button
                        onClick={handleReset}
                        className="btn w-[15%] mr-5 rounded-full bg-white hover:bg-accent-blue text-secondary hover:text-neutral normal-case drop-shadow-md"
                    >
                        Reset
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="btn w-[15%] rounded-full bg-secondary hover:bg-accent-blue text-white hover:text-neutral normal-case drop-shadow-md"
                    >
                        Save
                    </button>
                </div>
            </div>

            <ChangeProfilePhoto
                setShow={setShowProfileModal}
                show={showProfileModal}
                setChanged={setChanged}
            />
            <ChangeBannerPhoto
                show={showBannerModal}
                setShow={setShowBannerModal}
                setChanged={setChanged}
            />
        </div>
    )
}

export default NurseEditComponent
